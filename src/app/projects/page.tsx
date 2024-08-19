import React from "react";
import Container from "@/components/Container";
import ProjectsRender from "@/components/ProjectsRender";
import { getDataFromDB } from "@/lib/query";
import "dotenv/config";

export const metadata = {
  title: "projects",
  description:
    "This is a showcase of my favorite personal coding projects, each a unique exploration of technology and curiosity. From initial concept to final code, see how passion drives my development journey.",
};

export default async function Page() {
  const projects = await getDataFromDB();
  return (
    <Container mobileFull={true}>
      <div className="mb-10 min-h-screen lg:mt-10">
        <div className="flex w-full justify-between py-16 lg:rounded-xl">
          <div className="space-y-6 p-6">
            <h1 className="text-4xl font-bold text-gray-950 lg:text-7xl">
              🏗️ - My Personal Projects
            </h1>
            <h2 className="max-w-5xl text-gray-950">
              This is a showcase of my favorite personal coding projects, each a
              unique exploration of technology and curiosity. From initial
              concept to final code, see how passion drives my development
              journey.
            </h2>
          </div>
        </div>
        <ProjectsRender project={projects} type="projects"></ProjectsRender>
      </div>
    </Container>
  );
}
