"use client";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

export const DefaultFileUploaderExample = () => {
  return (
    <FileUploader
      acceptedFileTypes={["image/*"]}
      path="images/"
      maxFileCount={1}
      isResumable
    />
  );
};
