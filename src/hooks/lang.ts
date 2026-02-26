import * as i18n from "@solid-primitives/i18n";
import { useParams } from "@solidjs/router";
import { createMemo } from "solid-js";
import { dictionaries, LangKeys } from "~/i18n";

export function useLang() {
  return (useParams().lang || "en") as LangKeys;
}

export const getL10n = () => {
  const dict = createMemo(() => i18n.flatten(dictionaries[useLang()]));
  const t = i18n.translator(dict);

  return t;
};
