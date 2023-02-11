import React from "react";

const ForgetPassword = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative bg-[#F4FEF7] px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 sm:mx-auto md:max-w-lg sm:rounded-lg sm:px-10 mt-16">
        <div className="flex flex-col py-16 px-10 sm:px-16">
          <div className="min-w-[500px]"></div>
          <div className="flex flex-col font-popins">
            <span className="text-xl font-medium pb-1">Forgot Password</span>
            <span className="text-xs text-[#949CA9]">
              Enter your email and we send you a reset link
            </span>
          </div>
          <div className="from pt-10">
            <form className="flex flex-col ">
              <label
                htmlFor=""
                className="text-xs pb-1 font-medium text-[#949CA9]"
              >
                E-mail or phone number
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="p-2 text-xs rounded border-[1px] border-gray-400"
              />
            </form>
          </div>

          <div className="button flex justify-center pt-6">
            <button className="bg-green-500 w-full rounded text-sm font-medium py-2 text-white">
              <p className="w-full text-center">Send me the link</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
