import { A } from "@solidjs/router";
import clsx from "clsx";
import { createUniqueId, ParentProps } from "solid-js";
import { useLang } from "~/hooks/lang";

export default function ALang({
  lang,
  title,
  children,
  bw,
}: ParentProps & { lang?: string; title: string; bw?: string }) {
  const id = createUniqueId();

  return (
    <A href={"/" + (lang ? `${lang}/` : "")} aria-labelledby={id}>
      <div class="flex flex-col justify-center hover:text-purple-400 hover:not-dark:text-purple-600">
        <div class={clsx(useLang() !== (lang ?? "en") && "emoji-bw")}>
          {useLang() !== (lang ?? "en") ? (bw ?? children) : children}
        </div>
        <span id={id} class="text-xs md:text-sm">
          {title}
        </span>
      </div>
    </A>
  );
}
