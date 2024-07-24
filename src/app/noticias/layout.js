import Header from "@/components/noticias/Header";
import MenuNavegacion from "@/components/noticias/MenuNavegacion";

export const metadata = {
  title: "Noticias - One Second CyberSecurity",
  description: "Noticias de ciberseguridad y desarrollo de software",
};

export default function Layout({ children }) {
  return (
    <div className="dark:bg-gray-950">
    <Header />
    <div className="flex">
      <MenuNavegacion />
      {children}
    </div>
    </div>
  );
}
