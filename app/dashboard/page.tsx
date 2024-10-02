import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import { list } from "aws-amplify/storage/server";
import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import Container from "@/components/Container";
import { cookies } from "next/headers";
import "@aws-amplify/ui-react/styles.css";
import { DefaultFileUploaderExample } from "@/components/FileUploader";
import { redirect } from "next/navigation";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import { CategoryName } from "@/utils/types";
import { revalidatePath } from "next/cache";

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

    console.log(rawFormData);

    const { data: newProject, errors } =
      await cookiesClient.models.Project.create({
        title: rawFormData.title,
        img: rawFormData.image,
        body: rawFormData.body,
        category: rawFormData.category,
        githubUrl: rawFormData.githubUrl,
        externalUrl: rawFormData.externalUrl,
      });

    console.log(errors);
  }

  return (
    <Container>
      <div className="col-span-2 flex min-h-screen flex-col">
        <div className="fixed w-full max-w-xl rounded-lg">
          <DefaultFileUploaderExample />
          <form
            className="mt-6 max-w-md space-y-6"
            action={handleCreateProject}
          >
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
        <div className="col-span-2">
          Projects
          {projectData &&
            projectData.map((i) => {
              return <div key={i.id}>{i.title}</div>;
            })}
          Images
          {images.items &&
            images.items.map((item) => {
              return <div key={item.path}>{item.path}</div>;
            })}
          Media
          {media.items &&
            media.items.map((item) => {
              return <div key={item.path}>{item.path}</div>;
            })}
        </div>
      </div>
    </Container>
  );
}
