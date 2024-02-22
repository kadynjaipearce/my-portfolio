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

export interface BlogData {
  id: string;
  slug: string;
  img: string;
  title: string;
  body: string;
  category: string;
  githubUrl: string | null;
  websiteUrl: string | null;
  techStack: string[];
  createdAt: Date;
}

export interface BlogpostProps {
  blog: BlogData[];
  type: string;
}

export interface ProjectProps {
  project: BlogData[];
  type: string;
}

export type CategoryName =
  | "Software Engineering"
  | "Web Development"
  | "Blockchain Development"
  | "Other";

export type TechName =
  | "React"
  | "C++"
  | "C"
  | "Visual Studio"
  | "LLVM"
  | "NodeJs"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "Nextjs"
  | "Solidity"
  | "Rust"
  | "Expressjs"
  | "OpenCV"
  | "Web3js"
  | "Tailwindcss"
  | "Nginx"
  | "Bash"
  | "Linux"
  | "Raspberry Pi"
  | "MongoDB"
  | "Visual Studio Code";
