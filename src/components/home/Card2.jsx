import React from "react";

const Card2 = ({ data }) => {
  const { img, title, date } = data;
  return (
    <div>
      <img src={img} alt="" className="rounded-xl mb-4" />
      <h3 className="mb-2 text-2  xl font-bold">{title}</h3>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};

export default Card2;
