import React from "react";

const Autor = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-10 dark:text-white">
      <img
        src="https://i.postimg.cc/L4ZzjFMH/foto-perfil.jpg"
        alt="JavaScript"
        width={50}
        height={50}
        className="rounded-full border-2 border-black"
      />
      <p className="flex flex-col justify-center items-start">
        <span className="mx-4 font-semibold text-sm">
          Mateo Lizcano Noriega
        </span>
        <span className="mx-4 text-sm">24 de Julio de 2024</span>
      </p>
    </div>
  );
};

export default Autor;
