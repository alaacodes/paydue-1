import BrandLogo from "./BrandLogo";
export default function PagePreloader() {
  return (
    <div className="w-screen z-[200] static bg-white top-0 h-screen flex flex-col items-center justify-center">
      <div>
        <BrandLogo />
      </div>
    </div>
  );
}
