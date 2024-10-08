"use client";

import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import React from "react";

interface FileDeleteProps {
  filePath: string;
}

export default function FileDelete({ filePath }: FileDeleteProps) {
  const client = React.useMemo(() => generateClient<Schema>(), []);
  const router = useRouter();

  const handleDeleteFile = async (filePath: string) => {
    if (!filePath) {
      console.warn("File path is required to delete the file.");
      return;
    }

    try {
      await remove({ path: filePath });
      console.info(`File at path ${filePath} successfully deleted.`);
      router.refresh();
    } catch (error) {
      console.error(`Failed to delete file at path ${filePath}:`, error);
    }
  };

  return (
    <button
      onClick={() => handleDeleteFile(filePath)}
      className="group rounded-md border-2 border-white bg-neutral-900 p-3 transition-colors duration-200 ease-in-out hover:border-neutral-900 hover:bg-white"
      aria-label={`Delete file ${filePath}`}
    >
      <RxCross2 className="text-lg text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900" />
    </button>
  );
}
