const RoadmapCard = ({ header, text, num }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-[30px] relative z-10 ring-8 ring-green-500/30 h-[30px] mx-auto rounded-full bg-green-600 font-bold hover:scale-110 duration-200 text-sm text-white grid place-items-center">
        {num}
      </div>
      <div className="h-2 xl:h-[30px] w-[2px] mt-2 bg-gray-300"></div>
      <div className="max-w-[250px] text-center  p-4 pt-0 rounded-xl">
        <h3 className="text-xl mb-3 bg-green-500/20 p-2 rounded-full">
          {header}
        </h3>
        <ul className="list-disc text-left ml-3">
          {text.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCard;
