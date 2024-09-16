import Container from "@/components/Container";
import ErrorComponent from "@/components/ErrorComponent";
import ProjectsRender from "@/components/ProjectsRender";
import { cookiesClient } from "@/utils/amplify-utils";

export default async function Page() {
  let projects = null;
  try {
    const { data: projectData, errors } =
      await cookiesClient.models.Project.list({
        limit: 100,
      });

    if (errors) {
      throw new Error(errors.toString());
    }

    projects = projectData;
  } catch (error) {
    return <ErrorComponent error={`Unexpected Error Occurred: ${error}`} />;
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
        {projects && projects?.length == 0 ? (
          <ErrorComponent error="No projects found at the moment. Please check back later!" />
        ) : (
          projects && <ProjectsRender project={projects} />
        )}
      </div>
    </Container>
  );
}
