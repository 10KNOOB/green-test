import Card2 from "./Card2";
import { Card2Data } from "./Data";

const CardSectionTwo = () => {
  return (
    <div className="bg-[#effbff] mb-[-80px]" id="blog">
      <div className="container text-center py-12">
        <h3 className="text-3xl">
          <span className="p-text">Blog</span> Section
        </h3>
        <div>
          <div className="grid md:grid-cols-3 pt-10 gap-6 px-4">
            {Card2Data.map((data) => (
              <Card2 data={data} key={data.id} />
            ))}
          </div>
        </div>
        <button className="mx-auto mt-10">Read More</button>
      </div>
    </div>
  );
};

export default CardSectionTwo;
