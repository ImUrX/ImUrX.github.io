import { For, ParentProps } from "solid-js";

export default function Picture(
  props: ParentProps & {
    srcset: UriSource;
    alt?: string;
    class?: string;
    parentClass?: string;
    loading?: "eager" | "lazy";
  },
) {
  return (
    <picture class={props.parentClass}>
      <For each={Object.entries(props.srcset)}>
        {([format, images]) => (
          <source srcset={images} type={`image/${format}`} />
        )}
      </For>
      <img
        srcset={props.srcset.png}
        alt={props.alt}
        class={props.class}
        loading={props.loading}
      />
    </picture>
  );
}
