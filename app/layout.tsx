import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Guilherme Costa — Personal Trainer",
  description:
    "Treino com propósito. Resultados de verdade. Personal trainer registrado CREF.",
  authors: [{ name: "Guilherme Costa" }],
  openGraph: {
    title: "Guilherme Costa — Personal Trainer",
    description: "Treino com propósito. Resultados de verdade.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
