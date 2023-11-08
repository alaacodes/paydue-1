import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-gray-300">
      <div className="w-8/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center text-blue-100 mb-5">
          Oops Something went wrong. We apologize
        </h1>
        <h3 className="text-xl text-center text-[#faf0ca] mt-3 mb-6">
          The page you requested does not exist.
        </h3>
        <Link
          className="px-5 py-3 m-3 w-fit bg-blue-200 rounded-md shadow-md"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
