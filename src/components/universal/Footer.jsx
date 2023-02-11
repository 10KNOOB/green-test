import React from "react";
import LogoWhite from "../../img/LogoWhite.png";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company"];
  return (
    <div className="relative px-6 bg-gray-900">
      <div className="container">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 dark:border-trueGray-400 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <a href="/">
                <img src={LogoWhite} alt="" className="w-[200px]" />
              </a>
            </div>

            <div className="max-w-md mt-4 text-gray-300 dark:text-gray-400">
              One-stop solution to offset carbon emissions and invest in the
              Voluntary Carbon Market Join the net-zero club
            </div>
          </div>

          <div className="">
            <div className="text-gray-100">Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-300">
              <a
                href="https://twitter.com/20Block30"
                target="_blank"
                rel="noreferrer"
                className="text-xl"
              >
                <span className="sr-only">Twitter</span>
                <BsTwitter />
              </a>
            </div>
            <p className="mt-4 text-gray-400">contact@block2030.com</p>
          </div>
          <div className="flex flex-col gap-3 lg:ml-0">
            {navigation.map((item, index) => (
              <a key={index} href="/">
                <p className="w-full pr-4 text-gray-400 rounded-md dark:text-gray-300 hover:text-green-600 focus:outline-none dark:focus:bg-trueGray-400">
                  {item}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          ©copyright @greenblock
        </div>
        <div className="h-[10px]"></div>
      </div>
    </div>
  );
}
