import React from "react";

interface MenuProps {
  children: React.ReactChildren;
}
/**
 * @returns Menu component
 */
export default function MenuTop({ children }: MenuProps) {
  return (
    <div>
      <div className="w-full opacity-0">{children}</div>
      <div className="fixed z-20 bg-white top-0 w-full">{children}</div>
    </div>
  );
}
