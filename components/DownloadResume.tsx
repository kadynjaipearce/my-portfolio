import React, { useEffect, useState } from "react";
import { getUrl } from "aws-amplify/storage";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

function DownloadResume() {
  const [link, setLink] = useState<URL | null>(null);

  const resumeDownloadLink = async () => {
    try {
      const signedUrl = await getUrl({
        path: "media/resume.pdf",
        options: {
          validateObjectExistence: true,
        },
      });
      setLink(signedUrl.url);
    } catch (error) {
      console.error("Error fetching signed URL:", error);
    }
  };

  useEffect(() => {
    resumeDownloadLink();
  }, []);

  return (
    <Link
      href={link || "/"}
      className={`inter mx-4 flex rounded-md bg-gradient-to-r from-blue-400 to-purple-500 p-[3px] ${
        !link ? "cursor-not-allowed opacity-50" : ""
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex w-full justify-between rounded bg-black px-4 py-[10px] text-white lg:py-[4px]">
        {link ? "Download Resume" : "Loading..."}
        <HiDownload className="ml-3 lg:mt-[8px]" />
      </span>
    </Link>
  );
}

export default DownloadResume;
