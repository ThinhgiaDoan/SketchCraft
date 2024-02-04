import Image from "next/image";
import React from "react";

function EmptyFavorites() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        height={140}
        width={140}
        alt="Empty favorites"
      />

      <h2 className="text-2xl font-semibold mt-6">No favorites board!</h2>
      <p>Try favoriting a board</p>
    </div>
  );
}

export default EmptyFavorites;
