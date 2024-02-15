import React from "react";
import prisma from "../../lib/utils";
import Container from "@/components/Container";
import Blogcard from "@/components/Blogcard";

export const metadata = {
  title: "projects",
  description: "Generated by create next app",
};

export default async function Page() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <Container>
      <div className="my-20 min-h-screen">
        <div className="justify-between bg-neutral-100 w-full py-16 rounded-xl">
          <div className="space-y-6 p-6">
            <h1 className="lg:text-7xl font-bold text-4xl">Learning</h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, provident.
            </h2>
          </div>
        </div>

        <Blogcard data={projects} type="projects" />
      </div>
    </Container>
  );
}
