import React from "react";
import Person from "../img/team/4.png";
import { FiEdit } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="h-[120px]"></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-green-500/20  min-w-[360px] max-w-[700px] rounded-xl flex flex-col items-center">
          <img
            className="w-[100px] -mt-10  border-4 border-green-500 ring-8 ring-white rounded-full"
            src={Person}
            alt=""
          />
          <br />
          <h2 className="uppercase text-2xl flex gap-3">
            john smith{" "}
            <span className="text-green-600">
              <FiEdit />
            </span>
          </h2>
          <p className="flex items-center text-gray-600 gap-4 py-2">
            johnsmith@gmail.com{" "}
            <span className="text-green-600">
              <FiEdit />
            </span>
          </p>
          <br />
          <p className="flex items-center text-gray-600 gap-4 pb-2">
            Wallet No: asdlkfjaoiewfjalksdjfl{" "}
            <span className="text-green-600">
              <FiEdit />
            </span>
          </p>
          <br />
          <br />
          <p className="text-green-600">Reset Password</p>
          <br />
        </div>
        <div className="bg-green-500/20 min-w-[360px] max-w-[700px] rounded-xl flex flex-col p-6">
          <p>1. Lorem ipsum dolor sit amet.</p>
          <input
            type="text"
            className="p-2 rounded-md focus:outline-none min-w-[300px]"
          />
          <br />
          <p>2. Lorem ipsum dolor sit amet.</p>
          <input
            type="text"
            className="p-2 rounded-md focus:outline-none min-w-[300px]"
          />
          <div className="flex gap-4 py-6">
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <br />
          <button className="max-w-[200px] flex justify-center">Submit</button>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-green-500/20 max-w-[600px] mx-auto rounded-xl p-10">
        <table className="w-full min-w-[360px] ">
          <thead className="">
            <tr className="border-b">
              <td className="pb-4">Name</td>
              <td className="pb-4">Email</td>
              <td className="pb-4">Lorem</td>
              <td className="pb-4">Lorem</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-green-500">Name</td>
              <td>Email</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td className="text-green-500">Name</td>
              <td>Email</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td className="text-green-500">Name</td>
              <td>Email</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td className="text-green-500">Name</td>
              <td>Email</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
