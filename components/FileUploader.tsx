"use client";
import React, { useState } from "react";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { PiImagesBold, PiFolderBold } from "react-icons/pi";

export function DefaultFileUploaderExample() {
  const [selection, setSelection] = useState("images");

  return (
    <div className="mx-auto mt-8 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        File Uploader
      </h2>
      <div className="relative mb-4 h-12 w-full overflow-hidden rounded-md bg-gray-200">
        <div
          className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-300 ease-in-out"
          style={{
            width: "50%",
            transform: `translateX(${selection === "images" ? "0%" : "100%"})`,
          }}
        ></div>
        <div className="relative z-10 flex h-full w-full">
          <button
            onClick={() => setSelection("images")}
            className={`flex h-full w-1/2 items-center justify-center transition-colors ${
              selection === "images" ? "text-white" : "text-gray-800"
            }`}
          >
            <PiImagesBold className="mr-2 h-5 w-5" />
            Images
          </button>
          <button
            onClick={() => setSelection("media")}
            className={`flex h-full w-1/2 items-center justify-center transition-colors ${
              selection === "media" ? "text-white" : "text-gray-800"
            }`}
          >
            <PiFolderBold className="mr-2 h-5 w-5" />
            Media
          </button>
        </div>
      </div>
      <div className="mt-4">
        <FileUploader
          acceptedFileTypes={["*"]}
          path={`${selection}/`}
          maxFileCount={1}
          isResumable
          className="w-full"
        />
      </div>
    </div>
  );
}
