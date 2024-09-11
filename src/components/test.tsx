import React from "react";
import { data, type Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();

async function Test() {
  const { data: projects } = await client.models.Project.list({
    limit: 10,
  });

  console.log(projects);

  const { data: project } = await client.models.Project.get({ id: "test" });

  return (
    <div>
      {projects.length}
      {projects.map((item) => {
        return (
          <div key={item.id} className="text-black">
            {item.id} {item.body}
          </div>
        );
      })}
      hi
      {project?.body}
    </div>
  );
}

export default Test;
