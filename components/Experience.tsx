import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Category from "@/components/Category";
import { CategoryName } from "@/utils/types";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import {
  cookiesClient,
  runWithAmplifyServerContext,
} from "@/utils/amplify-utils";
import ErrorComponent from "@/components/ErrorComponent";
import { getUrl } from "aws-amplify/storage/server";
import { cookies } from "next/headers";

export default async function Experience() {
  async function getSignedUrl(imagePath: string) {
    const res = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) =>
        getUrl(contextSpec, {
          path: `images/${imagePath}`,
        }),
    });

    return res.url;
  }
  let projects = null;
  try {
    const { data: projectData } = await cookiesClient.models.Project.list({
      limit: 2,
      authMode: "apiKey",
    });

    if (!projectData || projectData.length === 0) {
      return {
        projects: null,
        error: "No projects found at the moment. Please check back later!",
      };
    }

    // Fetch signed URLs for the images
    const projectsWithUrls = await Promise.all(
      projectData.map(async (project: any) => ({
        ...project,
        signedImgUrl: await getSignedUrl(project.img),
      })),
    );

    projects = projectsWithUrls;
  } catch (error) {
    console.log(error);
  }

  if (projects && projects.length == 0) {
    return (
      <ErrorComponent error="No projects found at the moment. Please check back later!"></ErrorComponent>
    );
  }

  return (
    <Container>
      <div>
        <div className="my-20 space-y-10">
          {projects &&
            projects.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-between gap-6 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <Link href={item.githubUrl} className="max-w-lg">
                  <Image
                    src={`/${item.img}`}
                    alt={`${item.title}`}
                    className="w-full rounded-xl"
                    width={10000}
                    height={10000}
                  />
                </Link>

                <div className="max-w-3xl space-y-6 text-left">
                  <div className="flex justify-between">
                    <Category category={item.category as CategoryName} />
                    <div className="mt-1 flex space-x-4 text-2xl">
                      <Link href={item.externalUrl ?? ""}>
                        <RiExternalLinkLine className="hover:scale-110" />
                      </Link>
                      <Link href={item.githubUrl ?? ""}>
                        <RiGithubLine className="hover:scale-110" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-heading text-3xl font-bold text-gray-950 lg:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-950">{item.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
