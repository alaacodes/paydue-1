"use client";
import BrandLogo from "./components/BrandLogo";
import { useRef, useLayoutEffect } from "react";

import { gsap } from "@/app/lib/utils";

export default function Loading() {
  const logo = useRef<HTMLDivElement | null>(null);
    
  useLayoutEffect(() => {
    let ctx = gsap.fromTo(
      logo.current,
      {
        scale: 0.8,
        duration: 4,
        animationDelay: 3,
        ease: "elastic",
        yoyo: true,
      },
      {
        scale: 2,
        opacity: 1,
        duration: 4,
        animationDelay: 3,
        ease: "elastic",
        yoyo: true,
      }
    );
    return () => {
      ctx.kill();
    };
  }, []);
  return (
    <section className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-black">
      <div className="w-fit" ref={logo}>
        <BrandLogo />
      </div>
    </section>
  );
}
