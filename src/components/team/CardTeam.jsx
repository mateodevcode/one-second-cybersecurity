import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const CardTeam = ({ nombre, cargo, cargo2, img, linkedin, github, web }) => {
  return (
    <div className="w-60 h-60 flex flex-col justify-start items-center rounded-lg shadow-sm shadow-black mt-10 bg-white/30">
      <div className="w-20 rounded-full flex flex-row justify-center items-center mt-10">
        <Image
          src={img}
          alt="hero"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-base font-bold mt-2">{nombre}</h3>
        <p className="text-xs text-black">{cargo}</p>
        <p className="text-xs text-black">{cargo2}</p>
      </div>
      <div className="flex flex-row justify-center items-center mt-2">
        {linkedin && (
          <Link href={linkedin} target="_blank">
            <BsLinkedin className="text-lg text-blue-600 mx-1" />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank">
            <BsGithub className="text-lg text-black mx-1" />
          </Link>
        )}
        {web && (
          <Link href={web} target="_blank">
            <TbWorldWww className="text-xl text-black mx-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardTeam;
