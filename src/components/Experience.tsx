import React from "react";
import Container from "./Container";
import prisma from "@/lib/utils";
import Image from "next/image";

export default async function Experience() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div className="py-20 bg-slate-100">
      <Container>
        <div className="">
          <div className="flex justify-between">
            <div className="text-5xl font-bold inter">
              Look At My <br />{" "}
              <span className="text-transparent inter bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text">
                Projects.
              </span>
            </div>
            <div className="text-right">
              <h3>
                Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit.{" "}
                <br />
                Officia natus maiores, dolor <br /> molestias eius ab minima et
                suscipit nesciunt temporibus?
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

/**{!projects ? (
            <div>LOADING</div>
          ) : (
            <div className="flex my-20 space-x-5">
              {projects.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div>
                      <Image
                        src={`/${item.img}.png`}
                        alt={`${item.title}`}
                        width={500}
                        height={500}
                      ></Image>
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                      <h2>{item.body}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          )} */
