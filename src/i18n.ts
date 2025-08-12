import { Flatten, Translator } from "@solid-primitives/i18n";

const en = {
  name: "Uri",
  hello: "Hello!",
  home: "Home",
  languages: "Languages:",
  description: "A website about myself in the web wide world",
  404: 'Where are you?',
  img: {
    woona: "Woona from MLP yawning and very eepy",
    daron: "Blond girl with brown skin clapping hands with other girl",
    eevee: "Eevee with purple band in her left ear with her tongue out",
  },
  github: "Github",
  sponsor: "A kofi?",
};

export type Dict = typeof en;

// https://stackoverflow.com/a/56874389
type KeysMatching<T extends object, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T];

export type DictKeys = KeysMatching<Flatten<Dict>, number | string>

const es: Dict = {
  name: "Uri",
  hello: "¡Holi!",
  home: "Casa",
  languages: "Idiomas:",
  description: "Una pagina sobre mi en la informática red mundial",
  404: '¿Donde estas?',
  img: {
    woona: "Woona de MLP bostezando y muy dormidita",
    daron: "Chica morocha de pelo rubio chocando las manos con otra chica",
    eevee:
      "Eevee con una pulsera violeta en su oido izquierdo sacando su lengua para afuera",
  },
  github: "Github",
  sponsor: "Matecito?",
};

const ja: Dict = {
  name: "瓜",
  hello: "はいたい！",
  home: "ほめぱげ",
  languages: "言語：",
  description: "ウェブ上の内のほめぱげ ",
  404: 'どこですか？',
  img: {
    woona: "マイリトルポニーのルナがあくびをして眠そう",
    daron: "金髪の少女が茶色の肌をした別の少女と手を叩き合っている",
    eevee: "左の耳に紫のバンドを付けたイーブイで、舌を出している",
  },
  github: "Github",
  sponsor: "Kofi",
};

export const dictionaries = {
  en,
  es,
  ja,
};

export type LangKeys = keyof typeof dictionaries;
