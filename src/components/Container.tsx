import React, { ReactNode } from "react";
import { ContainerProps } from "@/lib/types";

const Container: React.FC<ContainerProps> = ({ children, mobileFull }) => {
  return (
    <div className={`${mobileFull ? "px-0" : "px-6"} mx-auto containert`}>
      {children}
    </div>
  );
};

export default Container;
