import Image from "next/image";
import logo from "@/img/one-second.svg";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="fondo_1 h-svh bg-blue-500/20 dark:bg-gray-950">
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Image src={logo} alt="logo" width={400} height={400} className="mt-20 mb-10 lg:w-96 md:w-96 sm:w-72"/>
      <p className="font-semibold text-xl font-serif sm:text-center dark:text-white lg:w-[450px] sm:px-5 lg:px-0 md:px-0">
        Estamos trabajando para ofrecerte una mejor experiencia.
      </p>
    </main>
    </div>
  );
}
