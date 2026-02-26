import { FaSolidArrowRightLong, FaSolidCompactDisc } from "solid-icons/fa";
import {
  createSignal,
  ErrorBoundary,
  Index,
  JSX,
  lazy,
  onMount,
  Show,
} from "solid-js";
import { clsx } from "clsx/lite";
import { getL10n, useLang } from "~/hooks/lang";
import { Separator } from "@kobalte/core/separator";
import { Link } from "@kobalte/core/link";
import { createAsync, query, revalidate } from "@solidjs/router";
import ConditionalLink from "./ConditionalLink";
import { projectCards } from "~/routes/proyects/index";
import ProjectCard from "./ProjectCard";

const Transition = lazy(async () => ({
  default: (await import("solid-transition-group")).Transition,
}));

const recentTracksQuery = query(async () => {
  "use server";

  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=imurx&api_key=${process.env.SERVER_LASTFM}&format=json&limit=1`,
    {
      cf: { cacheTtlByStatus: { "200-299": 30, 404: 1, "500-599": 0 } },
    } as unknown as RequestInit,
  ).catch(() => null);
  const json = await response?.json().catch(() => null);
  if (
    !response?.ok ||
    json?.recenttracks?.track?.[0]?.["@attr"]?.nowplaying !== "true"
  ) {
    return 0;
  }
  return json.recenttracks.track[0];
}, "recentTracks");

export default function About(props: JSX.HTMLAttributes<HTMLElement>) {
  const recentTracks = createAsync(() => recentTracksQuery().catch(() => 0));
  const [show, setShow] = createSignal(false);
  onMount(() => {
    const interval = setInterval(() => {
      revalidate([recentTracksQuery.key]);
    }, 30_000);

    if (globalThis.window) revalidate([recentTracksQuery.key]);

    return () => clearInterval(interval);
  });
  onMount(() => {
    setShow(true);
    return () => setShow(false);
  });
  const t = getL10n();

  return (
    <main
      ref={props.ref}
      id="about"
      class="flex min-h-lvh flex-col items-center justify-center gap-5 p-4
        text-center min-wh:snap-center"
      lang={useLang()}
    >
      <span class="max-w-2xl">{t("about.me")}</span>
      <Show when={show()}>
        <ErrorBoundary fallback={(_, reset) => <></>}>
          <Transition name="slide">
            <Show when={recentTracks()}>
              <div
                class={clsx(
                  `relative flex max-w-xl min-w-sm origin-top gap-5
                  overflow-hidden rounded-2xl bg-gray-950 p-5 pt-8
                  not-dark:bg-gray-50`,
                )}
              >
                <span class="absolute top-2 z-1">
                  {t("about.listen1")}
                  <Link
                    href="https://www.last.fm/user/ImUrX"
                    target="_blank"
                    class={clsx(
                      `text-blue-200 underline not-dark:text-blue-900
                      hover:text-purple-400`,
                      "hover:not-dark:text-purple-600",
                    )}
                    referrerPolicy="no-referrer"
                  >
                    last.fm
                  </Link>
                  {t("about.listen2")}
                </span>
                <FaSolidCompactDisc
                  class="absolute -top-7 -right-7 h-16 w-16 animate-spin
                    text-purple-400 not-dark:text-purple-600"
                />
                <img
                  referrerPolicy="no-referrer"
                  src={recentTracks().image.at(-1)["#text"]}
                  class="max-h-[96px] max-w-[96px] rounded-2xl p-2"
                />
                <div class="flex flex-col items-start justify-center gap-3">
                  <div
                    class="flex items-center justify-center gap-3 hyphens-auto
                      text-gray-700 dark:text-gray-200"
                  >
                    <Link
                      href={recentTracks().url}
                      target="_blank"
                      class="text-left hover:underline"
                      referrerPolicy="no-referrer"
                    >
                      {recentTracks().name}
                    </Link>
                    <Show when={recentTracks()?.album?.["#text"]}>
                      <Separator
                        orientation="vertical"
                        class="h-[75%] w-px shrink-0 border-none bg-purple-400
                          not-dark:bg-purple-600"
                      />
                      <ConditionalLink
                        class="text-center"
                        base="https://musicbrainz.org/release/"
                        param={recentTracks().album.mbid}
                      >
                        {recentTracks().album["#text"]}
                      </ConditionalLink>
                    </Show>
                  </div>
                  <ConditionalLink
                    class="text-gray-500 dark:text-gray-400"
                    base="https://musicbrainz.org/artist/"
                    param={recentTracks().artist.mbid}
                  >
                    {recentTracks().artist["#text"]}
                  </ConditionalLink>
                </div>
              </div>
            </Show>
          </Transition>
        </ErrorBoundary>
      </Show>
      <div class="flex flex-col gap-2 text-left">
        <h2 class="text-xl">{t("about.some")}</h2>
        <Index each={[projectCards[1], projectCards[5]]}>
          {(props) => <ProjectCard {...props()} />}
        </Index>
        <Link
          class="flex cursor-pointer items-center gap-2 text-lg text-blue-200
            underline transition-colors not-dark:text-blue-900
            hover:text-purple-400 hover:not-dark:text-purple-600"
          href="./proyects/"
        >
          <span>{t("about.more")}</span>
          <FaSolidArrowRightLong />
        </Link>
      </div>
    </main>
  );
}
