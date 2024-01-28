"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./Navitem";
import { HiDownload } from "react-icons/hi";

interface navItemTypes {
  title: string;
  url: string;
}

const navItems: navItemTypes[] = [
  { title: "/About", url: "/about" },
  { title: "/Projects", url: "/projects" },
  { title: "/Learning", url: "/learning" },
  { title: "/Contact-Me", url: "/contact-me" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 pt-1 font-semibold bg-white md:mt-4">
      <div className="items-center justify-between w-full mb-1 text-black dark:bg-black dark:text-white md:flex bg-primary">
        <div className="flex items-center justify-between w-full ml-2 sm:ml-0 md:w-auto md:my-3">
          <div>
            $ {""}
            <Link
              href={"/"}
              className="hover:underline"
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
            } nav-menu-bar md:hidden z-[1001]`}
          >
            <svg
              className={`bars ${navActive ? "active" : ""} p-2 -mt-1`}
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
          }  nav-menu z-[1000] md:static md:flex md:space-x-4  md:w-auto`}
        >
          <div className="mt-16 mr-0 sm:mr-6 md:mt-0 md:static md:flex md:space-x-4 md:items-center md:w-auto">
            {navItems.map((item) => {
              return (
                <div key={item.title} className={`mx-5 md:my-0 my-7 md:mx-0`}>
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
            className="p-[3px] inter rounded bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <span className="flex w-full px-6 py-[6px] text-black bg-white rounded ">
              Download My Resume <HiDownload className="mt-[7px] ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
