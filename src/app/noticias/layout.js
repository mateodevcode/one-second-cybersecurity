import Header from "@/components/header/Header";
import MenuNavegacion from "@/components/noticias/MenuNavegacion";

export const metadata = {
  title: "Noticias - One Second CyberSecurity",
  description: "Noticias de ciberseguridad y desarrollo de software",
};


export default function Layout({ children }) {
  
  return (
    <div className="flex flex-col justify-between items-start bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <div className="flex flex-row justify-between items-start">
      <MenuNavegacion />
      {children}
      <MenuNavegacion />
      </div>
    </div>
  );
}

