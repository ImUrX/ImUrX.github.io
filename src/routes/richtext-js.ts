import { redirect } from "@solidjs/router";

export function GET() {
  return redirect("https://richtext.imurx.org", 301);
}
