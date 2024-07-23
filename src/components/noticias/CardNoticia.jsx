"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import prueba3 from "@/img/prueba-2.png";

const CardNoticia = () => {
  return (
    <div className="dark:text-white flex lg:flex-row md:flex-row sm:flex-col justify-center items-start mb-5 bg-blue-100/90 dark:bg-blue-700/50 lg:max-h-72 md:max-h-72 sm:h-96 md w-full">
      <div className="w-full h-72 sm:flex flex-row justify-center items-center lg:hidden md:hidden">
        {/* Tamaño de la imagen de la card 640x576 */}
        <Image
          src={prueba3}
          alt="logo"
          width={200}
          height={288}
          className="cursor-pointer"
        />
      </div>
      <div className="w-96 flex flex-col justify-between items-start">
        <p className="text-justify px-6 lg:text-xl md:text-xl sm:text-base font-bold mt-5">
          Cyber Insurance Day 2024: Cálculo de pérdidas potenciales y retornos
          de inversión en ciberseguridad
        </p>
        <div className="">
          <p className="px-6 lg:text-lg md:text-lg sm:text-sm text-blue-500 font-semibold">Ciberamenazas</p>
          <p className="px-6 italic lg:text-sm md:text-sm sm:text-xs">
            El pasado miércoles 26 de junio tuvo lugar la V Edición de
            CyberInsurance Day, único evento en España
          </p>
          <div className="flex flex-row justify-start items-center bg-gray-400/50 p-2 rounded-full mx-6 lg:text-sm md:text-sm sm:text-xs cursor-pointer mt-4">
            <div className="flex flex-row justify-center items-center">
              <MdOutlineInsertComment className="mx-1" />
              <span className="mx-1">0</span>
              <span>-</span>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="mx-1">Mateo Lizcano</p>
              <p>-</p>
              <p className="mx-1">Hace una hora</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-72 lg:flex md:flex sm:hidden">
        {/* Tamaño de la imagen de la card 640x576 */}
        <Image
          src={prueba3}
          alt="logo"
          width={320}
          height={288}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CardNoticia;
