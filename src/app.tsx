import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import { Link, MetaProvider } from "@solidjs/meta";
import { Suspense } from "solid-js";

const filter = {
  lang: ["ja", "es"],
};

export default function App() {
  return (
    <MetaProvider>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Emoji:wght@300..700&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <Router
        root={(props) => (
          <>
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <Route path="/:lang?/" matchFilters={filter}>
          <FileRoutes />
        </Route>
      </Router>
    </MetaProvider>
  );
}
