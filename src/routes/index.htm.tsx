import Picture from "~/components/Picture";
import me from "./images/webring/eevee.png?gallery";
import meFur from "./images/webring/eeveefur.png?gallery";
import paws from "./images/webring/paws.png?gallery";
import ckie from "./images/webring/pupcat.png?gallery";
import jamie from "./images/webring/jamie.png?gallery";
import eevee from "./images/eevee.png?gallery";
import bomb from "./images/bomb.png?gallery";
import prideflag from "./images/prideflag.png?gallery";
import VisitorCounter from "~/components/VisitorCounter";
import { getL10n } from "~/hooks/lang";
import { Button } from "@kobalte/core/button";
import { Link } from "@kobalte/core/link";
import { createSignal, For } from "solid-js";
import { KEYOXIDE } from "~/utils";
import clsx from "clsx";
import { createPersistentSignal } from "~/hooks/persistent";
import { Title } from "@solidjs/meta";
import Radio from "~/components/Radio";
import { DictKeys } from "~/i18n";

export default function RetroHome() {
  const [pfp, setPfp] = createSignal(eevee.sources);
  const [likes, setLikes] = createPersistentSignal<Set<DictKeys>>(new Set(), {
    key: "mylikes",
    encode: (val) => JSON.stringify([...val]),
    decode: (val) => new Set(JSON.parse(val)),
  });
  const [pride, setPride] = createSignal(false);
  const t = getL10n();

  return (
    <main class="flex flex-col items-center gap-3 text-xs w-fit m-auto">
      <Title>ImUrX - {t("name")}</Title>
      <h1 class="text-2xl">{t("htm.title")}</h1>
      <div class="flex flex-row gap-3">
        <div class="flex flex-col items-center gap-3">
          <div
            class="relative flex w-fit flex-col items-center gap-1 border-4
              border-inset border-accent-10 p-4"
          >
            <Button onClick={() => setPride((val) => !val)}>
              <Picture srcset={pfp()} class="w-32 border" />
            </Button>
            <h2 class="text-xl">{t("name")}</h2>
            <Button class="cursor-pointer" onClick={() => setPfp(bomb.sources)}>
              {t("htm.bomb")}
            </Button>
            <Picture
              srcset={prideflag.sources}
              class={clsx(
                `absolute -top-10 -left-10 w-24 rounded-full transition-all
                duration-500 ease-linear hover:w-64`,
                !pride() && "hidden",
              )}
              loading="lazy"
            />
          </div>
          <div
            class="flex flex-col gap-1 border-4 border-inset border-accent-10
              p-1"
          >
            <h1 class="text-sm">{t("htm.likes.title")}</h1>
            <ul class="ml-3 list-[square]">
              <li>{t("htm.likes.prog")}</li>
              <li>{t("htm.likes.game")}</li>
              <li>{t("htm.likes.photo")}</li>
              <li>{t("htm.likes.sysadmin")}</li>
              <For each={[...likes()]}>{(like) => <li>{t(like)}</li>}</For>
            </ul>
          </div>
          <div
            class="flex flex-col items-center border-4 border-inset
              border-accent-10 p-1"
          >
            <h2 class="text-sm">{t("htm.counter")}</h2>
            <VisitorCounter />
          </div>
        </div>
        <div
          class="relative flex w-lg flex-col gap-1 border-4 border-inset
            border-accent-10 p-3"
        >
          <h2 class="text-center text-lg">{t("htm.about.title")}</h2>
          <p>
            {...t(
              "htm.about.desc",
              (str) => (
                <Button
                  onclick={() =>
                    setLikes((set) => new Set([...set, "htm.likes.silly"]))
                  }
                  class="cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  {str}
                </Button>
              ),
              (str) => <i class="text-gray-600 dark:text-gray-400">{str}</i>,
            )}
          </p>
          <p>
            {...t(
              "htm.about.desc2",
              (str) => (
                <Button
                  onclick={() =>
                    setLikes((set) => new Set([...set, "htm.likes.draw"]))
                  }
                  class="cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  {str}
                </Button>
              ),
              (str) => (
                <Button
                  onclick={() =>
                    setLikes((set) => new Set([...set, "htm.likes.music"]))
                  }
                  class="cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  {str}
                </Button>
              ),
            )}
          </p>
          <p>
            {...t("htm.about.contact", (str) => (
              <Link href={KEYOXIDE} class="underline" target="_blank">
                {str}
              </Link>
            ))}
          </p>
          <Link href="./" class="self-end text-blue-500 underline">
            {t("htm.about.back")}
          </Link>
          <Radio />
          <img
            loading="lazy"
            src={"/imgs/autito.gif"}
            class="absolute -right-5 -bottom-5 w-16"
          />
        </div>
      </div>
      <div
        class="flex w-fit max-w-2xl flex-row flex-wrap gap-3 border-4
          border-dotted border-accent-10 p-2"
      >
        <div class="group relative">
          <Link href="https://imurx.org/">
            <Picture
              srcset={me.sources}
              class="h-8 image-pixelated"
              alt="imurx.org"
            />
            <Picture
              srcset={meFur.sources}
              class="absolute top-0 h-8 animate-[hide_1s_forwards]
                image-pixelated group-hover:visible
                group-hover:animate-[reveal_1s_forwards]"
              alt="imurx.fur"
            />
          </Link>
        </div>
        <Picture
          srcset={paws.sources}
          class="h-8 image-pixelated"
          alt={t("htm.webring.paws")}
        />
        <Link href="https://mei.puppycat.house/">
          <Picture
            srcset={ckie.sources}
            class="h-8 image-pixelated"
            alt="pupc.at"
          />
        </Link>
        <Link href="https://jamie.rs">
          <Picture
            srcset={jamie.sources}
            class="h-8 image-pixelated"
            alt="jamie.rs"
          />
        </Link>
      </div>
    </main>
  );
}
