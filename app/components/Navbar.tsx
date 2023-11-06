import BrandLogo from "./BrandLogo";

const Navbar: React.FunctionComponent = () => {
  return (
    <section className="bg-white py-3 fixed top-0 w-full border-b-0.5 border-gray-50 shadow-sm z-[100]">
      <div className="md:w-10/12 w-11/12 mx-auto flex justify-between items-center">
        <BrandLogo />
        <div className="hidden md:inline-flex gap-5">
          <button className="text-xs">About Us</button>
          <button className="text-xs">Downloads</button>
          <button className="text-xs">FAQ</button>
          <button className="text-xs">Support</button>
        </div>

        <div className="hidden md:inline-flex gap-2">
          <button className="text-xs text-blue-100 px-4 py-2 rounded-md">Log in</button>
          <button className="text-xs px-6 py-1.5 rounded-md bg-blue-100 text-white hover:text-black hover:bg-white border border-blue-100 hover:border-blue-100">
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
      </div>
    </section>
  );
};

export default Navbar;
