"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "@/app/lib/utils";
import { Button } from "./Button";
export default function FirstHero() {
  const btn = useRef<HTMLButtonElement | null>(null);
  useLayoutEffect(() => {
    let button = gsap.fromTo(
      btn.current,
      {
        duration: 1.5,
        ease: "circ.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
        backgroundPositionX: -200,
      },
      {
        duration: 1.5,
        ease: "circ.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
        backgroundPositionX: 0,
      }
    );

    return () => {
      button.kill();
    };
  }, []);

  return (
    <aside className="lg:w-6/12 md:w-10/12 w-11/12 mx-auto pt-10 lg:mb-0 mb-5">
      <h1 className="text-blue-100 md:text-xl text-base not-italic font-normal md:leading-[25px] leading-[20px] uppercase">
        PAYDUE
      </h1>
      <header className="text-black md:text-[2.5rem] text-[2rem] md:w-[105%] w-full not-italic font-normal md:leading-[50px] leading-[40px]">
        Pay Your Dues in Seconds, Get Your Receipt Instantly
      </header>
      <p className="text-sm text-black mt-5 md:w-[84%]">
        With PayDue, you can pay your dues from anywhere, anytime, with any
        major credit or debit card. Once your payment is processed, you'll
        instantly receive a receipt that you can download or print.
      </p>

      <div className="w-fit">
        <Button
          onClick={() => console.log("Pay now")}
          type="button"
          ref={btn}
          className="light inline-flex justify-center items-center mt-8 py-2 gap-3 px-5  text-white text-sm not-italic font-normal leading-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.1937 6.81219L8.4242 11.6327L2.99953 8.23973C2.22229 7.75345 2.38397 6.57286 3.2631 6.31577L16.1427 2.54397C16.9477 2.30802 17.6938 3.06069 17.4546 3.86833L13.6442 16.739C13.3832 17.6193 12.2093 17.7766 11.7277 16.996L8.42167 11.6335"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Pay Dues Now</span>
        </Button>
      </div>
    </aside>
  );
}
