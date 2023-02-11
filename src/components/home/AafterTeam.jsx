import { Link } from "react-router-dom";
import World from "../../img/world.png";

const AafterTeam = () => {
  return (
    <div className="container xl:pb-10 grid md:grid-cols-2 gap-6 place-items-center">
      <div>
        <h2>
          We bring <span className="p-text">carbon</span> credits on chain
        </h2>
        <br />
        <p>
          Our CO2 token is used to offset your emissions. The block token will
          be used to invest in the voluntary carbon credit market.
        </p>
        <br />
        <Link to="token">
          <button>Token</button>
        </Link>
      </div>
      <img
        className="max-w-[300px] hidden md:block md:max-w-[400px] xl:max-w-[700px]"
        src={World}
        alt=""
      />
    </div>
  );
};

export default AafterTeam;
