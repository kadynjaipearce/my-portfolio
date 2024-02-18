"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "@/components/Navitem";
import { HiDownload } from "react-icons/hi";
import { navItemTypes } from "@/lib/types";

const navItems: navItemTypes[] = [
  { title: "/Home", url: "/" },
  { title: "/Projects", url: "/projects" },
  { title: "/Learning", url: "/learning" },
  { title: "/Contact-Me", url: "/#contact" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white lg:bg-white/50  lg:backdrop-blur-xl border-b py-0 lg:py-2 ">
      <div className="pl-6 pr-3 lg:pr-6 pt-1 lg:pt-0 mx-auto font-semibold bg-white lg:bg-transparent container-custom">
        <div className="items-center justify-between text-black lg:flex">
          <div className="flex items-center justify-between ml-2 sm:ml-0 lg:my-3">
            <div className="">
              $ {""}
              <Link
                href={"/"}
                className="hover:underline text-[16px] lg:text-[18px] "
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
              } nav-menu-bar lg:hidden z-[1001]`}
            >
              <svg
                className={`bars ${
                  navActive ? "active" : ""
                } p-3 sm:p-2 -mt-1 -mr-2 xs:-mr-0`}
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
            className={`fixed top-0 right-0 bottom-0  ${
              navActive ? "active" : ""
            }  nav-menu z-[1000] lg:static lg:flex lg:space-x-4  lg:w-auto`}
          >
            <div className="mt-16 mr-0 sm:mr-6 lg:mt-0 lg:static lg:flex lg:space-x-4 lg:items-center lg:w-auto">
              {navItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    className={`mx-5 lg:my-0 my-7 lg:mx-0 text-[18px]`}
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
            <Link
              href={"/api/download"}
              className={`mx-4 lg:relative lg:bottom-0 lg:top-0 lg:transform-none p-[3px] inter rounded-md bg-gradient-to-r from-blue-400 to-purple-500 block lg:inline-block lg:link-button`}
            >
              <span className="flex w-full lg:w-auto px-4 lg:px-4 py-[4px] lg:py-[4px] text-white bg-black rounded">
                Download My Resume <HiDownload className="mt-[7px] lg:ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
