import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

export default function Education() {
  return (
    <Container mobileFull={true}>
      <div className="mt-40">
        <div className="flex py-14 lg:py-24 md:flex-row flex-col items-center bg-neutral-50 lg:rounded-3xl p-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mt-4 lg:mt-0">
            <Image
              alt="Edith Cowan University Svg"
              src="/ecu.svg"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 mt-6 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="w-full flex-col xl:flex xl:flex-row justify-between items-center">
              <div className="">
                <h1 className="sm:text-4xl text-lg font-bold text-[#8885e7] flex-grow">
                  Edith Cowan University{" "}
                  <br className="hidden lg:inline-block" />
                  Bachelor of Computer Science
                </h1>
                <h3 className="font-semibold my-2 text-sm">
                  Major: Software Engineering
                </h3>
              </div>

              <h1 className="lg:-mt-14 mb-4 inline-flex items-center rounded-full border-2 border-gray-200 bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-600 shadow-sm">
                July 2024 - 2027
              </h1>
            </div>
            <p className="mb-8 leading-relaxed text-[#00172a] text-es">
              In July 2024, I will embark on my university journey, which will
              deepen my understanding of complex software engineering concepts
              and provide me with practical experience in collaborative project
              development. Leveraging my existing programming expertise, I will
              be well-equipped to take on a leadership role among my peers.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
