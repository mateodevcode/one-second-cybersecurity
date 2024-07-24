import React from "react";
import EnlaceNavbar from "@/components/header/EnlaceNavbar";
import SwitchDark from "@/components/header/SwitchDark";
import { FiMenu } from "react-icons/fi";
import { Tooltip } from "@chakra-ui/react";
import Logo from "../header/Logo";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex flex-row justify-around items-center bg-blue-700/90 dark:bg-blue-700/50 text-white h-16">
        <div className="lg:w-80 md:w-80 sm:w-40">
          <Logo />
        </div>
      
        <div className="lg:w-80 md:w-80 sm:w-60 flex flex-row justify-center items-center">
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
            <FiMenu className="text-2xl cursor-pointer" />
          </Tooltip>
        </div>
      </nav>
    </header>
  );
};

export default Header;