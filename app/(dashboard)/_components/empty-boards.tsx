import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function EmptyBoards() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty favorites" />

      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p>Start by creating a board for your organization</p>
      <div className="mt-6">
        <Button size={"lg"}>Create board</Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
