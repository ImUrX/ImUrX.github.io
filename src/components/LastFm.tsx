import { createAsync, query, revalidate } from "@solidjs/router";
import clsx from "clsx";
import { ErrorBoundary, onMount, Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { getL10n } from "~/hooks/lang";
import { Link } from "@kobalte/core/link";
import { FaSolidCompactDisc } from "solid-icons/fa";
import { Separator } from "@kobalte/core/separator";
import ConditionalLink from "./ConditionalLink";

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

export default function LastFm() {
  const recentTracks = createAsync(() => recentTracksQuery().catch(() => 0));
  onMount(() => {
    const interval = setInterval(() => {
      revalidate([recentTracksQuery.key]);
    }, 30_000);

    if (globalThis.window) revalidate([recentTracksQuery.key]);

    return () => clearInterval(interval);
  });
  const t = getL10n();

  return (
    <ErrorBoundary fallback={(_, reset) => <></>}>
      <Transition name="slide">
        <Show when={recentTracks()}>
          <div
            class={clsx(
              `relative flex max-w-xl min-w-sm origin-top gap-5 overflow-hidden
              rounded-2xl bg-gray-950 p-5 pt-8 not-dark:bg-gray-50`,
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
  );
}
