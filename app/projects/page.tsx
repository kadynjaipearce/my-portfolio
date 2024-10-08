import Container from "@/components/Container";
import ErrorComponent from "@/components/ErrorComponent";
import ProjectsRender from "@/components/ProjectsRender";
import { getUrl } from "aws-amplify/storage/server";
import { cookies } from "next/headers";
import { Schema } from "@/amplify/data/resource";
import {
  cookiesClient,
  runWithAmplifyServerContext,
} from "@/utils/amplify-utils";
import React from "react";

export default async function Page() {
  async function getSignedUrl(imagePath: string) {
    try {
      const { url } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) =>
          getUrl(contextSpec, {
            path: `images/${imagePath}`,
          }),
      });
      return url;
    } catch (error) {
      console.error(
        `Failed to fetch signed URL for image: ${imagePath}`,
        error,
      );
      throw new Error("Unable to retrieve image URL");
    }
  }
  let projects: Schema["Project"]["type"][] | null = null;

  try {
    const { data: projectData } = await cookiesClient.models.Project.list({
      limit: 100,
      authMode: "apiKey",
    });

    if (!projectData || projectData.length === 0) {
      console.warn("No projects found");
      return (
        <ErrorComponent error="No projects found at the moment. Please check back later!" />
      );
    }

    const projectsWithUrls = await Promise.all(
      projectData.map(async (project: any) => {
        try {
          const signedImgUrl = await getSignedUrl(project.img);
          return {
            id: project.id,
            title: project.title,
            img: signedImgUrl.toString(),
            body: project.body,
            category: project.category,
            githubUrl: project.githubUrl,
            externalUrl: project.externalUrl,
          } as Schema["Project"]["type"];
        } catch (error) {
          console.error(
            `Failed to fetch signed URL for project: ${project.id}`,
            error,
          );
          return null;
        }
      }),
    );

    projects = projectsWithUrls.filter(
      (project): project is Schema["Project"]["type"] => project !== null,
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return (
      <ErrorComponent error="An error occurred while fetching project data. Please try again later." />
    );
  }
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

        {projects && projects.length === 0 ? (
          <ErrorComponent error="No projects found at the moment. Please check back later!" />
        ) : (
          projects && <ProjectsRender project={projects} />
        )}
      </div>
    </Container>
  );
}
