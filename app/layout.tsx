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
    url: "https://guilhermecostapersonal.vercel.app",
    siteName: "Guilherme Costa Personal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guilherme Costa Personal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guilherme Costa — Personal Trainer",
    description: "Treino com propósito. Resultados de verdade.",
    images: ["/og-image.jpg"],
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
