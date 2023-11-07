import {
  useLayoutEffect,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from "react";
import { createPortal } from "react-dom";

export type modalProps = {
  displayed: Boolean;
  persist?: boolean;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  className?: string;
};

export default function BaseModal({
  displayed,
  persist = false,
  children,
  onClick,
  className,
}: modalProps): React.ReactNode {
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
            onClick={(event) => {
              if (!persist) {
                onClick(event);
              }
            }}
            className={
              persist
                ? "pointer-events-none bg-black/50 z-[400] h-screen fixed overflow-hidden top-0 w-screen flex flex-col justify-center items-center"
                : "bg-black/50 z-[400] h-screen fixed overflow-hidden top-0 w-screen flex flex-col justify-center items-center"
            }
          >
            <div className="overflow-hidden pointer-events-auto w-full p-5 mx-auto z-[600]">
              <div className={className + "relative"}>
                <button
                  disabled={persist}
                  className={
                    persist
                      ? "opacity-40 absolute z-[610] top-5 right-4 m-4"
                      : "absolute z-[610] top-5 right-4 m-4"
                  }
                  onClick={onClick}
                >
                  <span className="w-full flex gap-2 justify-center items-center">
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
                          stroke-width="1.66667"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3572 7.64307L7.64307 12.3572M7.64307 7.64307L12.3572 12.3572"
                          stroke="#B5B5B5"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                <div className="relative max-h-[60vh] overflow-y-auto h-full w-full px-6 py-8">
                  {children}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
