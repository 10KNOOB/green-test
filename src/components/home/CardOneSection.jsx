import Card1 from "./Card1";
import { Card1Data } from "./Data";

const CardOneSection = () => {
  return (
    <div className="container pb-16 xl:pb-[100px]">
      {/* <div className="text-center">
        <h3 className="text-3xl">
          Lorem ipsum <span className="p-text">Partners</span> dolor sit amet.
        </h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          voluptatem eaque natus maxime quisquam?
        </p>
      </div> */}
      <div className="grid md:grid-cols-3 pt-10 gap-6 px-4">
        {Card1Data.map((data) => (
          <Card1 data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default CardOneSection;
