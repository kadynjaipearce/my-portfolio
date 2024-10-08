"use client";

import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import React from "react";

interface ProjectDeleteProps {
  projectId: string;
}

export default function ProjectDelete({ projectId }: ProjectDeleteProps) {
  const client = React.useMemo(() => generateClient<Schema>(), []);
  const router = useRouter();

  const handleDeleteProject = async (projectId: string) => {
    if (!projectId) {
      console.warn("Project ID is required to delete the project.");
      return;
    }

    try {
      const { data: deletedProject, errors } =
        await client.models.Project.delete(
          { id: projectId },
          { authMode: "userPool" },
        );

      if (errors) {
        console.error("Errors occurred while deleting the project:", errors);
        return;
      }

      console.info(
        `Project with ID ${projectId} successfully deleted.`,
        deletedProject,
      );
      router.refresh();
    } catch (error) {
      console.error(`Failed to delete project with ID ${projectId}:`, error);
    }
  };

  return (
    <button
      onClick={() => handleDeleteProject(projectId)}
      className="rounded-md border-2 border-white bg-neutral-900 p-3"
      aria-label={`Delete project ${projectId}`}
    >
      <RxCross2 className="text-lg text-white" />
    </button>
  );
}
