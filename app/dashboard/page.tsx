import Category from "@/components/Category";
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CategoryName } from "@/utils/types";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import CreateProject from "@/components/CreateProject";
import { DefaultFileUploaderExample } from "@/components/FileUploader";

async function page() {
  const user = await AuthGetCurrentUserServer();
  const { data: projects, errors } = await cookiesClient.models.Project.list({
    limit: 100,
  });

  console.log(errors);

  if (!user) {
    return <div>go away</div>;
  }
  return (
    <div>
      <h1>Welcome {user?.username}</h1>
      <DefaultFileUploaderExample></DefaultFileUploaderExample>
      <CreateProject />

      <div className="-my-8 divide-y-4 divide-gray-100 px-6">
        {projects &&
          projects.map((data) => {
            return (
              <div className="py-10" key={data.id}>
                <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse ">
                  <Link href={`/`} className="max-w-lg">
                    <Image
                      src={`/data.img`}
                      alt=""
                      className="w-full rounded-xl"
                      width={10000}
                      height={10000}
                    />
                  </Link>

                  <div className="max-w-3xl space-y-6 text-left">
                    <div className="flex justify-between">
                      <Category category={data.category as CategoryName} />

                      <div className="flex space-x-4 text-2xl">
                        <Link href={data.externalUrl ?? ""}>
                          <RiExternalLinkLine className="hover:scale-110" />
                        </Link>

                        <Link href={data.githubUrl ?? ""}>
                          <RiGithubLine className="hover:scale-110" />
                        </Link>
                      </div>
                    </div>
                    <h3 className="text-heading text-left text-3xl font-bold text-gray-950 lg:text-4xl">
                      {data.title}
                    </h3>

                    <p className="text-md text-left text-gray-950">
                      {data.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default page;
