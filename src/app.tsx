import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";
import { ParentComponent, Suspense } from "solid-js";

const filter = {
  lang: ["ja", "es"],
};


export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <Route
          path="/:lang?/"
          matchFilters={filter}
        >
          <FileRoutes />
        </Route>
      </Router>
    </MetaProvider>
  );
}
