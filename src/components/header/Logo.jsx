import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col justify-center items-start uppercase text-white">
        <p className="font-semibold lg:text-xl md:text-xl sm:text-base font-serif">one</p>
        <p className="font-semibold font-serif lg:text-base md:text-base sm:text-sm">second</p>
      </div>
    </Link>
  );
};

export default Logo;
