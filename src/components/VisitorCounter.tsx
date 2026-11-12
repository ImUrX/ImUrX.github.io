import { createAsync, query, RouteDefinition } from "@solidjs/router";
import { useSession } from "@solidjs/start/http";
import { For, ParentProps } from "solid-js";
import env from "env:server/runtime";
import { getRequestEvent } from "solid-js/web";
import { isBot } from "ua-parser-js/bot-detection";
import { getCounter, increaseCounter } from "~/lib/counter";

type SessionData = {
  visited?: "true";
};

const getVisitorCounter = query(async () => {
  "use server";

  const session = await useSession<SessionData>({
    name: "homepage-visitor",
    password: env.SERVER_SESSION_SECRET,
    cookie: {
      httpOnly: true,
      secure: !import.meta.dev,
      sameSite: "strict",
    },
  });

  if (session.data.visited) return getCounter();

  const req = getRequestEvent();
  const header = req?.request.headers.get("User-Agent");
  if (!header || isBot(header)) return getCounter();

  await session.update({ visited: "true" });
  return increaseCounter();
}, "getVisitorCounter");

export const route = {
  preload: () => getVisitorCounter(),
} satisfies RouteDefinition;

export default function VisitorCounter(props: ParentProps) {
  const counter = createAsync(() => getVisitorCounter());

  return (
    <div class="flex flex-row gap-0">
      <For each={counter()?.toString().split("") ?? []}>
        {(digit) => (
          <img
            class="h-18 image-pixelated"
            src={`/imgs/counter/${digit}.gif`}
            alt={digit}
          />
        )}
      </For>
    </div>
  );
}
