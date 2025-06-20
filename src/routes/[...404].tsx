import { getL10n } from "~/hooks/lang";

export default function NotFound() {
    const t = getL10n();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {t(404)}
    </main>
  );
}
