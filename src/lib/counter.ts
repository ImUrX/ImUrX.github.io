import env from "env:server/runtime";

const COUNTER_CACHE_TIME = 300_000; // 5 minutes
let counter = 0;
let time = 0;

export async function getCounter() {
  if (counter && time > Date.now()) return counter;
  const data = await fetch(`${env.SERVER_REDIS_URL}/get/${env.SERVER_REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${env.SERVER_REDIS_TOKEN}` },
  }).then((res) => res.json());
  counter = parseInt(data?.result);
  time = Date.now() + COUNTER_CACHE_TIME;
  return counter;
}

export async function increaseCounter() {
  const data = await fetch(`${env.SERVER_REDIS_URL}/incr/${env.SERVER_REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${env.SERVER_REDIS_TOKEN}` },
  }).then((res) => res.json());
  counter = parseInt(data?.result);
  time = Date.now() + COUNTER_CACHE_TIME;
  return counter;
}
