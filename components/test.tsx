"use client"
import React, { useEffect, useState } from "react";
import { data, type Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

export const client = generateClient<Schema>();

function Test() {
  const [projects, setProjects] = useState<Schema["Project"]["type"][]>([])
  

  const fetchProjects = async () => {
    const {data: items, errors}= await client.models.Project.list({
      limit: 10000
    })
    setProjects(items)
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  
  const createProject = async () => {
    const {errors, data: newProject} = await client.models.Project.create({
      title: "Skibidi Bitch",
      img: "Test",
      body: "Test",
      category: "Web_Development",
      githubUrl: "Test",
      externalUrl: "Test",
  })
  console.log(errors)
  fetchProjects()
  }


/*
  for (let item of projects) {
    client.models.Project.delete({
      id: item.id
    })
  }
*/
 
  console.log(projects);

  return (
    <div>
      {projects.length}
      <button onClick={createProject}>Click me</button>
      {projects.map((item) => {
        return (
          <div key={item.id} className="text-black">
            {item.id} {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Test;
