import React from "react";
import BG from "../../img/BG.svg";

const TeamCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div className="max-w-[300px] p-4">
      <div
        className="w-[100px] md:w-[150px] bg-no-repeat bg-contain mx-auto"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <img
          src={img}
          alt=""
          className="w-[150px] rounded-full mx-auto xl:-mt-10 mb-4"
        />
      </div>
      <h3 className="mb-2">{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default TeamCard;
