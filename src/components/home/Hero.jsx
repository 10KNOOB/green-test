import React from "react";
import "../../App.css";
import Tree from "../../img/tree.png";

const Hero = () => {
  return (
    <div className="w-full md:min-h-screen bgimage">
      <div className="h-[80px] md:hidden"></div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 place-items-center md:min-h-screen">
          <div>
            <h1
              className="text-3xl text-center md:text-left mb-5 md:text-5xl md:mb-10
            "
            >
              One-stop <span className="p-text">solution</span> to offset carbon
              emissions and invest in the Voluntary Carbon Market <br />{" "}
              <span className="text-xl md:text-3xl pt-4">
                {" "}
                Join the net-zero club
              </span>
            </h1>
          </div>
          <div className="hidden md:block">
            <img src={Tree} className="w-[200px] md:w-full scale-150" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
