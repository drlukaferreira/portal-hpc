import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HPC — Health Performance Clinic | Unidade de Elite",
  description: "Medicina de performance de alto nível em Manaus. Protocolos exclusivos, equipe especializada, resultados excepcionais.",
  keywords: ["medicina esportiva", "performance", "Manaus", "HPC", "Health Performance Clinic"],
  openGraph: {
    title: "HPC — Health Performance Clinic",
    description: "Medicina de performance de alto nível em Manaus.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-[family-name:var(--font-inter)]">{children}</body>
    </html>
  );
}
