import Image from "next/image";
import React from "react";

function EmptySearch() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        height={140}
        width={140}
        alt="Empty search"
      />

      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p>Try searching for something else</p>
    </div>
  );
}

export default EmptySearch;
