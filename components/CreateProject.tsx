import { cookiesClient } from "@/utils/amplify-utils";
import React from "react";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { revalidatePath } from "next/cache";

export default function CreateProject() {
  async function addProject(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    const image = data.get("image") as string;
    const body = data.get("body") as string;
    const category = data.get("category") as string;
    const githubUrl = data.get("githubUrl") as string;
    const externalUrl = data.get("externalUrl") as string;

    try {
      await cookiesClient.models.Project.create({
        title: title,
        img: image,
        body: body,
        category: category as
          | "Web_Development"
          | "Blockchain_Development"
          | "Software_Engineering"
          | "Other",
        githubUrl: githubUrl,
        externalUrl: externalUrl,
      });
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/");
  }
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Create New Project
      </h1>

      <form action={addProject} className="space-y-4">
        <div>
          <label htmlFor="title" className="mb-1 block font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project Title"
          />
        </div>
        <div>
          <label htmlFor="image" className="mb-1 block font-medium">
            Image
          </label>
          <input
            name="image"
            id="image"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project Description"
          />
        </div>
        <div>
          <label htmlFor="body" className="mb-1 block font-medium">
            Description
          </label>
          <textarea
            name="body"
            id="body"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="category" className="mb-1 block font-medium">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Web_Development">Web Development</option>
            <option value="Blockchain_Development">
              Blockchain Development
            </option>
            <option value="Software_Engineering">Software Engineering</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="githubUrl" className="mb-1 block font-medium">
            GitHub URL
          </label>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="GitHub Repository URL"
          />
        </div>
        <div>
          <label htmlFor="externalUrl" className="mb-1 block font-medium">
            External URL
          </label>
          <input
            type="text"
            name="externalUrl"
            id="externalUrl"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Live Project URL"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
