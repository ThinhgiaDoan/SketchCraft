"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-500">Search</div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
}

export default Navbar;