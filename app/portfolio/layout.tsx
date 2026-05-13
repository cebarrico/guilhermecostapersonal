import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio — Guilherme Costa Personal Trainer",
  description:
    "Conheça minha trajetória, metodologia e resultados reais. Personal Trainer CREF 212940-G/SP.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
