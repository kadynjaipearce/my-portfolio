import React from "react";
import Container from "./Container";
import prisma from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Experience() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return <Container></Container>;
}
