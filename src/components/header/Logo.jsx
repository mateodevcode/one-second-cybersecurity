import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col justify-center items-center uppercase leading-3">
        <p className="logo_one font-semibold text-3xl font-serif">one</p>
        <p className="logo_second font-semibold font-serif">second</p>
      </div>
    </Link>
  );
};

export default Logo;
