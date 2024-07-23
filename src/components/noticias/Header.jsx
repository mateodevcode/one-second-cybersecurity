import React from "react";
import Image from "next/image";
import logo from "@/img/one-second-dark.png";
import Link from "next/link";
import EnlaceNavbar from "@/components/header/EnlaceNavbar";
import SwitchDark from "@/components/header/SwitchDark";
import { FiMenu } from "react-icons/fi";
import { enlaces } from "@/data/enalces.header";
import Search from "./Search";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex flex-row justify-around items-center bg-blue-700/90 dark:bg-blue-700/50 text-white h-16">
        <div className="lg:w-80 md:w-80 sm:w-40">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image src={logo} alt="logo" width={70} height={70} />
            {/* <h1 className="text-3xl font-sans font-semibold">One Second</h1> */}
          </Link>
        </div>
        <div className="lg:flex md:flex sm:hidden">
          <ul className="flex flex-row justify-center items-center">
            {enlaces.map((enlace) => (
              <EnlaceNavbar
                key={enlace.nombre}
                nombre={enlace.nombre}
                Url={enlace.Url}
                especial={enlace.especial}
              />
            ))}
          </ul>
        </div>
        <div className="lg:w-80 md:w-80 sm:w-full flex flex-row justify-center items-center">
          <ul>
            <EnlaceNavbar nombre={"Log in"} Url={"/login"} />
          </ul>
          <Search />
          <SwitchDark />
          <FiMenu className="text-2xl cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;