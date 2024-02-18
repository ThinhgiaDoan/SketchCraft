"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { User } from "@liveblocks/client";

const MAX_SHOWN_USERS = 2;

function Participants() {
  const users = useOthers();
  const currentUser: any = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  console.log("currentUser", currentUser);

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }: any) => {
        return (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "A"}
          />
        );
      })}

      {currentUser && (
        <UserAvatar
          src={currentUser.info?.picture}
          name={`${currentUser.info?.name} (You)`}
          fallback={currentUser.info?.name?.[0]}
        />
      )}
    </div>
  );
}

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
