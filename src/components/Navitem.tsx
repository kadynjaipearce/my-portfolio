"use client";
import React from "react";
import Link from "next/link";

interface NavItemProps {
  url: string;
  title: string;
  active: boolean;
}

function NavItem({ title, url, active }: NavItemProps) {
  return (
    <Link href={url}>
      /<span className="hover:underline">{title.slice(1)}</span>
    </Link>
  );
}

export default NavItem;
