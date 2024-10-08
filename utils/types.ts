import { ReactNode } from "react";

export interface navItemTypes {
  title: string;
  url: string;
}

export interface ContainerProps {
  children: ReactNode;
  mobileFull?: boolean;
}

export interface RequestBody {
  data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

export interface ErrorData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

export type CategoryName =
  | "Software_Engineering"
  | "Web_Development"
  | "Blockchain_Development"
  | "Other";
