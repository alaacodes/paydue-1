"use client";
import { useState, useLayoutEffect } from "react";
import FirstHero from "./components/FirstHero";
import PagePreloader from "./components/PagePreloader";
import SecondHero from "./components/SecondHero";

export default function Home() {
  const [pageLoading, setpageLoading] = useState<boolean>(true);
  useLayoutEffect(() => {
    const delay = setInterval(() => {
      setpageLoading(false);
    }, 500);

    return () => {
      clearTimeout(delay);
    };
  }, []);
  return (
    <main>
      {pageLoading && <PagePreloader />}
      <main className="relative">
        <main className={"w-full secret-ellipse relative"}>
          <div className="secret overflow-x-hidden">
            <section className="lg:w-10/12 w-11/12 lg:flex gap-24 justify-start mx-auto pt-24 lg:pt-40 lg:pb-24 md:pb-0 pb-6 lg:mb-2 md:mb-0 mb-0">
              <FirstHero />
              <SecondHero />
            </section>
          </div>
        </main>
      </main>
    </main>
  );
}
