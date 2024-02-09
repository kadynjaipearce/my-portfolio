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

export interface BlogData {
  id: string;
  slug: string;
  img: string;
  title: string;
  body: string;
  category: string;
  githubUrl: string;
  websiteUrl: string;
  createdAt: Date;
}

export interface BlogpostProps {
  data: BlogData[];
  type: string;
}
