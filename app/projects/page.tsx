import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import ProjectsRender from "@/components/ProjectsRender";
import { type Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { cookiesClient } from "@/utils/amplify-utils";

const client = generateClient<Schema>();

export default async function Page() {
  const { data: projects, errors } = await cookiesClient.models.Project.list({
    limit: 10000,
  });

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
        <ProjectsRender project={projects}></ProjectsRender>
      </div>
    </Container>
  );
}
