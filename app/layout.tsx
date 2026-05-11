import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
