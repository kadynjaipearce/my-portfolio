import { AuthGetCurrentUserServer } from "@/utils/amplify-utils";
import { list, remove } from "aws-amplify/storage/server";
import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import Container from "@/components/Container";
import { cookies } from "next/headers";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { DefaultFileUploaderExample } from "@/components/FileUploader";

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
      <DefaultFileUploaderExample />
      <div className="">{user?.signInDetails?.loginId}</div>
    </Container>
  );
}
