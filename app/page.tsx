"use client";

import NavBar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import "swiper/css";
import "swiper/css/pagination";
import ServicesSection from "@/components/sections/ServicesSection";
import ResultSection from "@/components/sections/ResultsSection";
import TestimonialSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Portfolio() {
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
        <NavBar />
        {/* ══ HERO — sem foto do modelo ══════════════════════════════════════ */}
        <HeroSection />

        {/* ══ SOBRE MIM ══════════════════════════════════════════════════════ */}
        <AboutSection />
        {/* ══ SERVIÇOS ════════════════════════════════════════════════════ */}
        <ServicesSection />
        {/* ══ TRANSFORMAÇÕES ════════════════════════════════════════════ */}
        <ResultSection />
        {/* ══ DEPOIMENTOS ════════════════════════════════════════════════ */}
        <TestimonialSection />

        {/* ══ CTA FINAL ══════════════════════════════════════════════════ */}
        <ContactSection />

        {/* ══ FOOTER ══════════════════════════════════════════════════════ */}
        <Footer />
      </div>
    </main>
  );
}
