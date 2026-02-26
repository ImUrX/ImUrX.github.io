import { Flatten } from "@solid-primitives/i18n";

const en = {
  name: "Uri",
  hello: "Hello!",
  home: "Home",
  languages: "Languages:",
  description: "A website about myself in the web wide world",
  404: "Where are you?",
  img: {
    woona: "Woona from MLP yawning and very eepy",
    daron: "Blond girl with brown skin clapping hands with other girl",
    eevee: "Eevee with purple band in her left ear with her tongue out",
  },
  github: "Github",
  sponsor: "A kofi?",
  keyoxide: "Keyoxide",
  projects: {
    localized: `Minecraft mod that I made to improve user input on searches when using
a language that is not english, the mod went to get improved by
checking for more languages like a kanji dictionary for Japanese and
alliases for other letters like German ones.`,
    screencopy: `Minecraft mod that uses arboard-java for putting taken screenshots into your
clipboard for more easy use.`,
    arboard: `Java library taking advantage of JNI for having access to the clipboard of the machine.
How CI is done to make the native library be compiled for multiple systems and having to use Rust with JNI.`,
    richtext: `A Unity's Rich Text interpreter in JS. It's kinda jank but it was fun implementing an online editor
with syntaxing support.`,
    pd2builder: `A fully client-sided static Payday 2 skill tree/inventory builder, originally a replacement to
PD2Tools which was supposedly expensive to host as it used a server-side database to store all the build information.`,
    sweetiebot: `Latest version of my first project that I made, a Discord bot made in Rust with Twilight currently
but it used to be with discord.js and it was very fun to learn Javascript with Node.JS when await/async wasn't
really used at the time and callbacks were everywhere.`,
    slimeesp: `Mainly helped on improving maintenance and adding magnetometer toggle support.`,
    oscquery: "OSCQuery implementation for Kotlin apps.",
    bingus: "Implemented the Discord bot for it.",
    bongo: `A bongo cat overlay made in FLTK that reacts to user input, was made for a friend's Twitch overlay.
Originally my first electron app, later ported to Rust to listen to user input in a more optimized way rather than
using Node.JS native libraries`,
    ldap: `A form for changing password of users in an LDAP without granting the user administrator permissions`,
    mathris: `My second game, my first ever on Godot. It was for a school project that required us to implement it
on the web and make it have a leaderboard on the website.`,
    enchcracker: `Port of Earthcomputer's EnchantmentCracker Java app to a web version that uses WASM with
atomics or split ranges between multiple web workers.`,
  },
  about: {
    this: "About me",
    me: `I'm a developer from Argentina. I'm currently working as a freelancer
and on some personal projects. I like making webapps, tools and trying new stuff.`,
    listen1: "I'm right now listening via ",
    listen2: " to:",
    some: "Some projects I have worked on:",
    more: "You can find more projects in here!",
  },
  proyects: {
    title: "My projects",
    subtitle: "List of projects I have worked on",
    desc: "I been wanting to do this list for a while, and it's here now!",
    back: "Bring me back to the homepage",
  },
};

export type Dict = typeof en;

// https://stackoverflow.com/a/56874389
type KeysMatching<T extends object, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type DictKeys = KeysMatching<Flatten<Dict>, number | string>;

const es: Dict = {
  name: "Uri",
  hello: "¡Holi!",
  home: "Casa",
  languages: "Idiomas:",
  description: "Una pagina sobre mi en la informática red mundial",
  404: "¿Donde estas?",
  img: {
    woona: "Woona de MLP bostezando y muy dormidita",
    daron: "Chica morocha de pelo rubio chocando las manos con otra chica",
    eevee:
      "Eevee con una pulsera violeta en su oido izquierdo sacando su lengua para afuera",
  },
  github: "Github",
  sponsor: "Matecito?",
  keyoxide: "Keyoxide",
  projects: {
    localized: `Mod de Minecraft que hice para mejorar el input de usuario cuando se hacia algún tipo de búsqueda
en un lenguaje que no sea inglés, el mod siguió siendo mejorado chequeando más lenguajes como un
diccionario de kanji para el japonés y aliases para las letras alemanas con diéresis.`,
    screencopy: `Mod de Minecraft que usa arboard-java para guardar capturas de pantalla tomadas y las guarda en
tu portapapeles para facilitar su uso.`,
    arboard: `Librería de Java que toma ventaja de JNI para tener acceso al portapapeles de la máquina.
Como el CI está hecho para que la librería se compile para múltiples plataformas y usando Rust con JNI.`,
    richtext: `Un interpretador del Rich Text de Unity en JS. Anda medio mal pero fue divertido implementar un editor
online con soporte de sintaxis.`,
    pd2builder: `Un skill tree/inventory builder para Payday 2 que corre sin servidor y es puramente estático,
originalmente un reemplazo para PD2Tools que supuestamente era caro de hostear ya que tenía una base de datos del
lado del servidor donde guardaba toda la información de las builds.`,
    sweetiebot: `Última versión de mi primer proyecto, un bot de Discord justo ahora hecho en Rust con Twilight
pero solía ser hecho con Discord.js y fue muy divertido aprender Javascript con Node.JS cuando await/async no era
realmente usando en ningún lado y se usaba puro callback.`,
    slimeesp: `Principalmente ayude con mejorar el mantenimiento y agregar soporte de toggle para el magnetómetro`,
    oscquery: "Implementación de OSCQuery para apps de Kotlin.",
    bingus: "Implemente el bot de Discord.",
    bongo: `Un overlay de bongo cat hecho en FLTK que reacciona al input del usuario, fue hecho para el overlay
de Twitch para un amigo. Originalmente mi primer app de electron pero luego porteada a Rust para escuchar el input
del usuario de una forma mas optimizada en vez de usar una libreria de Node.JS nativa.`,
    ldap: `Un formulario para cambiar la contraseña de usuarios en un LDAP sin tener que darle al usuario
permisos de administrador.`,
    mathris: `Mi segundo juego, mi primero en Godot. Lo hice para un proyecto de secundaria que nos requería
implementarlo en la web y hacer que tenga un leaderboard en el website.`,
    enchcracker: `Port de la app de Java EnchantmentCracker de EarthComputer a una versión web que usaba WASM con
atomicos o rangos separados entre múltiples web workers.`,
  },
  about: {
    this: "Sobre mi",
    me: `Soy una desarrolladora de Argentina. Ando trabajando de freelancer y proyectos personales.
Me gusta hacer webapps, herramientas y probar nuevas cosas.`,
    listen1: "Justo ahora estoy escuchando en ",
    listen2: " a:",
    some: "Un par de proyectos en los que trabaje:",
    more: "¡Podes encontrar más proyectos aca!",
  },
  proyects: {
    title: "Mis proyectos",
    subtitle: "Lista de proyectos en los que trabaje",
    desc: "¡Hace rato que quiero hacer esta lista, y ahora la hice!",
    back: "Devolveme a la página principal",
  },
};

