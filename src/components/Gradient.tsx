import React from "react";

export default function Gradient({ height }: { height: string }) {
  return (
    <div
      className={`w-full px-0 mx-0 bg-black h-36 md:h-${height} bg-gradient-to-r from-[#3EA7C9] to-[#CA11E8]`}
    ></div>
  );
}
