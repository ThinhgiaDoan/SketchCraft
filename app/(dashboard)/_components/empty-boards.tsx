"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

function EmptyBoards() {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty favorites" />

      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p>Start by creating a board for your organization</p>
      <div className="mt-6">
        <Button disabled={pending} size={"lg"} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
