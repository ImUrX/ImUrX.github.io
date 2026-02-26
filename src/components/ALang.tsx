import { Link } from "@kobalte/core/link";
import clsx from "clsx";
import { createUniqueId, ParentProps } from "solid-js";
import { useLang } from "~/hooks/lang";

export default function ALang(
  props: ParentProps & { lang?: string; title: string; bw?: string },
) {
  const id = createUniqueId();

  return (
    <Link
      href={"/" + (props.lang ? `${props.lang}/` : "")}
      aria-labelledby={id}
    >
      <div
        class="flex flex-col justify-center hover:text-purple-400
          hover:not-dark:text-purple-600"
      >
        <div class={clsx(useLang() !== (props.lang ?? "en") && "emoji-bw")}>
          {useLang() !== (props.lang ?? "en")
            ? (props.bw ?? props.children)
            : props.children}
        </div>
        <span id={id} class="text-xs md:text-sm">
          {props.title}
        </span>
      </div>
    </Link>
  );
}
