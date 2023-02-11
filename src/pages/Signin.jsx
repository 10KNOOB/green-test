import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TREE from "../img/others/tree.png";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signin = () => {
  const [open, setOpen] = useState(false);
  // bring to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative bg-[#effbff] px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto md:max-w-6xl sm:rounded-lg sm:px-10 mt-16">
        <div className="flex flex-row justify-center md:justify-between gap-x-0 md:gap-x-20">
          <div>
            <img
              src={TREE}
              alt="SIGNIN TREE"
              srcSet=""
              className="max-h-[400px] hidden md:flex"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col font-popins">
              <span className="text-xl font-medium pb-1 text-center min-w-[300px]">
                Sign In
              </span>
            </div>

            <form action="">
              <div className="from pt-12">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    E-mail or phone number
                  </label>
                  <input
                    type="text"
                    placeholder="example@example.com"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                  />
                </div>
              </div>

              <div className="from pt-4">
                <div className="flex flex-col relative">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    Password
                  </label>
                  <div className="w-full">
                    <input
                      type={open === false ? "password" : "text"}
                      placeholder="Enter your password"
                      className="p-2 text-xs rounded border-[1px] border-gray-400 w-full"
                    />
                  </div>
                  <div className="text-sm absolute top-[1.9rem] right-4">
                    {open === false ? (
                      <AiOutlineEye
                        onClick={toggle}
                        className="text-[#949CA9]"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={toggle}
                        className="text-[#949CA9]"
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
            <div className="button flex flex-col justify-center pt-6">
              <button className="bg-green-500 w-full px-10 rounded text-sm font-medium py-2 text-white">
                <p className="w-full text-center">Sign In</p>
              </button>
              <Link to="/forgetpassword">
                <span className="text-end text-green-500 text-sm pt-2">
                  Forget Password?
                </span>
              </Link>
            </div>
            <div className="button flex justify-center pt-6">
              <button className="border-[1px] flex flex-row border-gray-300 w-fit rounded font-medium text-sm py-2 text-black buttonColor">
                <FcGoogle className="h-[20px] w-[20px] ml-2" />
                <span className="px-2">Sign in with Google</span>
              </button>
            </div>
            <div className="flex flow-row gap-x-2 justify-center pt-4">
              <span className="text-sm">Don't have an account?</span>
              <Link to="/signup">
                <span className="text-green-500 text-sm">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
