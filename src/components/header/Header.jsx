import React from "react";
import EnlaceNavbar from "./EnlaceNavbar";
import SwitchDark from "./SwitchDark";
import { FiMenu } from "react-icons/fi";
import { enlaces } from "@/data/enalces.header";
import { Tooltip } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";


const Header = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center sticky top-0 dark:bg-black/90 dark:text-white bg-blue-700 text-white">
      <nav className="w-full flex flex-row justify-between items-center">
        <div className="lg:w-80 md:w-80 sm:w-32 flex flex-row justify-center items-center">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image src={logo} alt="logo" width={100} height={100} className="w-12" />
          </Link>
          <Logo />
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
        <div className="lg:w-80 md:w-80 sm:w-40 flex flex-row justify-center items-center">
          <ul>
            <EnlaceNavbar nombre={"Log in"} Url={"/login"} />
          </ul>
          <SwitchDark />
          <Tooltip
            label="Menu"
            fontSize="md"
            color={"white"}
            bg={"rebeccapurple"}
            px={5}

          >
            <FiMenu className="text-2xl cursor-pointer lg:hidden md:hidden sm:block" />
          </Tooltip>
        </div>
      </nav>
    </div>
  );
};

export default Header;
