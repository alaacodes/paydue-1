import { gsap } from "@/app/lib/utils";
import { useRef, useLayoutEffect } from "react";
import BrandLogo from "./BrandLogo";

const Footer: React.FunctionComponent = () => {
  const socials = useRef<HTMLDivElement | null>(null);
  const brand = useRef<HTMLDivElement | null>(null);
  const signature = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let card = gsap.fromTo(
      socials.current,
      {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: socials.current,
          // scrub: true,
        },
      }
    );

    let date = gsap.fromTo(
      signature.current,
      {
        x: 100,
        opacity: 0,
        duration: 2.5,
        ease: "power1.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: socials.current,
          // scrub: true,
        },
      }
    );

    return () => {
      card.kill();
      date.kill();
    };
  }, []);
  return (
    <section className="bg-white py-3  w-full">
      <div className="sm:w-10/12 w-11/12 mx-auto md:flex block justify-between items-center">
        <div className="md:order-2 flex justify-center py-4 md:py-0">
          <BrandLogo />
        </div>
        <div
          ref={socials}
          className="inline-flex sm:gap-5 justify-between md:w-fit w-full  md:order-1 py-4 md:py-0"
        >
          <a href="#" className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z"
                stroke="#9B9B9B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                stroke="#9B9B9B"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 6.51002L17.51 6.49902"
                stroke="#9B9B9B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                fill="#9B9B9B"
              />
            </svg>
          </a>
          <button className="text-sm text-gray-200">Terms of Service</button>
          <button className="text-sm text-gray-200">Privacy Policy</button>
        </div>
        <p
          ref={signature}
          className="text-sm text-gray-200 md:pt-0 pt-4 sm:text-start text-center md:order-3"
        >
          Copyright &copy; 2023 Paydue All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
