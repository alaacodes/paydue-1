"use client";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import Link from "next/link";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { Login } from "../components/Login";

const Navbar: React.FunctionComponent = () => {
  const [loginModalState, toggleModal] = useState<boolean>(false);
  const router = useRouter();
  return (
    <section className="bg-white py-3 w-full absolute top-0 border-b-0.5 border-gray-50 shadow-sm z-[100]">
      <div className="md:w-10/12 w-11/12 mx-auto flex justify-between items-center">
        <button onClick={() => router.push("/")}>
          <BrandLogo />
        </button>

        <div className="hidden md:inline-flex gap-5">
          <button className="text-xs">About Us</button>
          <button className="text-xs">Downloads</button>
          <button className="text-xs">FAQ</button>
          <button className="text-xs">Support</button>
        </div>

        <div className="hidden md:inline-flex gap-2">
          <button
            type="button"
            onClick={() => toggleModal(true)}
            className="text-xs text-blue-100 py-2 px-3 rounded-md"
          >
            Log in
          </button>
          <button className="text-xs px-6 py-1.5 rounded-md bg-blue-100 text-white  border-blue-100">
            Sign Up
          </button>
        </div>

        <div className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
          >
            <path
              d="M2 2H28M2 11.5H28M2 21H28"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* //Modals */}
      </div>
      <div className="w-full">
        <Login
          modalState={loginModalState}
          onClick={(e) => toggleModal(false)}
        />
      </div>
    </section>
  );
};

export default Navbar;
