import { Accessor, createSignal, onMount } from "solid-js";

export function createPersistentSignal<T>(
  value: T,
  options: { key: string; encode?: (val: T) => string; decode?: (val: string) => T },
): [get: Accessor<T>, set: (val: Exclude<T, Function> | ((prev: T) => T)) => void] {
  const [signal, setSignal] = createSignal(value);
  onMount(() => {
    const val = localStorage.getItem(`persist_${options.key}`);
    if (val !== null)
      setSignal((options.decode?.(val) ?? JSON.parse(val)) as Exclude<T, Function>);
  });
  return [
    signal,
    (val: Exclude<T, Function> | ((prev: T) => T)) => {
      const newVal = setSignal(val);
      localStorage.setItem(
        `persist_${options.key}`,
        options.encode?.(newVal) ?? JSON.stringify(newVal),
      );
    },
  ];
}
