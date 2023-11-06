import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-black">
      <div className="w-8/12 mx-auto">
        <h1 className="text-3xl text-center text-blue-100 mb-5">
          Oops Something went wrong. We apologize
        </h1>
        <h3 className="text-xl text-center text-[#faf0ca mt-3 mb-6">Please Try again.</h3>
        <Link
          className="px-5 y-2 m-3 w-fit bg-[#76c893] rounded-md shadow-md"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
