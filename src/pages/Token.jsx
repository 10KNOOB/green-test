import COIN from "../img/others/coin-g.png";
import roundimg1 from "../img/others/r1.png";
import roundimg3 from "../img/others/r3.png";
import midimg from "../img/others/image12.png";
import BG from "../img/others/tree-bg.jpg";
import "./token.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Token = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <section id="hero">
        <div className="bg-gradient-to-b from-cyan-400 to-blue-900 h-[460px] w-full bg-cover bg-center mix-blend-overlay relative">
          <div className="tokenbg "></div>
          <div className="flex md:hidden">
            <img
              src={BG}
              className="w-full h-[460px] object-cover absolute mix-blend-overlay"
              alt="background"
            />{" "}
          </div>

          <div className="flex flex-col min-h-[460px] justify-center items-center gap-y-6 md:gap-y-10">
            <h1 className="text-[50px] mb-7 text-white font-poppins">
              Two Tokens
            </h1>
          </div>
        </div>{" "}
      </section>
      <section id="about" className="container">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 pt-10">
          <div className="mx-4 sm:mt-0 flex flex-col md:items-start justify-center items-center">
            <div className="font-medium flex flex-col md:justify-start md:items-start justify-center items-center text-4xl md:text-5xl gap-y-4 mt-0 md:mt-10">
              <h1>
                Offset and
                <span className="text-[#0DCB6B]"> Invest</span>
              </h1>
            </div>
            <div className="max-w-[300px] pt-8 text-xl font-normal">
              <p>
                Our innovative two-token structure makes offsetting and
                investing in the voluntary carbon market simple and accessible
                for all.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 pt-8">
              <button className="flex justify-center bg-gradient-to-r from-green-500 to-blue-600">
                Litepaper
              </button>
              <button className="flex justify-center">FAQ</button>
            </div>
          </div>

          <div className="min-w-[300px] flex flex-col mx-auto gap-4 justify-center mt-16 md:mt-0">
            <div className="md:max-w-2xl border h-72 md:h-52 lg:h-40 rounded-3xl flex flex-col md:flex-row  justify-center items-center p-4 text-justify hover:-translate-y-2 duration-300 shadow-lg">
              <img
                src={roundimg3}
                alt="..."
                className="object-cover h-5/6 w-[130px] border-none "
              />
              <p classname="flex justufy-center">
                The Block token allows investors to gain exposure to the
                voluntary carbon credit market. This is the first time investors
                can easily access this market, making the Block token valuable
                and innovative.
                <span className="font-bold">
                  {" "}
                  We plan to launch the block token later this year
                </span>
              </p>
            </div>

            <div className="md:max-w-2xl border h-72 md:h-52 lg:h-40 rounded-3xl flex flex-col md:flex-row  justify-center items-center p-4 text-justify hover:-translate-y-2 duration-300 shadow-lg">
              <img
                src={roundimg1}
                alt="..."
                className="object-cover h-5/6 w-[130px] border-none "
              />
              <p classname="flex justufy-center">
                The CO2 token is a digital asset backed by carbon credits. It
                allows businesses to of offset their emissions in a transparent
                and accessible way. When the token is bought, it is burned and
                the underlying carbon credits are transferred to the purchaser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="middle" className="my-20 h-full max-w-[1200px] mx-auto">
        <hr className="max-w-[1200px] mx-auto" />
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-y-5 md:gap-y-0 py-16 md:py-24">
          <div className="max-w-[300px] md:max-w-[400px] text-xl font-normal flex border border-gray-200 shadow-md rounded-2xl">
            <p className="m-6">
              With every offset, a fee will go into the block token giving
              individuals exposure to the growing voluntary carbon credit market
            </p>
          </div>
          <img src={midimg} alt="" className="max-w-[300px] md:max-w-[500px]" />
        </div>
        <hr className="max-w-[1200px] mx-auto" />
      </section>

      <section id="last" className="mx-3 md:mx-0 my-10">
        <div className="flex justify-center items-center font-medium ">
          <h1 className=" text-4xl md:text-5xl text-center">
            The market is
            <span className="text-[#0DCB6B] pl-2">growing quickly</span>
          </h1>
        </div>
        <div className="flex justify-center text-xl font-normal pt-8">
          <p className="max-w-[1000px] text-center">
            More and more companies offset their emissions through voluntary
            carbon credits
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-6 pt-16 place-items-center">
          <div>
            <div>
              <img
                src={COIN}
                alt=""
                srcSet=""
                className="object-cover w-[300px] md:w-full md:h-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-6 md:mt-0">
            <h1
              href="#"
              className=" p-2 lg:p-4  max-w-[24rem] h-40 bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200 hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                High Demand
              </p>
              <p className="font-normal pt-5 text-base text-center">
                Demand is set to grow 15x by 2030 (McKinsey)
              </p>
            </h1>

            <h1
              href="#"
              className=" p-2 lg:p-4  max-w-[24rem] h-40 bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Net zero commitments
              </p>
              <p className="font-normal  pt-5 text-base text-center">
                Over 2,000 companies announce net-zero ambitions
              </p>
            </h1>
          </div>

          <div className="flex flex-col gap-y-4">
            <h1
              href="#"
              className=" p-2 lg:p-4  max-w-[24rem] h-40 bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Huge market
              </p>
              <p className="font-normal  pt-5 text-base text-center">
                Corporate market is expected to grow to $30B in 2030
              </p>
            </h1>

            <h1
              href="#"
              className="p-2 lg:p-4  max-w-[24rem] h-40 bg-white rounded-2xl border border-gray-200 shadow-md  dark:shadow-gray-200  hover:shadow-lg"
            >
              <p className="mb-2 text-3xl font-medium text-[#219325] tracking-tigh text-center">
                Low Supply
              </p>
              <p className="font-normal pt-5 text-base text-center">
                Credits take a long time to be issued
              </p>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Token;
