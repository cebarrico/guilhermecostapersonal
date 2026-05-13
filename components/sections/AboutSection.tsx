import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { container, wordAnimation } from "../../app/lib/animations";

export default function AboutSection() {
  const { scrollY } = useScroll();
  const aboutBgY = useTransform(scrollY, [0, 1200], [0, 60]);
  const modelY = useTransform(scrollY, [0, 1200], [0, -35]);
  const aboutContentY = useTransform(scrollY, [200, 1400], [0, -25]);
  return (
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
      <div style={{ position: "relative", overflow: "hidden", minHeight: 420 }}>
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
            Minha trajetória no universo fitness começou muito antes da atuação
            como Personal Trainer. Ao longo dos anos, adquiri experiência
            prática acompanhando alunos, ministrando aulas e trabalhando
            diretamente com suplementação esportiva e performance. Hoje, aplico
            esse conhecimento para desenvolver treinos personalizados com foco
            em resultado real, constância e evolução física sustentável.
            Acredito que transformação vai além da estética — envolve
            disciplina, saúde, confiança e qualidade de vida. Cada aluno recebe
            um acompanhamento individualizado, pensado para sua rotina, objetivo
            e nível de condicionamento.
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
  );
}
