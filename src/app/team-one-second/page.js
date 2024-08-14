import Image from "next/image";
import React from "react";
import { team_one_second } from "@/data/data.team";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import Header from "@/components/header/Header";
import CardTeam from "@/components/team/CardTeam";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center fondo_team">
      <Header />
      {/* Nivel 1 */}
      <CardTeam
        nombre={team_one_second[1].nombre}
        cargo={team_one_second[1].cargo}
        cargo2={team_one_second[1].cargo2}
        img={team_one_second[1].img}
        linkedin={team_one_second[1].redes.linkedin}
        github={team_one_second[1].redes.github}
        web={team_one_second[1].redes.web}
      />
      <CardTeam
        nombre={team_one_second[2].nombre}
        cargo={team_one_second[2].cargo}
        cargo2={team_one_second[2].cargo2}
        img={team_one_second[2].img}
        linkedin={team_one_second[2].redes.linkedin}
        github={team_one_second[2].redes.github}
        web={team_one_second[2].redes.web}
      />
        {/* Nivel 2 */}
      <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-around items-center">
        <CardTeam
          nombre={team_one_second[3].nombre}
          cargo={team_one_second[3].cargo}
          cargo2={team_one_second[3].cargo2}
          img={team_one_second[3].img}
          linkedin={team_one_second[3].redes.linkedin}
          github={team_one_second[3].redes.github}
          web={team_one_second[3].redes.web}
        />
        <CardTeam
          nombre={team_one_second[4].nombre}
          cargo={team_one_second[4].cargo}
          cargo2={team_one_second[4].cargo2}
          img={team_one_second[4].img}
          linkedin={team_one_second[4].redes.linkedin}
          github={team_one_second[4].redes.github}
          web={team_one_second[4].redes.web}
        />
      </div>
        {/* Nivel 3 */}
      <div className="w-full flex flex-row justify-between items-start">
        <div className="w-5/12 flex flex-wrap justify-around items-center">
          <CardTeam
            nombre={team_one_second[5].nombre}
            cargo={team_one_second[5].cargo}
            cargo2={team_one_second[5].cargo2}
            img={team_one_second[5].img}
            linkedin={team_one_second[5].redes.linkedin}
            github={team_one_second[5].redes.github}
            web={team_one_second[5].redes.web}
          />
          <CardTeam
            nombre={team_one_second[6].nombre}
            cargo={team_one_second[6].cargo}
            cargo2={team_one_second[6].cargo2}
            img={team_one_second[6].img}
            linkedin={team_one_second[6].redes.linkedin}
            github={team_one_second[6].redes.github}
            web={team_one_second[6].redes.web}
          />
          <CardTeam
            nombre={team_one_second[7].nombre}
            cargo={team_one_second[7].cargo}
            cargo2={team_one_second[7].cargo2}
            img={team_one_second[7].img}
            linkedin={team_one_second[7].redes.linkedin}
            github={team_one_second[7].redes.github}
            web={team_one_second[7].redes.web}
          />
          <CardTeam
            nombre={team_one_second[11].nombre}
            cargo={team_one_second[11].cargo}
            cargo2={team_one_second[11].cargo2}
            img={team_one_second[11].img}
            linkedin={team_one_second[11].redes.linkedin}
            github={team_one_second[11].redes.github}
            web={team_one_second[11].redes.web}
          />
        </div>
        <div className="w-5/12 flex flex-wrap justify-around items-start">
          <CardTeam
            nombre={team_one_second[8].nombre}
            cargo={team_one_second[8].cargo}
            cargo2={team_one_second[8].cargo2}
            img={team_one_second[8].img}
            linkedin={team_one_second[8].redes.linkedin}
            github={team_one_second[8].redes.github}
            web={team_one_second[8].redes.web}
          />
          <CardTeam
            nombre={team_one_second[9].nombre}
            cargo={team_one_second[9].cargo}
            cargo2={team_one_second[9].cargo2}
            img={team_one_second[9].img}
            linkedin={team_one_second[9].redes.linkedin}
            github={team_one_second[9].redes.github}
            web={team_one_second[9].redes.web}
          />
          {/* <CardTeam
            nombre={team_one_second[10].nombre}
            cargo={team_one_second[10].cargo}
            cargo2={team_one_second[10].cargo2}
            img={team_one_second[10].img}
            linkedin={team_one_second[10].redes.linkedin}
            github={team_one_second[10].redes.github}
            web={team_one_second[10].redes.web}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
