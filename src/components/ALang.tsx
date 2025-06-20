import { A } from "@solidjs/router";
import clsx from "clsx";
import { ParentProps } from "solid-js";
import { useLang } from "~/hooks/lang";

export default function ALang({
  lang,
  title,
  children,
  bw,
}: ParentProps & { lang?: string; title: string; bw?: string }) {
  return (
    <A
      href={"/" + (lang ? `${lang}/` : "")}
      title={title}
      class={clsx(useLang() !== (lang ?? "en") && "emoji-bw hover:text-purple-400 hover:not-dark:text-purple-600")}
    >
      {useLang() !== (lang ?? "en") ? (bw ?? children) : children}
    </A>
  );
}
