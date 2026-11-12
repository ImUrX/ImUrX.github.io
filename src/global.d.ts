/// <reference types="@solidjs/start/env" />

interface UriSource {
  avif: string;
  heif: string;
  png: string;
}

declare module "*?gallery" {
  const images: {
    sources: UriSource;
  };
  export default images;
}

declare module "env:server/runtime" {
  const env: {
    SERVER_LASTFM: string;
    SERVER_REDIS_URL: string;
    SERVER_REDIS_TOKEN: string;
    SERVER_SESSION_SECRET: string;
    SERVER_REDIS_KEY: string;
    SERVER_AZURACAST_KEY: string;
    SERVER_AZURACAST_URL: string;
  };

  export default env;
}