const ja: Dict = {
  name: "瓜",
  hello: "はいたい！",
  home: "ほめぱげ",
  languages: "言語：",
  description: "ウェブ上の内のほめぱげ ",
  404: "どこですか？",
  img: {
    woona: "マイリトルポニーのルナがあくびをして眠そう",
    daron: "金髪の少女が茶色の肌をした別の少女と手を叩き合っている",
    eevee: "左の耳に紫のバンドを付けたイーブイで、舌を出している",
  },
  github: "Github",
  sponsor: "Kofi",
  keyoxide: "Keyoxide",
  projects: {
    localized: `英語以外の言語で検索時のユーザー入力を改善するために内が作成したMinecraft用Modです。このModは、
日本語用の漢字辞書やドイツ語などの他の文字の別名など、より多くの言語に対応するよう改良が進められています。`,
    screencopy: `arboard-Javaを使用して撮影したスクリーンショットをクリップボードに保存し、より簡単に使用できるようにするMinecraft
用Mod。`,
    arboard: `マシンのクリップボードにアクセスするためにJNIを活用するJavaライブラリ。
ネイティブライブラリを複数システム向けにコンパイルし、RustとJNIを使用する必要がある場合のCIの実装方法。`,
    richtext: `UnityのリッチテキストインタプリタをJSで実装。
少々不安定だけど、構文サポート付きのオンラインエディタを実装するのは楽しかった。`,
    pd2builder: `完全にクライアントサイドの静的Payday 2スキルツリー/インベントリビルダー。元々はPD2Toolsの代替として開発されたもので、
PD2Toolsはビルド情報を保存するためにサーバーサイドデータベースを使用していたため、ホスティングコストが高いとされていた。`,
    sweetiebot: `内が初めて作ったプロジェクトの最新バージョンです。現在RustとTwilightで実装したDiscordボットですが、
以前はdiscord.jsを使っていました。当時はawait/asyncがまだ一般的でコールバックが至る所にあった時代で、Node.jsを使ったJavaScript
学習がとても楽しかったです。`,
    slimeesp: `主にメンテナンスの改善と磁力計トグル機能の追加を支援しました。`,
    oscquery: "Kotlinアプリ向けOSCQuery実装",
    bingus: "そのためのDiscordボットを実装した",
    bongo: `FLTKで作成したBongo catオーバーレイは、ユーザーの入力に反応するもので、友人のTwitchオーバーレイ用に制作されました。
当初は内の初めてのElectronアプリでしたが、後にRustへ移植され、Node.JSネイティブライブラリを使用するよりも最適化された方法でユー
ザー入力を受け付けるようになりました。`,
    ldap: `LDAP内のユーザーが管理者権限を付与されずにパスワードを変更するためのフォーム。`,
    mathris: `内の2作目のゲームであり、Godotでの初めての作品です。学校の課題で、ウェブ上で実装し、
ウェブサイトにリーダーボードを設置する必要がありました。`,
    enchcracker: `Earthcomputer社のEnchantmentCracker Javaアプリを、不可分操作または複数のWebワーカー間で分割範囲を使用する
cWASMベースのWeb版へ移植`,
  },
  about: {
    this: "内について",
    me: `内はアルゼンチン出身の開発者です。現在はフリーランスとして活動し、いくつかの個人プロジェクトにも取り組んでいます。
ウェブアプリやツールの作成、新しい技術に挑戦するのが好きで。`,
    listen1: "今",
    listen2: "で聴いているのは",
    some: "内が携わったプロジェクトの一部:",
    more: "こちらでさらにプロジェクトが見つかります！",
  },
  proyects: {
    title: "内のプロジェクト",
    subtitle: "内が携わったプロジェクトの一覧",
    desc: "ずっとこのリストを作りたかったんだけど、ついに完成したよ！",
    back: "ほめぱげに戻して",
  },
};

export const dictionaries = {
  en,
  es,
  ja,
};

export type LangKeys = keyof typeof dictionaries;
