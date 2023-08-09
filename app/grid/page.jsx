import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-5">
      <div className="row-span-1 col-span-2  bg-green-500"></div>
      <div className="row-span-2 col-span-1  bg-yellow-400"></div>
      <div className="row-span-1 col-span-2  bg-red-400"></div>
      <div className="h-44 col-span-3  bg-orange-400"></div>
    </div>
  );
};

export default Page;
