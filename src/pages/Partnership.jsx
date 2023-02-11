import "./token.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BG from "../img/others/tree-bg.jpg";
import img from "../img/others/image1.png";

const Partnership = () => {
  // bring to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto ">
      <div className="relative h-[460px] w-full bg-gradient-to-b from-cyan-500 to-blue-800 bg-cover  bg-center">
        <div className="tokenbg"></div>
        <div className="flex md:hidden">
          <img
            src={BG}
            className="w-full h-[460px] object-cover absolute mix-blend-overlay"
            alt="background"
          />{" "}
        </div>
        <div className="absolute top-40 text-center w-[100%]">
          <h1 className="text-[50px] text-white font-poppins leading-none">
            Corporate Offsetting
          </h1>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="text-center pt-20 mx-auto w-3/4 md:w-2/4 max-sm:w-full">
          <div className="flex justify-center items-center font-medium ">
            <h1 className=" text-4xl md:text-5xl text-center">
              Offsetting made
              <span className="text-[#0DCB6B]"> easy</span>
            </h1>
          </div>
          <h2 className="text-lg font-normal max-sm:text-[16px] pt-10 px-2">
            Simply use our one-stop platform to offset your emissions and prove
            to your customers that your efforts are having a real impact on the
            environment.
          </h2>
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>

      <div className="flex justify-center items-center font-medium ">
        <h1 className=" text-4xl md:text-5xl text-center">Our Credits</h1>
      </div>

      <div className="w-[100%] p-2 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-5 h-[250px] p-1 text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[30px] text-[#219325] font-bold">
            Live
          </h1>
          <p className="text-[#4E4B4B] font-normal">
            No retired credits will be sold to anyone. Once purchased, we retire
            the credits on your behalf
          </p>
        </div>
        <div className="m-5 h-[250px] p-1 text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[30px] text-[#219325] font-bold">
            Certified
          </h1>
          <p className="text-[#4E4B4B] font-normal">
            All credits are certified by one of the four market recognised
            Carbon Registries
          </p>
        </div>
        <div className="m-5 h-[250px] p-1 text-center rounded-2xl shadow-lg lg:p-3">
          <h1 className="p-8 mt-6 text-[30px] text-[#219325] font-bold">
            Young Vintage
          </h1>
          <p className="text-[#4E4B4B] font-normal">
            All of our credits will be less than 5 years old
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
