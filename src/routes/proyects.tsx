import { Title } from "@solidjs/meta";
import { FaSolidArrowLeftLong } from "solid-icons/fa";
import { Index } from "solid-js";
import ProjectCard from "~/components/ProjectCard";
import { getL10n, useLang } from "~/hooks/lang";
import { DictKeys } from "~/i18n";
import { Link } from "@kobalte/core/link";

export const projectCards: {
  title: string;
  key?: DictKeys;
  repo: string;
  link?: string;
}[] = [
  {
    title: "Better Locale/localizedbrowser",
    key: "projects.localized",
    repo: "https://github.com/ImUrX/localizedbrowser",
    link: "https://modrinth.com/mod/better-locale",
  },
  {
    title: "Screencopy",
    key: "projects.screencopy",
    repo: "https://github.com/ImUrX/screencopy",
    link: "https://modrinth.com/mod/screencopy",
  },
  {
    title: "enchcracker",
    key: "projects.enchcracker",
    repo: "https://github.com/ImUrX/enchcracker",
    link: "https://enchcracker.imurx.org",
  },
  {
    title: "arboard-java",
    key: "projects.arboard",
    repo: "https://github.com/ImUrX/arboard-java",
  },
  {
    title: "richtext-js",
    key: "projects.richtext",
    repo: "https://github.com/ImUrX/richtext-js",
    link: "https://richtext.imurx.org",
  },
  {
    title: "PD2Builder",
    key: "projects.pd2builder",
    repo: "https://github.com/ImUrX/pd2builder",
    link: "https://pd2builder.netlify.app/",
  },

  {
    title: "SlimeVR ESP Tracker Firmware",
    key: "projects.slimeesp",
    repo: "https://github.com/SlimeVR/SlimeVR-Tracker-ESP",
  },
  {
    title: "Bingus-Search",
    key: "projects.bingus",
    repo: "https://github.com/SlimeVR/Bingus-Search",
  },
  {
    title: "oscquery-kt",
    key: "projects.oscquery",
    repo: "https://github.com/SlimeVR/oscquery-kt",
  },
  {
    title: "SlimeVR Support Form",
    repo: "https://github.com/SlimeVR/support-form",
  },
  {
    title: "SlimeVR-Server",
    repo: "https://github.com/SlimeVR/SlimeVR-Server",
  },
  {
    title: "CI-Checks",
    repo: "https://github.com/SlimeVR/CI-Checks",
  },

  {
    title: "bongo-cat",
    key: "projects.bongo",
    repo: "https://github.com/ImUrX/bongo-cat",
  },
  {
    title: "ldap-chpw",
    key: "projects.ldap",
    repo: "https://github.com/ImUrX/ldap-chpw",
  },
  {
    title: "Mathris",
    key: "projects.mathris",
    repo: "https://github.com/ImUrX/methris",
    link: "https://paginatetris2.firebaseapp.com/home",
  },
  {
    title: "sweetiebot",
    key: "projects.sweetiebot",
    repo: "https://github.com/ImUrX/sweetiebot",
  },
];

export default function Projects() {
  const t = getL10n();
  return (
    <main
      class="flex flex-col items-center justify-center gap-5 p-4 text-center"
      lang={useLang()}
    >
      <Title>{t("proyects.title")}</Title>
      <div>
        <h1 class="mb-2 text-3xl">{t("proyects.subtitle")}</h1>
        <p class="text-md text-left">{t("proyects.desc")}</p>
        <Link
          class="mt-4 flex cursor-pointer items-center gap-2 text-lg
            text-blue-200 underline transition-colors not-dark:text-blue-900
            hover:text-purple-400 hover:not-dark:text-purple-600"
            href="./"
        >
          <FaSolidArrowLeftLong />
          <span>{t("proyects.back")}</span>
        </Link>
      </div>
      <div
        class="grid grid-cols-2 content-center justify-center gap-5
          md:grid-cols-4 xl:grid-cols-6 min-[126rem]:grid-cols-8"
      >
        <Index each={projectCards}>
          {(props) => (
            <ProjectCard
              {...props()}
              shadow
              class="col-span-2 md:max-xl:last:nth-[2n-1]:-col-end-2
                xl:max-[126rem]:last:nth-[3n-1]:-col-end-2
                xl:max-[126rem]:last:nth-[3n-2]:col-end-5
                xl:max-[126rem]:nth-last-[2]:nth-[3n+1]:col-end-4
                min-[126rem]:last:nth-[4n-1]:-col-end-2
                min-[126rem]:last:nth-[4n-2]:-col-end-3
                min-[126rem]:last:nth-[4n-3]:col-end-6
                min-[126rem]:nth-last-[2]:nth-[4n+1]:col-end-5
                min-[126rem]:nth-last-[3]:nth-[4n+1]:col-end-4"
            />
          )}
        </Index>
      </div>
    </main>
  );
}
