import { Link } from "@kobalte/core/link";
import clsx from "clsx";
import { Match, ParentProps, Switch } from "solid-js";

export default function ConditionalLink(
  props: ParentProps & { param?: string | null; base: string; class?: string },
) {
  return (
    <Switch fallback={<span class={props.class}>{props.children}</span>}>
      <Match when={props.param}>
        <Link
          href={props.base + props.param}
          target="_blank"
          class={clsx("hover:underline", props.class)}
          referrerPolicy="no-referrer"
        >
          {props.children}
        </Link>
      </Match>
    </Switch>
  );
}
