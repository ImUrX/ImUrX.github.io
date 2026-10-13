/// <reference types="@solidjs/start/env" />

declare module "*?gallery" {
  const images: {
    sources: {
      avif: string;
      heif: string;
      png: string;
    };
  };
  export default images;
}

declare module "env:server/runtime" {
  const env: {
    SERVER_LASTFM: string;
  };

  export default env;
}
