"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "@/components/Navitem";
import { navItemTypes } from "@/lib/types";
import DownloadResume from "./DownloadResume";

const navItems: navItemTypes[] = [
  { title: "/Home", url: "/" },
  { title: "/Projects", url: "/projects" },
  { title: "/Contact-Me", url: "/#contact" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white  py-0 lg:bg-white/50 lg:py-2 lg:backdrop-blur-xl ">
      <div className="container-custom mx-auto bg-white pl-6 pr-3 pt-1 font-semibold lg:bg-transparent lg:pr-6 lg:pt-0">
        <div className="items-center justify-between text-black lg:flex">
          <div className="ml-2 flex items-center justify-between sm:ml-0 lg:my-3">
            <div className="">
              $ {""}
              <Link
                href={"/"}
                className="text-[16px] hover:underline lg:text-[18px] "
                onClick={() => {
                  setNavActive(false);
                }}
              >
                kadynpearce.dev
              </Link>
            </div>

            <div
              onClick={() => {
                navActive ? setNavActive(false) : setNavActive(true);
              }}
              className={`${
                navActive ? "active" : ""
              } nav-menu-bar z-[1001] lg:hidden`}
            >
              <svg
                className={`bars ${
                  navActive ? "active" : ""
                } xs:-mr-0 -mr-2 -mt-1 p-3 sm:p-2`}
                viewBox="0 0 100 100"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                ></path>
                <path
                  className="line middle"
                  d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                ></path>
                <path
                  className="line bottom"
                  d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className={`fixed bottom-0 right-0 top-0  ${
              navActive ? "active" : ""
            }  nav-menu z-[1000] lg:static lg:flex lg:w-auto  lg:space-x-4`}
          >
            <div className="mr-0 mt-16 sm:mr-6 lg:static lg:mt-0 lg:flex lg:w-auto lg:items-center lg:space-x-4">
              {navItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`mx-5 my-7 text-[18px] lg:mx-0 lg:my-0`}
                  >
                    <Link
                      href={item.url}
                      onClick={() => {
                        setNavActive(false);
                      }}
                    >
                      <NavItem {...item} />
                    </Link>
                  </div>
                );
              })}
            </div>
            <DownloadResume></DownloadResume>
          </div>
        </div>
      </div>
    </header>
  );
}
