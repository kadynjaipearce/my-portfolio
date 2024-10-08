import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import { list, remove } from "aws-amplify/storage/server";
import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import Container from "@/components/Container";
import { cookies } from "next/headers";
import "@aws-amplify/ui-react/styles.css";
import { DefaultFileUploaderExample } from "@/components/FileUploader";
import { CategoryName } from "@/utils/types";
import { PiImagesBold, PiFolderBold, PiProjectorScreen } from "react-icons/pi";
import FileDelete from "@/components/FileDelete";
import ProjectDelete from "@/components/ProjectDelete";

export default async function Page() {
  const user = await AuthGetCurrentUserServer();

  const images = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) =>
      list(contextSpec, {
        path: "images/",
        options: {
          listAll: true,
        },
      }),
  });

  const media = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) =>
      list(contextSpec, {
        path: "media/",
        options: {
          listAll: true,
        },
      }),
  });

  const { data: projectData, errors } = await cookiesClient.models.Project.list(
    {
      limit: 100,
    },
  );

  async function handleCreateProject(formData: FormData) {
    "use server";

    const rawFormData = {
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      body: formData.get("body") as string,
      category: formData.get("category") as CategoryName,
      githubUrl: formData.get("githubUrl") as string,
      externalUrl: formData.get("externalUrl") as string,
    };

    const { data: newProject, errors } =
      await cookiesClient.models.Project.create({
        title: rawFormData.title,
        img: rawFormData.image,
        body: rawFormData.body,
        category: rawFormData.category,
        githubUrl: rawFormData.githubUrl,
        externalUrl: rawFormData.externalUrl,
      });

    console.error(errors);
  }

  if (user?.signInDetails?.loginId != "kadynjaipearce@gmail.com") return;

  return (
    <Container>
      <div className="mb-10 flex min-h-screen flex-col gap-5 md:flex-row">
        <div className="w-full space-y-6 md:max-w-lg">
          <DefaultFileUploaderExample />
          <form className="mt-6 space-y-6" action={handleCreateProject}>
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="w-full rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            />

            <input
              name="image"
              type="text"
              placeholder="Image path"
              className="w-full rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            />

            <textarea
              name="body"
              placeholder="Body"
              rows={6}
              className="w-full resize-none rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            ></textarea>

            <select
              id="category"
              name="category"
              className="w-full rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <option value="Web_Development">Web Development</option>
              <option value="Blockchain_Development">
                Blockchain Development
              </option>
              <option value="Software_Engineering">Software Engineering</option>
              <option value="Other">Other</option>
            </select>

            <input
              name="githubUrl"
              type="text"
              placeholder="Github URL"
              className="w-full rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            />

            <input
              name="externalUrl"
              type="text"
              placeholder="External URL"
              className="w-full rounded-md bg-neutral-100 px-4 py-3 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-3 text-sm font-semibold text-white duration-200 ease-in-out hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-900 disabled:cursor-not-allowed"
            >
              Create Project
            </button>
          </form>
        </div>

        <div className="my-20 ml-auto mt-8 w-full max-w-4xl overflow-y-auto">
          <div className="space-y-6">
            {projectData &&
              projectData.map((i) => {
                return (
                  <div
                    key={i.id}
                    className="flex  flex-row justify-between rounded-md bg-neutral-100 p-2 shadow-sm"
                  >
                    <div className="flex items-center">
                      <PiProjectorScreen className="m-2 text-xl text-neutral-900" />
                      <span className="ml-2">{i.title}</span>
                    </div>
                    <ProjectDelete projectId={i.id} />
                  </div>
                );
              })}

            {images.items &&
              images.items.map((item) => {
                return (
                  <div
                    key={item.path}
                    className="flex flex-row justify-between rounded-md bg-neutral-100 p-2 shadow-sm"
                  >
                    <div className="flex items-center">
                      <PiImagesBold className="m-2 text-xl text-neutral-900" />
                      <span className="ml-2">{item.path}</span>
                    </div>
                    <FileDelete filePath={item.path} />
                  </div>
                );
              })}

            {media.items &&
              media.items.map((item) => {
                return (
                  <div
                    key={item.path}
                    className="flex flex-row justify-between rounded-md bg-neutral-100 p-2 shadow-sm"
                  >
                    <div className="flex items-center">
                      <PiFolderBold className="m-2 text-xl text-neutral-900" />
                      <span className="ml-2">{item.path}</span>
                    </div>
                    <FileDelete filePath={item.path} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Container>
  );
}
