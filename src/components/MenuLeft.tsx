import React from "react";

interface MenuProps {
  children: React.ReactChildren;
}
/**
 * @returns Menu component
 */
export default function MenuLeft({ children }: MenuProps) {
  return (
    <div className="flex flex-col">
      <div className="h-full opacity-0">{children}</div>
      <div className="fixed z-20 bg-white left-0 h-full">{children}</div>
    </div>
  );
}
