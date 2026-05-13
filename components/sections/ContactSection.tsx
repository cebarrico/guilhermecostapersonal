import Image from "next/image";
import Link from "next/link";
export default function ContactSection() {
  return (
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
          Entre em contato agora e dê o primeiro passo rumo aos seus resultados.
          Consulta gratuita!
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
      </div>
    </section>
  );
}
