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

export interface ProjectData {
  img: string;
  externalUrl: string | null;
  category: string;
  slug: string;
  id: string;
  githubUrl: string | null;
  title: string;
  body: string;
}

export interface ProjectProps {
  project: ProjectData[];
  type: string;
}

export type CategoryName =
  | "Software Engineering"
  | "Web Development"
  | "Blockchain Development"
  | "Other";
