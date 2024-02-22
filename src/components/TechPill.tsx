import React from "react";
import { TechName } from "@/lib/types";

const categoryColors: Record<TechName, string> = {
  React: "border-teal-400 bg-teal-200 text-teal-600",
  "C++": "border-blue-300 bg-blue-200 text-blue-600",
  C: "border-purple-300 bg-purple-200 text-purple-600",
  "Visual Studio": "border-indigo-300 bg-indigo-200 text-indigo-600",
  LLVM: "border-gray-300 bg-gray-200 text-gray-600",
  NodeJs: "border-green-300 bg-green-200 text-green-600",
  TypeScript: "border-cyan-300 bg-cyan-200 text-cyan-600",
  JavaScript: "border-yellow-300 bg-yellow-200 text-gray-800",
  Python: "border-amber-300 bg-amber-200 text-amber-600",
  Nextjs: "border-green-600 bg-green-500 text-green-800",
  Solidity: "border-gray-500 bg-gray-400 text-gray-700",
  Rust: "border-orange-500 bg-orange-400 text-orange-700",
  Expressjs: "border-gray-500 bg-gray-400 text-gray-700",
  OpenCV: "border-emerald-300 bg-emerald-200 text-emerald-500",
  Web3js: "border-orange-300 bg-orange-200 text-orange-500",
  Tailwindcss: "border-sky-300 bg-sky-200 text-sky-600",
  Nginx: "border-green-300 bg-green-200 text-green-500",
  Bash: "border-gray-300 bg-gray-200 text-gray-600",
  Linux: "border-gray-300 bg-gray-200 text-gray-600",
  "Raspberry Pi": "border-red-400 bg-red-300 text-red-600",
  MongoDB: "border-green-300 bg-green-200 text-green-500",
  "Visual Studio Code": "border-blue-300 bg-blue-200 text-blue-600",
};

interface CategoryProps {
  tech: TechName;
}

export default function Category({ tech }: CategoryProps) {
  const bgColorClass = categoryColors[tech] || "bg-gray-500 text-gray-800";
  return (
    <div
      className={`inline-flex items-center rounded-full border-2 px-6 py-1 text-sm font-semibold shadow-sm ${bgColorClass} px-10`}
    >
      {tech}
    </div>
  );
}
