import { PartnersData } from "./Data";
import { motion } from "framer-motion";
const FromBottom = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
const Partners = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      variants={FromBottom}
      className="container grid place-items-center gap-4 md:gap-12 pb-16 xl:pb-[100px]"
    >
      <h3 className="text-3xl">
        <span className="p-text">Partners</span> & Investors
      </h3>
      <div className="flex items-center gap-10">
        {PartnersData.map((data) => (
          <img
            key={data.id}
            className="w-[50px] md:w-[80px]"
            src={data.img}
            alt=""
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Partners;
