import React from "react";
import { CategoryName } from "@/lib/types";

const categoryColors: Record<CategoryName, string> = {
  "Software Engineering": "border-blue-200 bg-blue-200 text-blue-600",
  "Web Development": "border-green-200 bg-green-200 text-green-600",
  "Blockchain Development": "border-pink-200 bg-pink-200 text-pink-600",
};

interface CategoryProps {
  category: CategoryName;
}

export default function Category({ category }: CategoryProps) {
  const bgColorClass = categoryColors[category] || "bg-gray-500";
  return (
    <div
      className={`inline-flex items-center rounded-full border-2 px-2 py-1 text-sm font-semibold shadow-sm ${bgColorClass}`}
    >
      {category}
    </div>
  );
}
