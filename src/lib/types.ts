import { ReactNode } from "react";

export interface navItemTypes {
  title: string;
  url: string;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface RequestBody {
  data: {
    name: string;
    email: string;
    message: string;
  };
}
