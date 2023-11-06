"use client";
import { useEffect } from "react";

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
    <div className="w-fit mx-auto">
        <pre>An error occured. Please refresh</pre>
        <button
          className="px-5 py-2 my-5 m-3 w-fit bg-[#76c893] rounded-md shadow-md"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
  );
}
