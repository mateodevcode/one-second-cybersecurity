import { enlacesMenuNoticias } from "@/data/enlaces.menu.noticias";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function MenuNavegacion() {
  return (
    <div className="w-[420px] h-screen dark:bg-gray-950 dark:text-white sm:hidden md:flex lg:flex mt-10">
      <div>
        <div className="font-semibold px-5 w-full pt-2 text-xl">💻 Bienvenidos!</div>
        <Link href="/">
          <div className="px-5 w-full text-blue-500 py-1 hover:bg-blue-500/40 rounded-lg">
            One Second CyberSecurity IT
          </div>
        </Link>
        <Link href="/">
          <div className="px-5 w-full py-1 hover:bg-blue-500/40 rounded-lg">
            Acerca de nosotros 📚
          </div>
        </Link>
        <div className="px-5 w-full pt-2 uppercase font-semibold">
          Recursos gratuitos para aprender ciberseguridad
        </div>

        <Link href={enlacesMenuNoticias[2].href} target="_blank">
          <div className="px-5 w-full py-1 hover:bg-blue-500/40 rounded-lg">
            {enlacesMenuNoticias[2].texto}
          </div>
        </Link>
        <Link href={enlacesMenuNoticias[3].href} target="_blank">
          <div className="px-5 w-full py-1 hover:bg-blue-500/40 rounded-lg">
            {enlacesMenuNoticias[3].texto}
          </div>
        </Link>
        <Link href={enlacesMenuNoticias[4].href} target="_blank" className="">
          <div className="px-5 w-full flex flex-row justify-between items-center py-1 hover:bg-blue-500/40 rounded-lg">
            {enlacesMenuNoticias[4].texto}
            <IoIosArrowForward className="dark:text-white hover:bg-blue-500/25" />
          </div>
        </Link>
        <Link href={enlacesMenuNoticias[5].href} target="_blank" className="">
          <div className="px-5 w-full flex flex-row justify-between items-center py-1 hover:bg-blue-500/40 rounded-lg">
            {enlacesMenuNoticias[5].texto}
            <IoIosArrowForward className="dark:text-white hover:bg-blue-500/25" />
          </div>
        </Link>
      </div>
    </div>
  );
}
