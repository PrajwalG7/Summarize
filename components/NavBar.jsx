import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-center bg-black p-4  ">
      <div>
        <Link href="/">
          <span className=" text-3xl cursor-pointer text-white font-bold font-serif">
            Summarize
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
