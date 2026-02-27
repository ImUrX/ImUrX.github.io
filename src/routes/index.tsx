import { Meta, Title } from "@solidjs/meta";
import { FaSolidAngleDown, FaSolidArrowRightLong } from "solid-icons/fa";
import { OcMarkgithub2 } from "solid-icons/oc";
import { BiSolidDonateHeart } from "solid-icons/bi";
import { createSignal, For, Index, lazy, onMount, Show } from "solid-js";
import { clsx } from "clsx/lite";
import { getL10n, useLang } from "~/hooks/lang";
import ALang from "~/components/ALang";
import ALink from "~/components/ALink";
import eevee from "./images/eevee.png?gallery";
import woona from "./images/profile.png?gallery";
import daron from "./images/damnpic.png?gallery";
import { Button } from "@kobalte/core/button";
import { Separator } from "@kobalte/core/separator";
import { Link } from "@kobalte/core/link";
import ProjectCard from "~/components/ProjectCard";
import { projectCards } from "./proyects";

const LastFm = lazy(() => import("../components/LastFm"));

const IMAGES = [
  {
    key: "eevee",
    url: eevee.sources,
  },
  {
    key: "woona",
    url: woona.sources,
  },
  {
    key: "daron",
    url: daron.sources,
  },
];
const imgs = IMAGES.slice();
const englishes = ["🫖🔪", "🦅"];
const eng = englishes[Math.floor(Math.random() * englishes.length)];

