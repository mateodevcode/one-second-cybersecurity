import Header from "@/components/noticias/Header";
import MenuNavegacion from "@/components/noticias/MenuNavegacion";

export const metadata = {
  title: "Noticias",
  description: "Noticias de ciberseguridad y desarrollo de software",
};

export default function Layout({ children }) {
  return (
    <div className="dark:bg-black">
    <Header />
    <div className="flex">
      <MenuNavegacion />
      {children}
    </div>
    </div>
  );
}
