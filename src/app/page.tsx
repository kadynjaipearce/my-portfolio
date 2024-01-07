import Switcher from "@/components/Switcher";
import Image from "next/image";

let res = async () => {
  let response = await fetch("http://localhost:3000/api/download", {
    method: "GET",
  });
  return response;
};

export default function Home() {
  return (
    <main className="">
      <div className="flex space-x-5">
        <div className="bg-[#2a3036] w-2/3 rounded-xl p-64 mt-10">
          <h1 className="absolutes text-white">Hello</h1>
        </div>
        <Switcher></Switcher>
      </div>
      <div>
        <div className="bg-gray-200 p-16 rounded-xl mt-5"></div>
      </div>

      <div>
        <div className="bg-blue-200 p-80 mt-5 rounded-xl"></div>
      </div>

      <div>
        <div className="bg-green-200 p-20 mt-5 rounded-xl"></div>
      </div>
    </main>
  );
}
