import Header from "@/components/blog/Header";
import HeaderTop from "@/components/blog/HeaderTop";

export const metadata = {
  title: "Blog - One Second CyberSecurity",
  description: "Blog de ciberseguridad y desarrollo de software",
};

export default function Layout({ children }) {
  return (
    <div className="bg-blue-500/20 dark:bg-gray-950 w-full">
        <Header />
        <HeaderTop />
    <div className="flex flex-row justify-center items-center w-full">
      {children}
    </div>
    </div>
  );
}
