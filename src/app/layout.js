import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One Second",
  description: "One Second CyberSecurity es una empresa de ciberseguridad que ofrece servicios de pentesting, auditorías de seguridad, análisis de vulnerabilidades, entre otros.",
  keywords: "One Second, ciberseguridad, pentesting, auditorías de seguridad, análisis de vulnerabilidades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
