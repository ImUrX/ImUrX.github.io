import { getL10n } from "~/hooks/lang";

export default function NotFound() {
  const t = getL10n();

  return <main class="mx-auto p-4 text-center text-gray-700">{t(404)}</main>;
}
