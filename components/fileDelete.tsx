"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function FileDelete({ filePath }: { filePath: string }) {
  const client = generateClient<Schema>();
  const router = useRouter();

  async function handleDeleteFile(filePath: string) {
    try {
      await remove({
        path: filePath,
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button onClick={() => handleDeleteFile(filePath)}>
      <RxCross2 />
    </button>
  );
}
