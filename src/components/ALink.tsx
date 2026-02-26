import clsx from "clsx";
import { createUniqueId, ParentProps, Show } from "solid-js";
import { getL10n } from "~/hooks/lang";
import { DictKeys } from "~/i18n";
import { Link } from "@kobalte/core/link";

export default function ALink(
  props: ParentProps & { href: string; key?: DictKeys; noLinkEffect?: boolean },
) {
  const id = createUniqueId();
  const t = getL10n();

  return (
    <Link
      href={props.href}
      target="_blank"
      class={clsx(
        "fill-foreground-10 transition-all duration-250",
        "text-blue-200 not-dark:text-blue-900 hover:fill-current",
        "hover:text-purple-400 hover:not-dark:text-purple-600",
        !props.noLinkEffect && "linkeffect",
      )}
      aria-labelledby={id}
    >
      <div class="flex flex-col items-center gap-1">
        {props.children}
        <Show when={props.key}>
          <span class="underline" id={id}>
            {t(props.key!)}
          </span>
        </Show>
      </div>
    </Link>
  );
}
