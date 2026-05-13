import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
          href="/visitcard"
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
  );
}
