import { createAsync, query, revalidate } from "@solidjs/router";
import env from "env:server/runtime";
import {
  createEffect,
  createSignal,
  ErrorBoundary,
  onMount,
  Show,
  Suspense,
} from "solid-js";
import { ApiNowPlaying } from "~/types/Azura";
import { secondToNice } from "~/utils";
import { Button } from "@kobalte/core/button";
import { ImPause2, ImPlay3 } from "solid-icons/im";
import Hls from "hls.js";

const RADIO_LINK = "https://cat.2dgirls.date/hls/kitty_radio/live.m3u8";

const getRadioInfo = query(async () => {
  "use server";

  const info = await fetch(
    `${env.SERVER_AZURACAST_URL}/api/nowplaying/kitty_radio`,
    {
      headers: {
        accept: "application/json",
        "X-API-Key": env.SERVER_AZURACAST_KEY,
      },
    },
  ).then((res) => res.json() as Promise<ApiNowPlaying>);

  return info;
}, "getRadioInfo");

export default function Radio() {
  const [playing, setPlaying] = createSignal(false);
  let musicPlayer!: HTMLAudioElement;

  onMount(() => {
    if (
      musicPlayer.canPlayType("application/vnd.apple.mpegurl") &&
      "ManagedMediaSource" in window
    ) {
      musicPlayer.src = RADIO_LINK;
      //
      // If not using native HLS, check if HLS.js is supported
      //
    } else if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(RADIO_LINK);
      hls.attachMedia(musicPlayer);
    }
  });
  return (
    <ErrorBoundary fallback={(_, reset) => <></>}>
      <Button
        onclick={() => {
          if (setPlaying((v) => !v)) {
            musicPlayer.load();
            musicPlayer.play().catch((e) => console.error("hls moment", e));
          } else {
            musicPlayer.pause();
          }
        }}
      >
        {playing() ? <ImPause2 size={32} /> : <ImPlay3 size={32} />}
      </Button>
      <audio ref={musicPlayer} />
      <Suspense>
        <Show when={playing()}>
          <RadioInner />
        </Show>
      </Suspense>
    </ErrorBoundary>
  );
}

export function RadioInner() {
  const radioInfo = createAsync(() => getRadioInfo());
  const [time, setTime] = createSignal(0);
  let curSong: string | undefined = undefined;

  createEffect(() => {
    if (
      !radioInfo() ||
      !radioInfo()?.now_playing ||
      radioInfo()?.now_playing?.song.text === curSong
    )
      return;

    curSong = radioInfo()?.now_playing?.song.text;
    setTime(radioInfo()!.now_playing!.elapsed);

    const timeout = setTimeout(() => {
      revalidate([getRadioInfo.key]);
    }, radioInfo()!.now_playing!.remaining * 1000);

    const timeout2 = setTimeout(() => {
      revalidate([getRadioInfo.key]);
    }, 10_000);

    if (globalThis.window) revalidate([getRadioInfo.key]);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  });

  onMount(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Show when={radioInfo()?.now_playing}>
      <div>
        <img src={radioInfo()?.now_playing?.song.art} class="w-16" />
        <div>{radioInfo()?.now_playing?.song.text}</div>
        <div>
          {secondToNice(Math.min(time(), radioInfo()!.now_playing!.duration))}/
          {secondToNice(radioInfo()!.now_playing!.duration)}
        </div>
      </div>
    </Show>
  );
}
