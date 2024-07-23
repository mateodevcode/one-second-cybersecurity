import Header from "@/components/header/Header";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-500/20 dark:bg-gray-950 dark:text-white text-black">
      <Header />
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-center text-8xl font-semibold font-serif mb-20">Error 404</p>
        <h2 className="text-center lg:text-4xl md:text-4xl font-semibold sm:text-xl sm:px-3 lg:px-0 md:px-0">
          Lo sentimos, estamos trabajando para darte una mejor experiencia.
        </h2>
      </div>
    </div>
  );
};

export default page;
