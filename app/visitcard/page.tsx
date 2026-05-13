import Image from "next/image";
import Link from "next/link";

const CONTACTS = [
  {
    href: "https://wa.me/5516993922517",
    label: "WHATSAPP",
    sublabel: "Fale comigo agora",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#25d366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: "tel:+5516993922517",
    label: "LIGAÇÃO",
    sublabel: "Agende seu horário",
    icon: <Image src="/phone.png" alt="Phone" width={20} height={20} />,
  },
  {
    href: "/",
    label: "PORTFÓLIO",
    sublabel: "Conheça minha trajetória e resultados",
    color: "#a3e635",
    isInternal: true,
    icon: (
      <Image src="/portfolio.png" alt="Emagrecimento" width={25} height={25} />
    ),
  },
  {
    href: "https://instagram.com/catracac",
    label: "INSTAGRAM",
    sublabel: "@catracac",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="#a3e635"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#a3e635" stroke="none" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    label: "EMAGRECIMENTO",
    icon: <Image src="/peso.png" alt="Emagrecimento" width={75} height={75} />,
  },

  {
    label: "HIPERTROFIA",
    icon: <Image src="/arm.png" alt="Emagrecimento" width={50} height={50} />,
  },

  {
    label: "CONDICIONAMENTO",
    icon: <Image src="/run.png" alt="Emagrecimento" width={50} height={50} />,
  },

  {
    label: "FOCO · DISCIPLINA · RESULTADOS",
    icon: <Image src="/alvo.png" alt="Emagrecimento" width={50} height={50} />,
  },
];

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="#a3e635"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "0 0 2rem",
          overflow: "hidden",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            background: "#0d0d0d",
          }}
        >
          {/* Green accent line top-left diagonal */}
          <svg
            viewBox="0 0 120 800"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 10,
              left: "min(23%, 18vw)",
              width: "120px",
              height: "85%",
              zIndex: 1,
              overflow: "visible",
            }}
          >
            <path
              d="M 25 -50 Q 109 190 111 256 T 25 900"
              fill="none"
              stroke="#B7FF00"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px #B7FF00)",
              }}
            />
          </svg>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            {/* Trainer photo — left half */}
            <div
              style={{
                width: "45%",
                position: "relative",
                minHeight: 280,
              }}
            >
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  minHeight: 280,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/banner1.png"
                  alt="Academia"
                  fill
                  style={{
                    objectFit: "cover",
                    opacity: 0.92,
                    filter: "blur(1px) brightness(0.65)",
                    zIndex: 0,
                    clipPath: "polygon(0 0, 62% 0, 100% 24%, 86% 100%, 0 100%)",
                    transform: "scale(1.02)",
                  }}
                />{" "}
              </div>
              <Image
                src="/model.png"
                alt="Guilherme Costa Personal Trainer"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  transform: "scale(1.15)",
                  zIndex: 2,
                }}
                priority
              />
            </div>

            {/* Right side info */}
            <div
              style={{
                flex: 1,
                padding: "1rem 0.75rem 1rem 0",
                minWidth: 0,
              }}
            >
              {/* Logo G icon */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "180px",
                  height: "140px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Guilherme Costa Personal Trainer"
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#e5e7eb",
                  fontStyle: "italic",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginBottom: "0.75rem",
                  paddingLeft: "1.5rem",
                }}
              >
                TREINO COM PROPÓSITO.
                <br />
                <span style={{ color: "var(--neon)" }}>
                  RESULTADOS DE VERDADE.
                </span>
              </p>

              {/* CREF box */}
              <div
                style={{
                  border: "1.5px solid var(--neon)",
                  borderRadius: "0.6rem",
                  padding: "0.5rem 0.6rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#141414",
                  marginLeft: "1rem",
                }}
              >
                <Image
                  src="/creficon.png"
                  alt="Emagrecimento"
                  width={25}
                  height={25}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    CREF: 212940-G/SP
                  </p>
                  <p
                    style={{
                      fontSize: "0.5rem",
                      color: "#9ca3af",
                      lineHeight: 1.3,
                    }}
                  >
                    Profissional de Educação Física
                    <br />
                    Registrado e Habilitado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Rows */}
        <div
          style={{
            padding: "1.25rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            position: "relative",
            zIndex: 3,
          }}
        >
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div className="icon-wrap">{c.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  {c.label}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.sublabel}
                </p>
              </div>
              <div className="chevron">
                <ChevronRight />
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#1e1e1e", margin: "0 1rem" }} />

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            padding: "1.25rem 0.75rem",
            gap: "0.5rem",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              {s.icon}
              <p
                style={{
                  fontSize: "0.42rem",
                  color: "#9ca3af",
                  textAlign: "center",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#1e1e1e", margin: "0 1rem" }} />

        {/* Footer tagline */}
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            letterSpacing: "0.15em",
            fontSize: "0.50rem",
            color: "var(--neon)",
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
