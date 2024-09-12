import React from "react";

function NavItem({ title }: { title: string }) {
  return (
    <div>
      /<span className="hover:underline">{title.slice(1)}</span>
    </div>
  );
}

export default NavItem;
