import clsx from "clsx";
import { FaSolidLink } from "solid-icons/fa";
import { Link } from "@kobalte/core/link";
import { ParentProps, Show } from "solid-js";
import { getL10n, useLang } from "~/hooks/lang";
import { DictKeys } from "~/i18n";
import { OcMarkgithub2 } from "solid-icons/oc";

export default function ProjectCard(
  props: ParentProps & {
    title: string;
    repo: string;
    link?: string;
    key?: DictKeys;
    class?: string;
    shadow?: boolean;
  },
) {
  const t = getL10n();

  return (
    <div
      class={clsx(
        `relative flex max-w-xl flex-col rounded-2xl border-2 border-dashed
        border-gray-400 p-5 text-left before:absolute before:inset-0 before:-z-1
        before:block before:rounded-2xl before:bg-(image:--project-bg)
        before:bg-size-[300%_300%] before:bg-position-[0_0]
        before:transition-[background-position] before:duration-300
        before:ease-in-out hover:before:bg-position-[100%_100%]
        dark:border-gray-800`,
        props.shadow && "shadow-2xl dark:shadow-gray-950",
        props.class,
      )}
    >
      <h2 class="mb-5 max-w-[95%] grow-0 text-2xl">{props.title}</h2>
      <Show when={props.key}>
        <p
          class="grow rounded-2xl border-2 border-gray-500 p-2
            dark:border-gray-700"
        >
          {t(props.key!)?.replace("\n", useLang() !== "ja" ? " " : "")}
        </p>
      </Show>
      <div class="absolute top-0 right-0 flex flex-col gap-2 p-2">
        <Link
          href={props.repo}
          target="_blank"
          class={clsx(
            "fill-foreground-10 transition-all duration-250",
            "hover:fill-current",
            "hover:text-blue-500 hover:not-dark:text-blue-400",
          )}
        >
          <OcMarkgithub2 class="h-6 w-6" color="" fill="" />
        </Link>
        <Show when={props.link}>
          <Link
            href={props.link}
            target="_blank"
            class={clsx(
              "fill-foreground-10 transition-all duration-250",
              "hover:fill-current",
              "hover:text-blue-500 hover:not-dark:text-blue-400",
            )}
          >
            <FaSolidLink class="h-6 w-6" color="" fill="" />
          </Link>
        </Show>
      </div>
    </div>
  );
}
