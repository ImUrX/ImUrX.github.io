import clsx from "clsx";
import { createUniqueId, ParentProps } from "solid-js";
import { getL10n } from "~/hooks/lang";
import { DictKeys } from "~/i18n";

export default function ALink({
  children,
  href,
  key,
}: ParentProps & { href: string; key: DictKeys }) {
  const id = createUniqueId();
  const t = getL10n();

  return (
    <a
      href={href}
      target="_blank"
      class={clsx(
        "linkeffect transition-all duration-250 fill-foreground-10",
        "text-blue-200 not-dark:text-blue-900 hover:fill-current",
        "hover:text-purple-400 hover:not-dark:text-purple-600",
      )}
      aria-labelledby={id}
    >
      <div class="flex flex-col gap-1 items-center">
        {children}
        <span class="underline" id={id}>
          {t(key)}
        </span>
      </div>
    </a>
  );
}
