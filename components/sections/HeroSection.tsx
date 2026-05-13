import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  Medal,
  Target,
  Flame,
  Activity,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import {
  fadeUp,
  container,
  stagger,
  wordAnimation,
} from "@/app/lib/animations";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);

  const contentY = useTransform(scrollY, [0, 800], [0, -40]);

  const glowY = useTransform(scrollY, [0, 800], [0, 80]);

  const title = "RESULTADOS";
  const subtitle = "DE VERDADE.";

  return (
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
          viewport={{ once: false }}
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
  );
}
