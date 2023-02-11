import React from "react";
import TeamCard from "./TeamCard";
import { TeamsData } from "./Data";

const Teams = () => {
  return (
    <div className="container text-center mb-10" id="team">
      <h3 className="text-3xl">
        Our<span className="p-text">Team</span>
      </h3>
      <p className="max-w-[500px] mx-auto mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores facere
        totam recusandae earum.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 pt-10 xl:pt-16 gap-6 px-4">
        {TeamsData.map((data) => (
          <TeamCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
