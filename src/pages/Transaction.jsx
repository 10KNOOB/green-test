import React from "react";

const Transaction = () => {
  return (
    <div className="container">
      <div className="mt-24 md:mt-32">
        <h1 className=" text-4xl md:text-5xl text-center">
          Lorem Ipsum
          <span className="text-[#0DCB6B] pl-2">Dolor sit</span>
        </h1>
      </div>
      <div className="flex justify-center text-xl font-normal pt-8">
        <p className="max-w-[1000px] text-center">
          Lorem ipsum dolor sit amet consectetur. Nisi odio placerat
          pellentesque dictum viverra. Ac quam curabitur aliquet cursus in justo
          nunc.
        </p>
      </div>
      <div className="flex justify-center mt-16">
        <table className="w-[1000px] rounded-lg overflow-hidden ">
          <thead className="bg-[#F5F5F5]">
            <tr className="">
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 md:px-6 py-4 text-left"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 md:px-6 py-4 text-left"
              >
                Company Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 md:px-6 py-4 text-left"
              >
                Expire date
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-2 md:px-6 py-4 text-left"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#EEE3FF]">
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                1
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Sopify
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                27th June 2023
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Active
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#EEE3FF]">
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-base font-medium ">
                2
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Netflix
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                12th July 2023
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Active
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#EEE3FF]">
              <td className="px-2 md:px-6 py-4 whitespace-nowrap text-base font-medium ">
                3
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Netflix
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                12th July 2023
              </td>
              <td className="text-base text-gray-900 font-normal px-2 md:px-6 py-4 whitespace-nowrap">
                Active
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
