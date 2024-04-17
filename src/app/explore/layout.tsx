import { Suspense } from "react";
import Explore from "./page";

export default function Layout() {
  return (
    <main className="mt-[55px]">
      <Suspense fallback={"Loading"}>
        <Explore />
      </Suspense>
    </main>
  );
}
