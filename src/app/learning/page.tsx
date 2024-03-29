import React from "react";
import prisma from "@/lib/utils";
import Container from "@/components/Container";
import BlogRender from "@/components/BlogRender";

export const metadata = {
  title: "projects",
  description:
    "Welcome to my collection of insights and experiences from the world of coding. Here, I share what I&apos;ve learned through curiosity and hands-on projects, tracking my progress for anyone interested in the journey.",
};

export default async function Page() {
  const blogPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      slug: true,
      img: true,
      title: true,
      body: true,
      html: false,
      category: true,
      githubUrl: true,
      websiteUrl: true,
      techStack: true,
      createdAt: true,
    },
  });

  return (
    <Container mobileFull={true}>
      <div className="mb-10 min-h-screen lg:mt-10">
        <div className="flex w-full justify-between py-16 lg:rounded-xl">
          <div className="space-y-6 p-6">
            <h1 className="text-4xl font-bold text-gray-950 lg:text-7xl">
              📝 - My Learning Journey
            </h1>
            <h2 className="max-w-5xl text-gray-950">
              Welcome to my collection of insights and experiences from the
              world of coding. Here, I share what I&apos;ve learned through
              curiosity and hands-on projects, tracking my progress for anyone
              interested in the journey.
            </h2>
          </div>
        </div>

        <BlogRender blog={blogPosts} type="learning" />
      </div>
    </Container>
  );
}
