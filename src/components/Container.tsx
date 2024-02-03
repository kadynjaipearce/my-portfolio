import React, { ReactNode } from "react";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-4 mx-auto containert">{children}</div>;
};

export default Container;
