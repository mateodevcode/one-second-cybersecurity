  import Image from "next/image";
  import React from "react";
  import logo from "@/img/one-second-.png";
  import Link from "next/link";

  const HeaderTop = () => {
    return (
      <div className="w-full bg-fuchsia-500/15 lg:h-40 md:h-40 sm:h-20 flex flex-row lg:justify-between md:justify-between sm:justify-center items-center">
        <div>
          <p className="lg:mx-40 md:mx-40 sm:mx-5 lg:text-2xl md:text-2xl sm:text-base dark:text-white hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer font-semibold">
            Articulos de desarrollo de software
          </p>
        </div>
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="One Second CyberSecurity"
              width={150}
              height={150}
              className="lg:mx-40 md:mx-40 sm:mx-5 sm:w-20 lg:w-40 md:w-40"
            />
          </Link>
        </div>
      </div>
    );
  };

  export default HeaderTop;
