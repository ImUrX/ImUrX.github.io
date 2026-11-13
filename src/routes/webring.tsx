import { Title } from "@solidjs/meta";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import ts from "highlight.js/lib/languages/typescript";
import eevee from "./images/webring/eevee.png";
import eeveefur from "./images/webring/eeveefur.png";
import "highlight.js/styles/github.css";

hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("ts", ts);

const animCode = `@keyframes reveal {
  0% {
    clip-path: inset(0 0 0 100%);
  }

  100% {
    clip-path: inset(0 0 0 0);
  }
}
@keyframes hide {
  0% {
    clip-path: inset(0 0 0 0);
  }

  100% {
    clip-path: inset(0 0 0 100%);
    visibility: hidden;
  }
}`;

const tailwindCode =
  animCode +
  `
@utility image-pixelated {
  image-rendering: pixelated;
}`;

const cssCode =
  animCode +
  `
.group {
  position: relative;
}

img {
  image-rendering: pixelated;
  height: 32px;
}

.fur {
  position: absolute;
  top: 0px;
  animation: hide 1s forwards;
}

.group:hover > .fur {
  animation: reveal 1s forwards;
}
`;

const htmlCode = `<!DOCTYPE html>
<html>
<body>
  <div class="group">
    <a href="./webring">
      <img
        src="./eevee.png"
        alt="imurx.org"
      />
      <img
        src="./eeveefur.png"
        class="fur"
        alt="imurx.fur"
      />
    </a>
  </div>
</body>
</html>`;

const tsxCode = `function Example() {
  return (
    <div class="group relative">
      <a href="./webring">
        <img
          src="./eevee.png"
          class="h-8 image-pixelated"
          alt="imurx.org"
        />
        <img
          src="./eeveefur.png"
          class="absolute top-0 h-8 animate-[hide_1s_forwards]
            image-pixelated group-hover:animate-[reveal_1s_forwards]"
          alt="imurx.fur"
        />
      </a>
    </div>
  );
}`;

export default function WebringTutorial() {
  return (
    <main>
      <Title>Webring image guide</Title>
      <div class="flex flex-row gap-5">
        <img src={eevee} class="image-pixelated" alt="imurx.org" />
        <img src={eeveefur} class="image-pixelated" alt="imurx.fur" />
      </div>
      <div
        class="relative clear-both mx-0 my-6.25 min-h-162 max-w-6xl
          has-[#tab-1:checked]:max-w-325 has-[#tab-2:checked]:min-h-252"
      >
        <div class="float-left">
          <input
            class="peer hidden"
            type="radio"
            name="tabgroup-1"
            id="tab-2"
            checked
          />
          <label
            class="relative left-px -ml-px border border-accent-10
              border-b-transparent bg-gray-800 p-2.5 peer-checked:z-2
              peer-checked:border-b-transparent peer-checked:bg-gray-950"
            for="tab-2"
          >
            HTML
          </label>
          <div
            class="invisible absolute top-7 right-0 bottom-0 left-0 flex
              flex-row gap-50 border border-accent-10 bg-gray-950 p-5
              peer-checked:visible peer-checked:z-1"
          >
            <div>
              <h2 class="mb-2 text-2xl">index.css:</h2>
              <pre class="rounded-lg bg-gray-900 p-2">
                <code
                  innerHTML={hljs.highlight(cssCode, { language: "css" }).value}
                ></code>
              </pre>
            </div>
            <div>
              <h2 class="mb-2 text-2xl">index.html:</h2>
              <pre class="rounded-lg bg-gray-900 p-2">
                <code
                  innerHTML={
                    hljs.highlight(htmlCode, { language: "xml" }).value
                  }
                ></code>
              </pre>
            </div>
          </div>
        </div>

        <div class="float-left">
          <input
            class="peer hidden"
            type="radio"
            name="tabgroup-1"
            id="tab-1"
          />
          <label
            class="relative left-px -ml-px border border-accent-10
              border-b-transparent bg-gray-800 p-2.5 peer-checked:z-2
              peer-checked:border-b-transparent peer-checked:bg-gray-950"
            for="tab-1"
          >
            Tailwind/React
          </label>
          <div
            class="invisible absolute top-7 right-0 bottom-0 left-0 flex
              flex-row gap-50 border border-accent-10 bg-gray-950 p-5
              peer-checked:visible peer-checked:z-1"
          >
            <div>
              <h2 class="mb-2 text-2xl">index.css:</h2>
              <pre class="rounded-lg bg-gray-900 p-2">
                <code
                  innerHTML={
                    hljs.highlight(tailwindCode, { language: "css" }).value
                  }
                ></code>
              </pre>
            </div>
            <div>
              <h2 class="mb-2 text-2xl">index.tsx:</h2>
              <pre class="rounded-lg bg-gray-900 p-2">
                <code
                  innerHTML={hljs.highlight(tsxCode, { language: "ts" }).value}
                ></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
