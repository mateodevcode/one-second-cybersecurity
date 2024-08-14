import Image from "next/image";
import logo from "@/img/one-second.svg";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="h-screen dark:bg-black dark:text-white ">
      <Header />
    <main className="flex flex-col justify-center items-center mt-40">
      <Image src={logo} alt="logo" width={400} height={400} className="lg:w-72 md:w-96 sm:w-72 select-none"/>
      <p className="font-semibold text-xl font-serif sm:text-center lg:w-[450px] sm:px-5 lg:px-0 md:px-0">
        Estamos trabajando para ofrecerte una mejor experiencia.
      </p>
    </main>
    </div>
  );
}