export default function Home() {
  const [show, setShow] = createSignal(false);
  onMount(() => {
    setShow(true);
    return () => setShow(false);
  });
  const [img, setImg] = createSignal(IMAGES[0]);
  let aboutDiv!: HTMLElement;
  const t = getL10n();

  return (
    <>
      <main
        class="flex min-h-lvh flex-col content-center items-center
          justify-center gap-10 p-4 text-center md:flex-row min-wh:snap-center
          md:[@media(height<=444px)]:relative"
        lang={useLang()}
      >
        <Title>{t("home")}</Title>
        <Meta name="description" content={t("description")} />
        <Button
          onClick={() => {
            const img = imgs.shift();
            const newImg = Math.floor(Math.random() * imgs.length);
            setImg(imgs[newImg]);
            imgs.unshift(...imgs.splice(newImg));
            img && imgs.push(img);
          }}
          class="cursor-help rounded-full"
        >
          <picture class="flex justify-center">
            <For each={Object.entries(img().url)}>
              {([format, images]) => (
                <source srcset={images} type={`image/${format}`} />
              )}
            </For>
            <img
              loading="lazy"
              srcset={img().url.png}
              alt={t(`img.${img().key}` as "img.woona")}
              class="w-[75%] max-w-[346px] min-w-[128px] rounded-full md:w-full"
            />
          </picture>
        </Button>
        <div class="flex flex-col items-center justify-center">
          <h1
            class="relative text-8xl has-checked:animate-scroll
              has-checked:bg-random has-checked:bg-size-[181px_200%]
              has-checked:bg-clip-text has-checked:bg-repeat
              has-checked:text-transparent md:text-9xl"
          >
            {t("name")}
            <Show when={useLang() !== "ja"}>
              <input
                type="checkbox"
                class="absolute top-3 right-0 h-8 w-8 cursor-pointer
                  appearance-none rounded-full md:top-5 md:right-[8.5px] md:h-4
                  md:w-4"
              ></input>
            </Show>
          </h1>
          <h2 class="mt-5 text-3xl md:text-4xl">{t("hello")}</h2>
          <div
            class={clsx(
              "mt-2 grid grid-cols-3 content-around items-center justify-center",
              "gap-6 text-sm md:text-base",
            )}
          >
            <ALink href="https://github.com/ImUrX" key="github">
              <OcMarkgithub2 class="h-6 w-6 md:h-8 md:w-8" color="" fill="" />
            </ALink>
            <ALink href="https://github.com/sponsors/ImUrX/" key="sponsor">
              <BiSolidDonateHeart
                class="h-6 w-6 md:h-8 md:w-8"
                color=""
                fill=""
              />
            </ALink>
            <ALink
              href="https://keyoxide.org/EC564A634AFA0877CA4151BF13E59DEACC71A51D"
              key="keyoxide"
            >
              <svg
                class="h-6 w-6 md:h-8 md:w-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.662 2.7734c-0.86914 8.5e-6 -1.5742 0.70509-1.5742 1.5742 0 0.52528 0.26095 1.006 0.67773 1.2949 0.12007 0.083138 0.18912 0.092562 0.20508 0.22266 0.01604 0.13001-0.16211 0.25-0.16211 0.25l-3.3242 2.5859v-0.5293c0.14724-1.4561-0.83223-2.9405-2.2754-3.2793-1.719-0.502-3.7931 1.0298-3.7931 2.6452 0 1.9182 0.00778 8.9247 0.00211 13.429-0.00211 1.6772 1.3577 3.0332 3.0332 3.0332s3.0352-1.3576 3.0352-3.0332v-0.39648c1.365 0.90898 2.7303 1.8174 4.0938 2.7285 1.1299 0.93021 2.9078 0.93859 3.9902-0.07422 1.3712-1.1518 1.323-3.4999-0.0918-4.5957-1.935-1.3219-3.8897-2.6181-5.8418-3.916l5.7734-4.4883c1.1632-0.90466 1.4954-2.5005 0.83398-3.7832-0.04938-0.095755-0.06511-0.12998-0.16797-0.16992-0.10277-0.039938-0.18425 0.00439-0.28711 0.042969-0.14138 0.053062-0.29257 0.080078-0.44531 0.080078-0.69894 0-1.2656-0.56662-1.2656-1.2656 9.4e-5 -0.094853 0.01636-0.14996-0.01172-0.20898-0.02807-0.059023-0.10233-0.097092-0.17578-0.10547-0.12191-0.013926-0.24437-0.020476-0.36719-0.019531-0.12049 8.587e-4 -0.21169-0.00952-0.26367-0.097656-0.05189-0.088142-0.02344-0.18975-0.02344-0.34961 0-0.86915-0.70504-1.5742-1.5742-1.5742z" />
                <path d="m12.806 3.085a1.0735 1.0735 0 0 1-1.0735 1.0735 1.0735 1.0735 0 0 1-1.0735-1.0735 1.0735 1.0735 0 0 1 1.0735-1.0735 1.0735 1.0735 0 0 1 1.0735 1.0735z" />
                <path d="m13.458 1.0033a0.70038 0.70038 0 0 1-0.70038 0.70038 0.70038 0.70038 0 0 1-0.70038-0.70038 0.70038 0.70038 0 0 1 0.70038-0.70038 0.70038 0.70038 0 0 1 0.70038 0.70038z" />
                <path d="m11.339 0.48902a0.48902 0.48902 0 0 1-0.48902 0.48902 0.48902 0.48902 0 0 1-0.48902-0.48902 0.48902 0.48902 0 0 1 0.48902-0.48902 0.48902 0.48902 0 0 1 0.48902 0.48902z" />
                <path d="m19.203 5.1296a0.85797 0.85797 0 0 1-0.85797 0.85797 0.85797 0.85797 0 0 1-0.85797-0.85797 0.85797 0.85797 0 0 1 0.85797-0.85797 0.85797 0.85797 0 0 1 0.85797 0.85797z" />
              </svg>
            </ALink>
          </div>
          <p class="mt-5">{t("languages")}</p>
          <div
            class="flex content-around items-center justify-center gap-6
              text-xl"
          >
            <ALang lang="es" title="Español">
              🧉
            </ALang>
            <ALang lang="ja" title="日本語" bw="☀︎🌲">
              ☀️🌲
            </ALang>
            <ALang title="English">{englishes[1]}</ALang>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-center text-purple-400
            not-dark:text-purple-600 md:absolute md:bottom-1"
        >
          <Button
            class="flex cursor-pointer flex-col items-center"
            onClick={() =>
              aboutDiv.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span>{t("about.this")}</span>
            <FaSolidAngleDown class="my-1 h-6 w-6 motion-safe:animate-bounce" />
          </Button>
          <Separator
            class="h-px w-[50%] border-none bg-purple-400
              not-dark:bg-purple-600"
          />
        </div>
      </main>
      <main
        ref={aboutDiv}
        id="about"
        class="flex min-h-lvh flex-col items-center justify-center gap-5 p-4
          text-center min-wh:snap-center"
        lang={useLang()}
      >
        <span class="max-w-2xl">{t("about.me")}</span>
        <Show when={show()}>
          <LastFm />
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
    </>
  );
}
