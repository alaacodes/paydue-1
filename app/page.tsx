"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "@/app/lib/utils";
import { useRef, useLayoutEffect } from "react";

export default function Home() {
  const guy = useRef<HTMLDivElement | null>(null);
  const mastercard = useRef<HTMLDivElement | null>(null);
  const tickElem = useRef<HTMLImageElement | null>(null);
  const btn = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.fromTo(
      guy.current,
      {
        x: 100,
        opacity: 0,
        duration: 4,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      },
      {
        x: 0,
        opacity: 1,
        duration: 4,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      }
    );

    let tick = gsap.fromTo(
      tickElem.current,
      {
        scale: 1.3,
        duration: 5,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      },
      {
        scale: 1,
        duration: 5,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      }
    );

    let card = gsap.fromTo(
      mastercard.current,
      {
        y: 100,
        opacity: 0,
        duration: 4,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        delay: 2,
        ease: "elastic",
        yoyo: true,
      }
    );

    let button = gsap.fromTo(
      btn.current,
      {
        duration: 1.5,
        ease: "circ.inOut",
        yoyo: true,
        repeat: -1,
        delay: 5,
        backgroundPositionX: -200,
      },
      {
        duration: 1.5,
        ease: "circ.inOut",
        yoyo: true,
        repeat: -1,
        delay: 5,
        backgroundPositionX: 0,
      }
    );
    return () => {
      ctx.kill();
      tick.kill();
      card.kill();
      button.kill();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="min-h-screen secret-ellipse relative">
        <div className="secret">
          <section className="md:w-10/12 w-11/12 md:flex gap-24 justify-start mx-auto pt-24 md:pt-40 pb-24 md:mb-2">
            <aside className="md:w-6/12 w-11/12 mx-auto pt-10">
              <h1 className="text-blue-100 md:text-xl text-base not-italic font-normal md:leading-[25px] leading-[20px] uppercase">
                PAYDUE
              </h1>
              <header className="text-black md:text-[2.5rem] text-[2rem] md:w-[105%] w-full not-italic font-normal md:leading-[50px] leading-[40px]">
                Reshaping the World of Management
              </header>
              <p className="text-sm text-black mt-5 md:w-[84%]">
                PayDue (PDU) is a visionary project with a mission to
                revolutionize the way union members and administrators manage
                dues payments.
              </p>

              <button
                ref={btn}
                className="light inline-flex justify-center items-center rounded-md mt-8 py-2 gap-3 px-5  text-white text-sm not-italic font-normal leading-6"
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
              </button>
            </aside>

            <aside className="md:w-4/12 w-10/12 mx-auto  md:h-[27.5rem] h-[22rem] relative md:mt-0 mt-20 md:mb-0 mb-40">
              {/* //First card */}
              <div className="md:w-[18rem] w-[15rem] absolute md:h-[25rem] h-[22rem] shrink-0 md:py-8 py-6 px-6 z-40 bg-white shadow-md flex flex-col items-center rounded-xl">
                <Image
                  ref={tickElem}
                  priority={true}
                  width={100}
                  height={5}
                  src={"/assets/img/green-tick.svg"}
                  alt="Green tick"
                  className="md:w-[100px] w-[80px]"
                />
                <p className="md:mt-6 mt-3 text-black text-sm not-italic font-normal leading-[21.895px]">
                  Payment Successful
                </p>
                <p className="mt-2 text-black text-center text-[9.8px] not-italic font-normal leading-[21.052px]">
                  Your payment has been successfully completed. click “Download
                  Receipt” to proceed to download your receipt{" "}
                </p>

                <p className="inline-flex justify-center items-center rounded-md mt-2 py-1 md:py-2 gap-2 px-3 md:px-5 bg-blue-100 text-white md:text-xs text-[8px] not-italic font-normal leading-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <path
                      d="M6.58984 8.72941L6.58984 2.39209"
                      stroke="white"
                      strokeWidth="0.789467"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.12476 7.18848L6.59003 8.72952L5.05531 7.18848"
                      stroke="white"
                      strokeWidth="0.789467"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.02803 4.88306H9.51908C10.5901 4.88306 11.458 5.75094 11.458 6.82251V9.39302C11.458 10.4614 10.5922 11.3272 9.52381 11.3272H3.6607C2.58966 11.3272 1.72125 10.4588 1.72125 9.38776V6.81672C1.72125 5.74884 2.58755 4.88306 3.65544 4.88306H4.15123"
                      stroke="white"
                      strokeWidth="0.789467"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Download Reciept</span>
                </p>

                <p className="inline-flex justify-center items-center rounded-md  md:mt-12 mt-10 py-2 gap-1.5 px-5 text-blue-100 md:text-[10px] text-[10px] not-italic font-normal leading-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M9.12598 10.8605L5.4418 7.17637L9.12598 3.49219"
                      stroke="#3EA9E0"
                      strokeWidth="0.789467"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Back to homepage</span>
                </p>
              </div>

              {/* //Second card */}
              <div className="w-[12rem] md:w-[15rem] md:h-[22.5rem] h-[20.5rem] absolute rotate-[6deg] left-[4.37rem] top-[52px]  shrink-0 py-8 px-6 z-30 bg-white shadow-md flex flex-col items-center rounded-xl"></div>
              {/* //Third card */}
              <div className="w-[12rem] md:w-[15rem] md:h-[22.5rem] h-[20.5rem]  absolute rotate-[10deg] left-[6.5rem] top-[65px] shrink-0 py-8 px-6 z-20 bg-blue-100 flex flex-col items-center rounded-xl"></div>

              <div
                ref={mastercard}
                className="absolute w-[12rem] bg-[#50505011] backdrop-blur-sm top-[-40px] right-[-3px] z-40 gap-4 inline-flex justify-start items-center px-3 py-2 h-fit shrink-0 rounded-[12.631px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="21"
                  viewBox="0 0 27 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_241_993)">
                    <path
                      d="M4.90845 20.884V19.4948C4.90845 18.9622 4.58424 18.615 4.02853 18.615C3.75072 18.615 3.44971 18.7076 3.24131 19.0086C3.07931 18.7539 2.8478 18.615 2.50049 18.615C2.26888 18.615 2.03749 18.6844 1.85218 18.9391V18.6613H1.36597V20.884H1.85218V19.6568C1.85218 19.2633 2.06058 19.078 2.38479 19.078C2.70879 19.078 2.87101 19.2864 2.87101 19.6568V20.884H3.35722V19.6568C3.35722 19.2633 3.58862 19.078 3.88962 19.078C4.21383 19.078 4.37583 19.2864 4.37583 19.6568V20.884H4.90845ZM12.1089 18.6613H11.3218V17.9899H10.8356V18.6613H10.3957V19.1011H10.8355V20.1199C10.8355 20.6294 11.0439 20.9303 11.5996 20.9303C11.808 20.9303 12.0394 20.8609 12.2016 20.7683L12.0626 20.3515C11.9237 20.4441 11.7617 20.4673 11.6459 20.4673C11.4144 20.4673 11.3218 20.3284 11.3218 20.0967V19.1011H12.1089V18.6613ZM16.2302 18.6149C15.9524 18.6149 15.7672 18.7539 15.6514 18.9391V18.6613H15.1652V20.884H15.6514V19.6337C15.6514 19.2633 15.8134 19.0549 16.1144 19.0549C16.207 19.0549 16.3228 19.0781 16.4154 19.1012L16.5543 18.6382C16.4617 18.615 16.3228 18.615 16.2302 18.615V18.6149ZM10.0021 18.8465C9.77045 18.6844 9.44635 18.615 9.09904 18.615C8.54343 18.615 8.17303 18.8928 8.17303 19.3327C8.17303 19.7032 8.45083 19.9115 8.93704 19.981L9.16854 20.0042C9.42325 20.0504 9.56215 20.1199 9.56215 20.2358C9.56215 20.3978 9.37695 20.5136 9.05274 20.5136C8.72864 20.5136 8.47393 20.3978 8.31182 20.2821L8.08032 20.6525C8.33503 20.8377 8.68233 20.9303 9.02954 20.9303C9.67785 20.9303 10.0484 20.6294 10.0484 20.2125C10.0484 19.8189 9.74736 19.6105 9.28424 19.5411L9.05274 19.5179C8.84433 19.4947 8.68233 19.4485 8.68233 19.3096C8.68233 19.1475 8.84433 19.0549 9.09904 19.0549C9.37695 19.0549 9.65476 19.1706 9.79366 19.2401L10.0021 18.8465ZM22.9215 18.615C22.6435 18.615 22.4583 18.7539 22.3425 18.9391V18.6613H21.8563V20.884H22.3425V19.6337C22.3425 19.2633 22.5046 19.0549 22.8055 19.0549C22.8983 19.0549 23.0141 19.0781 23.1067 19.1012L23.2456 18.6382C23.153 18.615 23.0141 18.615 22.9215 18.615ZM16.7164 19.7726C16.7164 20.4441 17.1794 20.9303 17.8972 20.9303C18.2213 20.9303 18.4529 20.8609 18.6844 20.6757L18.4529 20.2821C18.2677 20.421 18.0824 20.4904 17.874 20.4904C17.4804 20.4904 17.2026 20.2125 17.2026 19.7726C17.2026 19.3559 17.4804 19.078 17.874 19.0549C18.0824 19.0549 18.2677 19.1243 18.4529 19.2633L18.6844 18.8697C18.4529 18.6844 18.2213 18.615 17.8972 18.615C17.1794 18.615 16.7164 19.1012 16.7164 19.7726ZM21.2081 19.7726V18.6613H20.7219V18.9391C20.5598 18.7308 20.3283 18.615 20.0273 18.615C19.4022 18.615 18.916 19.1012 18.916 19.7726C18.916 20.4441 19.4022 20.9303 20.0273 20.9303C20.3514 20.9303 20.583 20.8146 20.7219 20.6062V20.884H21.2081V19.7726ZM19.4253 19.7726C19.4253 19.379 19.68 19.0549 20.0967 19.0549C20.4903 19.0549 20.7682 19.3559 20.7682 19.7726C20.7682 20.1662 20.4903 20.4904 20.0967 20.4904C19.68 20.4672 19.4253 20.1662 19.4253 19.7726ZM13.6139 18.615C12.9656 18.615 12.5025 19.078 12.5025 19.7726C12.5025 20.4673 12.9655 20.9303 13.637 20.9303C13.9612 20.9303 14.2854 20.8377 14.5401 20.6294L14.3085 20.2821C14.1233 20.421 13.8918 20.5136 13.6602 20.5136C13.3592 20.5136 13.0582 20.3747 12.9887 19.9809H14.6327V19.7958C14.6559 19.078 14.2392 18.615 13.6139 18.615ZM13.6139 19.0317C13.9148 19.0317 14.1234 19.217 14.1696 19.5643H13.0119C13.0582 19.2633 13.2666 19.0317 13.6139 19.0317ZM25.6766 19.7726V17.7815H25.1904V18.9391C25.0283 18.7308 24.7968 18.615 24.4958 18.615C23.8707 18.615 23.3845 19.1012 23.3845 19.7726C23.3845 20.4441 23.8707 20.9303 24.4958 20.9303C24.82 20.9303 25.0515 20.8146 25.1904 20.6062V20.884H25.6766V19.7726ZM23.8939 19.7726C23.8939 19.379 24.1485 19.0549 24.5653 19.0549C24.9589 19.0549 25.2367 19.3559 25.2367 19.7726C25.2367 20.1662 24.9589 20.4904 24.5653 20.4904C24.1485 20.4672 23.8939 20.1662 23.8939 19.7726ZM7.64041 19.7726V18.6613H7.1542V18.9391C6.99209 18.7308 6.76059 18.615 6.45958 18.615C5.83447 18.615 5.34826 19.1012 5.34826 19.7726C5.34826 20.4441 5.83447 20.9303 6.45958 20.9303C6.78379 20.9303 7.0153 20.8146 7.1542 20.6062V20.884H7.64041V19.7726ZM5.83447 19.7726C5.83447 19.379 6.08917 19.0549 6.50588 19.0549C6.89949 19.0549 7.1774 19.3559 7.1774 19.7726C7.1774 20.1662 6.89949 20.4904 6.50588 20.4904C6.08917 20.4672 5.83447 20.1662 5.83447 19.7726Z"
                      fill="black"
                    />
                    <path
                      d="M9.84009 1.78271H17.1333V14.8873H9.84009V1.78271Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M10.3031 8.33509C10.3031 5.67253 11.5534 3.31087 13.475 1.78274C12.0628 0.671414 10.28 0 8.3352 0C3.72758 0 0 3.72758 0 8.33509C0 12.9425 3.72758 16.6702 8.33509 16.6702C10.2799 16.6702 12.0627 15.9988 13.475 14.8873C11.5534 13.3824 10.3031 10.9976 10.3031 8.33509Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M26.9733 8.33509C26.9733 12.9425 23.2457 16.6702 18.6382 16.6702C16.6934 16.6702 14.9106 15.9988 13.4983 14.8873C15.4431 13.3593 16.6703 10.9976 16.6703 8.33509C16.6703 5.67253 15.4199 3.31087 13.4983 1.78274C14.9105 0.671414 16.6934 0 18.6382 0C23.2457 0 26.9733 3.75079 26.9733 8.33509Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_241_993">
                      <rect width="27" height="20.9883" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="text-gray-300 text-xs not-italic font-normal leading-[21.895px]">
                    Mastercard
                  </p>
                  <p className="text-gray-300 text-xs not-italic font-normal leading-[21.895px]">
                    2343 4423 ****
                  </p>
                </div>
              </div>
              {/* //Guy in hat */}
              <div
                ref={guy}
                className="absolute guy md:bottom-2 bottom-[-3rem] gap-3 w-[13rem] bg-[#50505012] md:left-[14.25rem] -left-[1.5rem] z-40 inline-flex items-center px-4 py-2 shrink-0 backdrop-blur-sm rounded-[12.631px]"
              >
                <Image
                  priority={true}
                  width={54}
                  height={54}
                  src={"/assets/img/hat.svg"}
                  alt="Dude in hat"
                />
                <div>
                  <p className="text-gray-300 text-xs not-italic font-normal leading-[21.895px]">
                    Adeniyi Tosin
                  </p>
                  <p className="text-gray-300 text-xs not-italic font-normal leading-[21.895px]">
                    Student
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
