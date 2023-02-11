import React from "react";
import RoadmapCard from "./RoadmapCard";
import { motion } from "framer-motion";
import { RoadMapData } from "./Data";

const FromDown = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};

const Roadmap = () => {
  return (
    <div className="container pb-16 xl:first-letter:pb-[100px] text-center">
      <h3 className="text-3xl">
        <span className="p-text">Road</span> Map
      </h3>
      <br />
      <br />
      {/* <div className="w-full h-[2px] bg-gray-200 absolute mt-4">h2</div> */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
      >
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[0].header}
            text={RoadMapData[0].text}
            num={1}
          />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[1].header}
            text={RoadMapData[1].text}
            num={2}
          />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[2].header}
            text={RoadMapData[2].text}
            num={3}
          />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[3].header}
            text={RoadMapData[3].text}
            num={4}
          />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[4].header}
            text={RoadMapData[4].text}
            num={5}
          />
        </motion.div>
        <motion.div variants={FromDown}>
          <RoadmapCard
            header={RoadMapData[5].header}
            text={RoadMapData[5].text}
            num={6}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Roadmap;
