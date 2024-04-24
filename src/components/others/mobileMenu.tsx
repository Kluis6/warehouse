import React from "react";

export default function MobileMenu({
  children,
  open,
  action,
}: {
  children: any;
  open: boolean;
  action: any;
}) {
  return (
    <div
      className={`bg-white transition-all absolute h-dvh ease-in-out duration-300 z-40 ${
        open ? "w-screen visible" : "hidden"
      }`}
    >
      <div
        className={`${
          open ? "visible" : "hidden"
        } duration-300 transition-all`}
      >
        {children}
      </div>
    </div>
  );
}
