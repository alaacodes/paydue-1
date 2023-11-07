"use client";
import { useEffect } from "react";
import BrandLogo from "./components/BrandLogo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-white">
      <BrandLogo/>
      <pre className="mt-10">An error occured. Please refresh</pre>
      <button
        className="px-5 py-2 my-5 m-3 w-fit text-white bg-blue-200 rounded-md shadow-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
