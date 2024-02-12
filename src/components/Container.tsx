import React, { ReactNode } from "react";
import { ContainerProps } from "@/lib/types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-6 mx-auto containert">{children}</div>;
};

export default Container;
