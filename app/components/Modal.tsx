"use client";
import { useLayoutEffect, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "../components/Button";

export type modalProps = {
  displayed?: Boolean;
  persist?: boolean;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  width?: string;
};

export function BaseModal({
  displayed,
  persist = false,
  children,
  onClick,
  width,
}: modalProps): React.ReactNode {
  const modal = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (displayed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayed]);

  return (
    <>
      {displayed &&
        createPortal(
          <div
            ref={overlay}
            onClick={(event) => {
              if (!persist && event.target === event.currentTarget) {
                onClick(event);
              }
            }}
            className="z-[9999] modal-overlay fixed bg-black/50 h-screen overflow-hidden flex flex-col justify-center items-center top-0 w-screen"
          >
            <div
              ref={modal}
              className={
                `${width ? width : "w-7/12"}` +
                " " +
                "overflow-auto z-[9999] bg-white max-h-[50rem] rounded-lg relative px-6 py-8 mx-auto"
              }
            >
              <button
                type="button"
                disabled={persist}
                className={
                  persist
                    ? "opacity-40 w-fit absolute z-[600] top-5 right-4 m-4"
                    : "absolute w-fit  z-[600] top-5 right-4 m-4"
                }
                onClick={onClick}
              >
                <span className="flex gap-2 justify-center items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_241_1103)">
                      <path
                        d="M10.0001 18.3332C14.6026 18.3332 18.3334 14.6023 18.3334 9.99984C18.3334 5.39734 14.6026 1.6665 10.0001 1.6665C5.39758 1.6665 1.66675 5.39734 1.66675 9.99984C1.66675 14.6023 5.39758 18.3332 10.0001 18.3332Z"
                        stroke="#B5B5B5"
                        strokeWidth="1.66667"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.3572 7.64307L7.64307 12.3572M7.64307 7.64307L12.3572 12.3572"
                        stroke="#B5B5B5"
                        strokeWidth="1.66667"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_241_1103">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-[#B5B5B5] text-sm">Close</span>
                </span>
              </button>
              <div className="relative rounded-lg z-[200] overflow-y-auto h-full w-full">
                {children}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
