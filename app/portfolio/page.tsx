"use client";

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  Medal,
  Target,
  Flame,
  Activity,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import ServiceCard from "@/components/services/ServiceCard";

const TRANSFORMATIONS = [
  {
    name: "Lucas M.",
    months: 4,
    lost: "-12kg",
    desc: "Emagrecimento + definição muscular",
  },
  {
    name: "Ana P.",
    months: 3,
    lost: "-8kg",
    desc: "Hipertrofia e condicionamento",
  },
  {
    name: "Carlos R.",
    months: 6,
    lost: "+9kg",
    desc: "Ganho de massa muscular",
  },
];

const SERVICES_DETAIL = [
  {
    title: "Emagrecimento",
    desc: "Protocolo personalizado de treino e orientação nutricional para perda de gordura com preservação de massa muscular.",
    icon: "🔥",
    items: ["Treino funcional", "Cardio inteligente", "Acompanhamento semanal"],
  },
  {
    title: "Hipertrofia",
    desc: "Programa de hipertrofia baseado em ciência, com periodização e progressão de carga individualizadas.",
    icon: "💪",
    items: [
      "Periodização avançada",
      "Técnicas de intensidade",
      "Acompanhamento de bioimpedância",
    ],
  },
  {
    title: "Condicionamento",
    desc: "Treinamento para atletas e entusiastas que buscam performance, resistência e qualidade de vida.",
    icon: "🏃",
    items: [
      "HIIT e circuitos",
      "Mobilidade e flexibilidade",
      "Avaliação física mensal",
    ],
  },
  {
    title: "Online",
    desc: "Plano de treino 100% personalizado com suporte via WhatsApp e revisões mensais.",
    icon: "📱",
    items: [
      "Planilha personalizada",
      "Suporte WhatsApp",
      "Vídeo-aulas demonstrativas",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Lucas M.",
    text: "Em 4 meses perdi 12kg sem passar fome e ganhei condicionamento que não tinha nem aos 20 anos. O Guilherme entendeu minha rotina e montou algo que realmente funciona.",
    stars: 5,
  },
  {
    name: "Ana Paula",
    text: "Tentei vários treinos sozinha e nunca consegui resultado. Com o Guilherme em 3 meses vi meu corpo mudar completamente. Profissional incrível!",
    stars: 5,
  },
  {
    name: "Carlos R.",
    text: "Ganhei 9kg de massa em 6 meses com acompanhamento de qualidade. Metodologia séria, treinos que respeitam meu limite e ainda me desafiam.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#a3e635", fontSize: "0.75rem" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 900,
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: 60,
          height: 3,
          background: "#a3e635",
          margin: "0.6rem auto 0",
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(163,230,53,0.5)",
        }}
      />
    </div>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 90,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
const cardVariants = (fromLeft: boolean) => ({
  hidden: {
    opacity: 0,
    x: fromLeft ? -40 : 40,
    y: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
});
const title = "RESULTADOS";
const subtitle = "DE VERDADE.";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 800], [0, 120]);

  const contentY = useTransform(scrollY, [0, 800], [0, -40]);

  const glowY = useTransform(scrollY, [0, 800], [0, 80]);

  const modelY = useTransform(scrollY, [0, 1200], [0, -35]);

  const aboutBgY = useTransform(scrollY, [0, 1200], [0, 60]);

  const aboutContentY = useTransform(scrollY, [200, 1400], [0, -25]);

  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* ══ NAVBAR ════════════════════════════════════════════════════════ */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(14px)",
            background: "rgba(8,8,8,0.82)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
            <Link
              href="/"
              style={{
                position: "relative",
                width: 52,
                height: 52,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="desktop-menu">
              {[
                "SOBRE MIM",
                "SERVIÇOS",
                "RESULTADOS",
                "DEPOIMENTOS",
                "CONTATO",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#9ca3af",
                    textDecoration: "none",
                    letterSpacing: "0.14em",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              {/* CTA */}
              <a
                href="https://wa.me/5516993922517"
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "#a3e635",
                  color: "#080808",
                  fontWeight: 900,
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  padding: "0.85rem 1.2rem",
                  borderRadius: "0.8rem",
                  textDecoration: "none",
                }}
              >
                FALE COMIGO
              </a>

              {/* HAMBURGER */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div
              className="mobile-menu"
              style={{
                padding: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                background: "#0b0b0b",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                "SOBRE MIM",
                "SERVIÇOS",
                "RESULTADOS",
                "DEPOIMENTOS",
                "CONTATO",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    fontSize: "0.85rem",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          <style jsx>{`
            .desktop-menu {
              display: flex;
              gap: 1.5rem;
              align-items: center;
            }

            .mobile-menu-btn {
              display: none;
            }

            @media (max-width: 768px) {
              .desktop-menu {
                display: none;
              }

              .desktop-btn {
                display: none !important;
              }

              .mobile-menu-btn {
                display: block;
              }
            }
          `}</style>
        </nav>
        {/* ══ HERO — sem foto do modelo ══════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            minHeight: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "4rem 0",
          }}
        >
          {/* Academia bg */}
          <motion.div
            style={{
              y: bgY,
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src="/acad.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 40%",
                filter: "blur(2px) brightness(0.2) saturate(0.6)",
                transform: "scale(1.05)",
              }}
              priority
              aria-hidden
            />
          </motion.div>

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.7) 55%, rgba(8,8,8,0.3) 100%)",
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(8,8,8,0) 60%, rgba(8,8,8,1) 100%)",
              zIndex: 1,
            }}
          />
          {/* Glow radial*/}
          <motion.div
            style={{
              y: glowY,
              position: "absolute",
              width: "55vw",
              maxWidth: 700,
              aspectRatio: "1",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(163,230,53,0.22) 0%, rgba(163,230,53,0.08) 35%, transparent 72%)",
              top: "50%",
              left: "58%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              filter: "blur(60px)",
              opacity: 0.9,
              pointerEvents: "none",
              mixBlendMode: "screen",
            }}
          />
          {/* Grid futuristic */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              opacity: 0.22,

              backgroundImage: `
      linear-gradient(rgba(163,230,53,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(163,230,53,0.08) 1px, transparent 1px)
    `,

              backgroundSize: "42px 42px",

              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",

              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",

              filter: "drop-shadow(0 0 6px rgba(163,230,53,0.18))",

              boxShadow: "inset 0 0 120px rgba(163,230,53,0.08)",
            }}
          />
          {/* Content left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              y: contentY,
              position: "relative",
              zIndex: 3,
              padding: "4rem 3rem 4rem 2.5rem",
              maxWidth: 560,
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#a3e635",
                letterSpacing: "0.12em",
                marginBottom: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              TREINO COM PROPÓSITO.
            </p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "clamp(2.1rem, 5.5vw, 4.2rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                }}
              >
                {title.split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordAnimation}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                  color: "#B7FF00",
                  fontStyle: "italic",
                  textShadow: "0 0 24px rgba(183,255,0,0.35)",
                }}
              >
                {subtitle.split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordAnimation}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#9ca3af",
                lineHeight: 1.8,
                maxWidth: 300,
                marginBottom: "2rem",
              }}
            >
              Mais que treinos, eu entrego transformação.
              <br />
              Disposição, saúde, estética e performance
              <br />
              com acompanhamento individualizado.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/5516993922517"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#a3e635",
                  color: "#080808",
                  fontWeight: 800,
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  boxShadow: "0 0 24px rgba(163,230,53,0.4)",
                  textTransform: "uppercase",
                }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#080808">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                QUERO RESULTADOS
              </a>

              <a
                href="#sobre-mim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                }}
              >
                CONHEÇA MEU MÉTODO
              </a>
            </div>

            {/* Mini stats bar */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                marginTop: "2.8rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                {
                  icon: Dumbbell,
                  value: "EXPERIÊNCIA",
                  sub: "TREINAMENTO E PERFORMANCE",
                },
                {
                  icon: Medal,
                  value: "QUALIFICAÇÃO",
                  sub: "ACOMPANHAMENTO PERSONALIZADO",
                },
                {
                  icon: Target,
                  value: "FOCO TOTAL",
                  sub: "EM RESULTADOS REAIS",
                },
              ].map((s) => {
                const Icon = s.icon;

                return (
                  <div
                    key={s.value}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      minWidth: 0,
                    }}
                  >
                    {/* Icon glow */}
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "0.8rem",
                        background: "rgba(163,230,53,0.08)",
                        border: "1px solid rgba(163,230,53,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 20px rgba(163,230,53,0.08)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="#B7FF00" strokeWidth={2.4} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          color: "#fff",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {s.value}
                      </div>

                      <div
                        style={{
                          fontSize: "0.56rem",
                          color: "#9ca3af",
                          letterSpacing: "0.04em",
                          marginTop: "0.18rem",
                          lineHeight: 1.4,
                          textTransform: "uppercase",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* ══ SOBRE MIM ══════════════════════════════════════════════════════ */}
        <section
          id="sobre-mim"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            borderTop: "1px solid #111",
            marginBottom: "15px",
          }}
        >
          {/* Left: foto com fundo academia */}
          <div
            style={{ position: "relative", overflow: "hidden", minHeight: 420 }}
          >
            {/* Academia bg behind */}
            <motion.div
              style={{
                y: aboutBgY,
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src="/acad.jpg"
                alt=""
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "brightness(0.25) saturate(0.5)",
                }}
                aria-hidden
              />
            </motion.div>
            {/* dark overlay left-to-right fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(8,8,8,0) 60%, rgba(8,8,8,1) 100%)",
                zIndex: 1,
              }}
            />
            {/* Model photo */}
            <motion.div
              style={{
                y: modelY,
                position: "absolute",
                inset: 0,
                zIndex: 2,
              }}
            >
              <Image
                src="/model.png"
                alt="Guilherme Costa"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
              />
            </motion.div>
            {/* Signature overlay */}
            <Image
              src="/signature.png"
              alt="Guilherme Costa"
              width={340}
              height={70}
              style={{
                position: "absolute",
                bottom: "-4.5rem",
                left: "60%",
                transform: "translateX(-50%)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Right: text content */}
          <motion.div
            style={{
              y: aboutContentY,
              background: "#0d0d0d",
              padding: "3.5rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Faint watermark G */}
            <div
              style={{
                position: "absolute",
                bottom: "-1rem",
                right: "-1rem",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(163,230,53,0.04)",
                lineHeight: 1,
                fontFamily: "inherit",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              G
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: "#a3e635",
                  letterSpacing: "0.16em",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                }}
              >
                SOBRE MIM
              </p>

              <motion.h2
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  marginBottom: "1.4rem",
                  letterSpacing: "-0.04em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.35rem",
                    flexWrap: "wrap",
                  }}
                >
                  {"DISCIPLINA, FOCO".split(" ").map((word) => (
                    <motion.span
                      key={word}
                      variants={wordAnimation}
                      style={{
                        display: "inline-block",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.35rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <motion.span
                    variants={wordAnimation}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    E
                  </motion.span>

                  <motion.span
                    variants={wordAnimation}
                    style={{
                      display: "inline-block",
                      color: "#a3e635",
                      fontStyle: "italic",
                      textShadow: "0 0 20px rgba(163,230,53,0.3)",
                    }}
                  >
                    CONSTÂNCIA.
                  </motion.span>
                </div>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                style={{
                  fontSize: "0.68rem",
                  color: "#9ca3af",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Minha trajetória no universo fitness começou muito antes da
                atuação como Personal Trainer. Ao longo dos anos, adquiri
                experiência prática acompanhando alunos, ministrando aulas e
                trabalhando diretamente com suplementação esportiva e
                performance. Hoje, aplico esse conhecimento para desenvolver
                treinos personalizados com foco em resultado real, constância e
                evolução física sustentável. Acredito que transformação vai além
                da estética — envolve disciplina, saúde, confiança e qualidade
                de vida. Cada aluno recebe um acompanhamento individualizado,
                pensado para sua rotina, objetivo e nível de condicionamento.
              </motion.p>

              {/* Credenciais */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "Bacharel em Educação Física — CREF: 212940-G/SP",
                  "Experiência prática com treinamento e performance física ",
                  "Conhecimento em suplementação esportiva e condicionamento",
                  "Acompanhamento individualizado com foco em resultados",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.62rem",
                      color: "#d1d5db",
                    }}
                  >
                    <span
                      style={{
                        color: "#a3e635",
                        flexShrink: 0,
                        fontWeight: 800,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#servicos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  padding: "0.7rem 1.25rem",
                  borderRadius: "0.45rem",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                  width: "fit-content",
                }}
              >
                SAIBA MAIS SOBRE MIM
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ══ SERVIÇOS ════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.2rem",
            overflow: "hidden",
          }}
        >
          {[
            {
              icon: <Flame size={28} />,
              title: "Emagrecimento",
              desc: "Estratégias personalizadas para perda de gordura com preservação muscular.",
              items: [
                "Treino inteligente",
                "Cardio estratégico",
                "Acompanhamento contínuo",
              ],
            },

            {
              icon: <Dumbbell size={28} />,
              title: "Hipertrofia",
              desc: "Planejamento focado em ganho de massa e evolução consistente.",
              items: [
                "Progressão de carga",
                "Técnicas avançadas",
                "Avaliação contínua",
              ],
            },

            {
              icon: <Activity size={28} />,
              title: "Condicionamento",
              desc: "Mais resistência, mobilidade e performance para o dia a dia.",
              items: [
                "Treinos dinâmicos",
                "Alta performance",
                "Qualidade de vida",
              ],
            },

            {
              icon: <Smartphone size={28} />,
              title: "Consultoria Online",
              desc: "Treinamento personalizado com suporte direto e acompanhamento remoto.",
              items: [
                "Planilha personalizada",
                "Suporte WhatsApp",
                "Atualizações mensais",
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants(index % 2 === 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.6,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        {/* ══ TRANSFORMAÇÕES ════════════════════════════════════════════ */}
        <section
          id="resultados"
          style={{
            padding: "3rem 1rem",
            overflow: "hidden",
          }}
        >
          <SectionTitle>Transformações Reais</SectionTitle>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{
              paddingBottom: "3rem",
              overflow: "visible",
            }}
          >
            {TRANSFORMATIONS.map((t) => (
              <SwiperSlide key={t.name}>
                <div
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: "1rem",
                    padding: "1rem",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: 150,
                        background: "linear-gradient(135deg, #1a1a1a, #141414)",
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #2a2a2a",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#4b5563",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        ANTES
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#a3e635",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                      }}
                    >
                      →
                    </div>

                    <div
                      style={{
                        flex: 1,
                        height: 150,
                        background: "linear-gradient(135deg, #1a2010, #141a0e)",
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(163,230,53,0.2)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#a3e635",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        DEPOIS
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {t.name}
                      </p>

                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#6b7280",
                          lineHeight: 1.5,
                        }}
                      >
                        {t.desc}
                      </p>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p
                        style={{
                          fontSize: "1.8rem",
                          fontWeight: 900,
                          color: "#a3e635",
                          textShadow: "0 0 10px rgba(163,230,53,0.4)",
                        }}
                      >
                        {t.lost}
                      </p>

                      <p
                        style={{
                          fontSize: "0.7rem",
                          color: "#6b7280",
                        }}
                      >
                        em {t.months} meses
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "#4b5563",
              marginTop: "0.5rem",
              fontStyle: "italic",
            }}
          >
            * Resultados individuais. Fotos dos alunos disponíveis mediante
            autorização.
          </p>
        </section>

        {/* ══ DEPOIMENTOS ════════════════════════════════════════════════ */}
        <section
          id="depoimentos"
          style={{
            padding: "3rem 1rem",
            background: "#0c0c0c",
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
            overflow: "hidden",
          }}
        >
          <SectionTitle>O que dizem meus alunos</SectionTitle>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            speed={1200}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{
              paddingBottom: "3rem",
              overflow: "visible",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide
                key={t.name}
                style={{
                  height: "auto",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: "1rem",
                    padding: "1.4rem",
                    position: "relative",

                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                    minHeight: 320,
                  }}
                >
                  {/* aspas */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0.7rem",
                      right: "1rem",
                      fontSize: "4rem",
                      color: "rgba(163,230,53,0.08)",
                      fontFamily: "Georgia, serif",
                      lineHeight: 1,
                      pointerEvents: "none",
                    }}
                  >
                    "
                  </div>

                  <div>
                    <Stars count={t.stars} />

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#d1d5db",
                        lineHeight: 1.8,
                        margin: "1rem 0 1.25rem",
                        fontStyle: "italic",
                      }}
                    >
                      "{t.text}"
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginTop: "auto",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1f2937, #111827)",
                        border: "1px solid rgba(163,230,53,0.2)",
                      }}
                    />

                    <div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#a3e635",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {t.name}
                      </p>

                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "#6b7280",
                        }}
                      >
                        Aluno Personal
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════════ */}
        <section
          id="contato"
          style={{
            padding: "4rem 2rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(163,230,53,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                position: "relative",
                width: 180,
                height: 180,
                margin: "0 auto 1.25rem",
                filter: "drop-shadow(0 0 16px rgba(163,230,53,0.5))",
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Pronto para
              <br />
              <span style={{ color: "#a3e635" }}>Transformar?</span>
            </h2>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#9ca3af",
                lineHeight: 1.8,
                marginBottom: "1.75rem",
                maxWidth: 400,
                margin: "0 auto 1.75rem",
              }}
            >
              Entre em contato agora e dê o primeiro passo rumo aos seus
              resultados. Consulta gratuita!
            </p>
            <a
              href="https://wa.me/5516993922517"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#a3e635",
                color: "#080808",
                fontWeight: 900,
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                padding: "1rem 2rem",
                borderRadius: "0.65rem",
                textDecoration: "none",
                textTransform: "uppercase",
                boxShadow:
                  "0 0 30px rgba(163,230,53,0.4), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#080808">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <div style={{ marginTop: "1.25rem" }}>
              <Link
                href="/"
                style={{
                  fontSize: "0.58rem",
                  color: "#4b5563",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                }}
              >
                ← Voltar ao cartão de visitas
              </Link>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══════════════════════════════════════════════════════ */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            textAlign: "center",
            padding: "1.25rem",
            letterSpacing: "0.2em",
            fontSize: "0.48rem",
            color: "#a3e635",
            fontWeight: 700,
          }}
        >
          D I S C I P L I N A &nbsp; H O J E . &nbsp; R E S U L T A D O S &nbsp;
          S E M P R E .
        </div>
      </div>
    </main>
  );
}
