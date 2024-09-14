"use client";
import React, { useEffect, useState } from "react";
import { data, type Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

export const client = generateClient<Schema>();

function Test() {
  const [projects, setProjects] = useState<Schema["Project"]["type"][]>([]);

  const fetchProjects = async () => {
    const { data: items, errors } = await client.models.Project.list({
      limit: 10000,
    });
    setProjects(items);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async () => {
    const { errors, data: newProject } = await client.models.Project.create({
      title: "test",
      img: "rhino.webp",
      body: "In 2021, amid the NFT craze, I launched Ridiculous Rhinos, my own NFT collection crafted with Solidity. I also developed a dedicated website utilizing Web3.js, enabling enthusiasts to mint these unique digital assets directly. Join our journey into the world of blockchain art.",
      category: "Blockchain_Development",
      githubUrl: "https://github.com/kadynjaipearce/rhinos-nft-source",
      externalUrl: "https://github.com/kadynjaipearce/rhinos-nft-source",
    });
    console.log(errors);
    fetchProjects();
  };

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
            {item.title} {"   "} {item.body}
          </div>
        );
      })}
    </div>
  );
}

export default Test;
