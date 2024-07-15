"use client";

import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  const listOfRoutes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Experience",
      route: "/experience",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <>
      <button type="button" onClick={handleModal}>
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="34.4375"
            y2="1.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="8.6875"
            y1="13"
            x2="34.4375"
            y2="13"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="15.875"
            y1="24.5"
            x2="34.4375"
            y2="24.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center flex-row">
          <button
            type="button"
            className=" fixed top-[60px] right-[120px]"
            onClick={handleModal}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="white" />
              <line
                x1="1.41421"
                y1="1"
                x2="23"
                y2="22.5858"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="1"
                y1="22.5858"
                x2="22.5858"
                y2="1"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div className="flex flex-row justify-center items-start font-medium h-[415px]">
            <span className=" text-black text-2xl font-medium -rotate-90 w-[65px] h-[22px] mt-[22px]">
              MENU
            </span>
            <div className="flex flex-col items-start justify-center mr-[252px] gap-[30px] ">
              {listOfRoutes.map((route) => (
                <Link
                  href={route.route}
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  className="text-black font-bold text-[64px] leading-[59px] hover:underline underline-offset-3 decoration-4 transition duration-300 ease-in-out"
                  onClick={handleModal}
                  key={route.name}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-end items-start h-full gap-2">
              <span className="text-black text-2xl font-semibold">
                lukasz.kos98@gmail.com
              </span>
              <span className="text-black text-2xl font-semibold">
                +48 533 980 909
              </span>
              <div className="flex flex-row justify-center items-center gap-3 mt-2">
                <a href="" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
