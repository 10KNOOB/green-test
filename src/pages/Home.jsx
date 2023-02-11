import AafterTeam from "../components/home/AafterTeam";
import About from "../components/home/About";
import CardOneSection from "../components/home/CardOneSection";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Roadmap from "../components/home/Roadmap";
// import Teams from "../components/home/Teams";
import CardSectionTwo from "../components/home/CardSectionTwo";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <AafterTeam />
      <CardOneSection />
      <Roadmap />
      {/* <Teams /> */}
      <CardSectionTwo />
    </div>
  );
};

export default Home;
