import React from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function page() {
  const createProject = async () => {
    await client.models.Project.create({
      title: "Test",
      img: "Test",
      body: "Test",
      category: "Test",
      githubUrl: "Test",
      externalUrl: "Test",
    });
  };
  return <div>page</div>;
}
