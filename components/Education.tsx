import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

export default function Education(): React.ReactNode {
  return (
    <Container mobileFull={true}>
      <div className="mt-40">
        <div className="flex flex-col items-center bg-neutral-50 p-10 py-14 md:flex-row lg:rounded-3xl lg:py-24">
          <div className="mt-4 md:w-1/2 lg:mt-0 lg:w-full lg:max-w-lg">
            <Image
              alt="Edith Cowan University Svg"
              src="/ecu.svg"
              width={250}
              height={250}
            />
          </div>
          <div className="mt-6 flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left lg:flex-grow">
            <div className="w-full flex-col items-center justify-between xl:flex xl:flex-row">
              <div className="">
                <h1 className="flex-grow text-lg font-bold text-[#8885e7] sm:text-4xl">
                  Edith Cowan University{" "}
                  <br className="hidden lg:inline-block" />
                  Bachelor of Computer Science
                </h1>
                <h3 className="my-2 text-sm font-semibold">
                  Major: Software Engineering
                </h3>
              </div>

              <h1 className="mb-4 inline-flex items-center rounded-full border-2 border-gray-200 bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-600 shadow-sm lg:-mt-14">
                July 2024 - 2027
              </h1>
            </div>
            <p className="text-es mb-8 leading-relaxed text-[#00172a]">
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
