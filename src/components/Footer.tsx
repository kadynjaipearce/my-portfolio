import React from "react";

export default function Footer() {
  return (
    <footer className="hidden body-font">
      <div className="container flex flex-col items-center py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start">
          <span>Kadyn-Jai Pearce</span>
        </a>
        <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
