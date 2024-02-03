import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Education() {
  return (
    <Container>
      <div className="my-40">
        <div className="flex space-x-10">
          <Image src={"/ecu.svg"} alt="" width={250} height={250} />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-[#8885e7]">
              Edith Cowan University
            </h1>
            <h3 className="text-[#00172a] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Sunt odio quidem, molestias voluptatem impedit tenetur sequi!{" "}
              <br />
              Doloribus sapiente odio minima.
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
}
