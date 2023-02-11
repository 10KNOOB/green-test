import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../img/Logo.png";
// import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { pathname } = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const NavLinks = [
    {
      id: 2,
      text: "Token",
      url: "/token",
    },
    {
      id: 3,
      text: "Corporate Offsetting",
      url: "/partner",
    },
    {
      id: 4,
      text: "About us",
      url: "/about",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] duration-300 z-[100] shadow-lg bg-[#fafeff] backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100]"
      }
    >
      <div className="container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <Link
          to="/"
          className="hidden md:flex items-center justify-center gap-3 -mt-2"
        >
          <img src={Logo} className="w-[180px] md:w-[300px] xl:-ml-12" alt="" />
        </Link>
        <div className="w-full flex items-center justify-between md:justify-end">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-12 mt-5">
            <li>
              <NavHashLink smooth to="/#">
                <li className="c-link ml-0 mb-6 w-fit hover:border-b border-gray-700 hover:text-green-600 duration-300">
                  Home
                </li>
              </NavHashLink>
            </li>
            {NavLinks.map((data) => (
              <NavLink to={data.url} key={data.id}>
                <li className="c-link ml-0 mb-6 w-fit hover:border-b border-gray-700 hover:text-green-600 duration-300">
                  {data.text}
                </li>
              </NavLink>
            ))}
            <li>
              <NavHashLink smooth to="/#blog">
                <li className="c-link ml-0 mb-6 w-fit hover:border-b border-gray-700 hover:text-green-600 duration-300">
                  Blog
                </li>
              </NavHashLink>
            </li>
            {/* <li>
              <NavHashLink smooth to="/#team">
                <li className="c-link ml-0 mb-6 w-fit hover:border-b border-gray-700 hover:text-green-600 duration-300">
                  Team
                </li>
              </NavHashLink>
            </li> */}
          </ul>
          <Link to="/signin">
            <button className="mr-4 md:mr-0 md:ml-12">Offset</button>
          </Link>
          <div
            onClick={handleNav}
            className="md:hidden text-black cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#f0f7f8] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                to="/"
                className="flex items-center justify-center gap-3 -mt-2"
              >
                <img src={Logo} className="w-[150px]" alt="" />
              </Link>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <br />
            <hr />
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavLinks.map((data) => (
                <Link to={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                    {data.text}
                  </li>
                </Link>
              ))}
              <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                <NavHashLink smooth to="/#blog">
                  Blog
                </NavHashLink>
              </li>
              {/* 
              <li className="c-link ml-0 mb-6 w-fit text-gray-700 hover:border-b hover:text-cyan-500 duration-300">
                <NavHashLink smooth to="/#team">
                  Team
                </NavHashLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
