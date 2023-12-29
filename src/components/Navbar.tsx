"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./Navitem";

interface navItemTypes {
  title: string;
  url: string;
}

const navItems: navItemTypes[] = [
  { title: "/About", url: "/about" },
  { title: "/Projects", url: "/projects" },
  { title: "/Learning", url: "/learning" },
  { title: "/Contact-Me", url: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const defaultActiveIdx = navItems.findIndex((item) => item.url === pathname);
  const [activeIdx, setActiveIdx] = useState<number | null>(
    defaultActiveIdx !== -1 ? defaultActiveIdx : null
  );
  const [navActive, setNavActive] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  return (
    <header className="lg:px-60 md:px-10 mt-3">
      <div className="bg-white text-black z-[1000] items-center justify-between w-full px-5 md:flex  bg-primary mb-1 ">
        <div className="flex items-center justify-between w-full md:w-auto my-3">
          <div
            onClick={() => {
              setActiveIdx(null);
              setNavActive(false);
            }}
          >
            <Link href={"/"}>$ kadynpearce.dev</Link>
          </div>

          <div
            onClick={() => {
              if (navActive) {
                setClosing(true);
                setNavActive(false);
                setTimeout(() => {
                  setClosing(false);
                }, 300); // The time it takes for the animations to complete
              } else {
                setNavActive(true);
              }
            }}
            className={`${navActive ? "active" : ""} ${
              closing ? "reverse" : ""
            } nav-menu-bar md:hidden z-[1001]`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className={`fixed top-[49px] right-0 bottom-0  ${
            navActive ? "active" : ""
          }  nav-menu  bg-primary z-[1000] md:static md:flex md:space-x-4 md:items-center md:w-auto`}
        >
          {navItems.map((item, idx) => {
            return (
              <div key={item.title} className={`mx-10 md:my-0 my-7 md:mx-0`}>
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                >
                  <NavItem active={activeIdx === idx} {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-black py-[1px]"></div>
    </header>
  );
}
