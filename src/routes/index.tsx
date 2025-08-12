import { Link, Meta, Title } from "@solidjs/meta";
import { OcMarkgithub2 } from "solid-icons/oc";
import { createEffect, createSignal, For, Show } from "solid-js";
import { clsx } from "clsx/lite";
import { getL10n, useLang } from "~/hooks/lang";
import ALang from "~/components/ALang";
import ALink from "~/components/ALink";
import { BiSolidDonateHeart } from "solid-icons/bi";

const IMAGES = [
  {
    key: "eevee",
    url: "/images/eevee.png",
  },
  {
    key: "woona",
    url: "/images/profile.png",
  },
  {
    key: "daron",
    url: "/images/damnpic.png",
  },
];
const imgs = IMAGES.slice();
const englishes = ["🫖🔪", "🦅"];
const eng = englishes[Math.floor(Math.random() * englishes.length)];

export default function Home() {
  const [img, setImg] = createSignal(IMAGES[0]);
  const [gay, setGay] = createSignal(false);
  const t = getL10n();

  createEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("lang", useLang());
  });

  return (
    <main
      class="text-center p-4 flex flex-col md:flex-row justify-center items-center content-center gap-10 h-dvh"
      lang={useLang()}
    >
      <Title>{t("home")}</Title>
      <Meta name="description" content={t("description")} />
      <For each={IMAGES}>
        {({ url }) => (
          <Link rel="preload" href={url} as="image" type="image/png" />
        )}
      </For>
      <button
        onClick={() => {
          const img = imgs.shift();
          const newImg = Math.floor(Math.random() * imgs.length);
          setImg(imgs[newImg]);
          imgs.unshift(...imgs.splice(newImg));
          img && imgs.push(img);
        }}
        class="cursor-help"
      >
        <img
          loading="lazy"
          src={img().url}
          alt={t(`img.${img().key}` as "img.woona")}
          class="rounded-full min-w-[128px] max-w-[346px] w-full"
        />
      </button>
      <div class="flex flex-col items-center justify-center">
        <h1
          class={clsx(
            "text-8xl md:text-9xl relative",
            gay() &&
              "bg-random bg-[length:181px_200%] bg-repeat bg-clip-text animate-scroll text-transparent",
          )}
        >
          {t("name")}
          <Show when={useLang() !== "ja"}>
            <button
              class="w-4 h-4 rounded-full absolute top-5 right-2 cursor-pointer"
              onClick={() => setGay((x) => !x)}
            />
          </Show>
        </h1>
        <h2 class="text-3xl md:text-4xl mt-5">{t("hello")}</h2>
        <div
          class={clsx(
            "grid grid-cols-2 justify-center items-center content-around mt-2",
            "gap-6 text-sm md:text-base",
          )}
        >
          <ALink href="https://github.com/ImUrX" key="github">
            <OcMarkgithub2 class="w-6 h-6 md:w-8 md:h-8" color="" fill="" />
          </ALink>
          <ALink href="https://github.com/sponsors/ImUrX/" key="sponsor">
            <BiSolidDonateHeart
              class="w-6 h-6 md:w-8 md:h-8"
              color=""
              fill=""
            />
          </ALink>
        </div>
        <p class="mt-5">{t("languages")}</p>
        <div class="flex justify-center items-center content-around gap-6 text-xl">
          <ALang lang="es" title="Español">
            🧉
          </ALang>
          <ALang lang="ja" title="日本語" bw="☀︎🌲">
            ☀️🌲
          </ALang>
          <ALang title="English">{eng}</ALang>
        </div>
      </div>
    </main>
  );
}
