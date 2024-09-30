import Category from "@/components/Category";
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import { RiGithubLine, RiExternalLinkLine, RiCloseFill } from "react-icons/ri";
import { DefaultFileUploaderExample } from "@/components/FileUploader";
import { list, remove } from "aws-amplify/storage/server";
import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import Container from "@/components/Container";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// Server action for handling form submission
async function handleCreateProject(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const externalUrl = formData.get("externalUrl")?.toString() || "";
  const githubUrl = formData.get("githubUrl")?.toString() || "";

  // Perform actions here like saving to the database or API
  console.log("Project created:", {
    title,
    description,
    externalUrl,
    githubUrl,
  });

  // Optionally revalidate the page to fetch new data
  revalidatePath("/");
}

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

  async function handleDeleteFile(path: string) {
    "use server";
    try {
      await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation(contextSpec) {
          remove(contextSpec, {
            path: path,
          });
        },
      });
    } catch (error) {
      return;
    }
  }

  return (
    <Container>
      <div className="">{user?.signInDetails?.loginId}</div>
    </Container>
  );
}
