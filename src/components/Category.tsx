import React from "react";

// Define a type for the category prop that includes all possible category keys
type CategoryName =
  | "Software Engineering"
  | "Web Development"
  | "Blockchain Development"
  | "Other"
  | "entertainment";

// Define a mapping from category names to Tailwind background color classes
const categoryColors: Record<CategoryName, string> = {
  "Software Engineering": "border-blue-200 bg-blue-200 text-blue-600",
  "Web Development": "border-green-200 bg-green-200 text-green-600",
  "Blockchain Development": "border-pink-200 bg-pink-200 text-pink-600",
  Other: "bg-red-500",
  entertainment: "bg-purple-500",
  // Add more categories and their corresponding colors here
};

interface CategoryProps {
  category: CategoryName;
}

export default function Category({ category }: CategoryProps) {
  // Get the color class from the mapping based on the category, default to a neutral color
  const bgColorClass = categoryColors[category] || "bg-gray-500";

  return (
    <div
      className={`inline-flex items-center rounded-full border-2 px-2 py-1 text-sm font-semibold shadow-sm ${bgColorClass}`}
    >
      {category}
    </div>
  );
}
