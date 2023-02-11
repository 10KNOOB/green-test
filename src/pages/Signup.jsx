import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import BIGTREE from "../img/others/tree.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [open, setOpen] = useState(false);

  //handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative bg-[#F4FEF7] px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto md:max-w-6xl sm:rounded-lg sm:px-10 mt-16">
        <div className="flex flex-row justify-center md:justify-between gap-x-0 md:gap-x-20">
          <div className="flex self-center">
            <img
              src={BIGTREE}
              alt="SIGNIN TREE"
              srcSet=""
              className="max-h-[400px] hidden md:flex"
            />
          </div>
          <div className="flex flex-col">
            <form action="">
              <div className="flex flex-col font-popins">
                <span className="text-xl font-medium pb-1 text-center min-w-[300px]">
                  Sign Up
                </span>
              </div>
              <div className="from pt-6">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    E-mail or phone numbers
                  </label>
                  <input
                    type="text"
                    placeholder="example@example.com"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-[#949CA9]"
                  >
                    Wallet No.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your wallet no."
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                  />
                </div>
              </div>

              <div className="flex pt-2 gap-2">
                <div className="from ">
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
                        placeholder="Enter password"
                        className="p-2 text-xs rounded border-[1px] border-gray-400 w-full"
                      />
                    </div>

                    <div className="text-sm absolute top-[1.9rem] right-2">
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
                <div className="from relative">
                  <div className="flex flex-col ">
                    <label
                      htmlFor=""
                      className="text-xs pb-1 font-medium text-[#949CA9]"
                    >
                      Confirm Password
                    </label>
                    <div className="w-full">
                      <input
                        type={open === false ? "password" : "text"}
                        placeholder="Confirm password"
                        className="p-2 text-xs rounded border-[1px] border-gray-400 w-full"
                      />
                    </div>

                    <div className="text-sm absolute top-[1.9rem] right-2">
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
              </div>

              <div className="button flex flex-col justify-center pt-6">
                <button className="bg-green-500 w-full rounded text-sm font-medium py-2 text-white text-center">
                  <p className="w-full text-center">Sign Up</p>
                </button>
              </div>
            </form>

            <div className="button flex justify-center pt-6">
              <button className="border-[1px] flex flex-row border-gray-300 bg-white w-fit rounded font-medium text-sm py-2 text-black  buttonColor">
                <FcGoogle className="h-[20px] w-[20px] ml-2" />
                <span className="px-2">Sign up with Google</span>
              </button>
            </div>
            <div className="flex flow-row gap-x-2 justify-center pt-4">
              <span className="text-sm">Already have an account?</span>
              <Link to="/signin">
                <span className="text-green-500 text-sm">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
