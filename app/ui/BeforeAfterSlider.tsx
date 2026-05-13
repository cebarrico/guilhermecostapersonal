"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSwiper } from "swiper/react";
import { useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ before, after }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const swiper = useSwiper();

  const x = useMotionValue(50);

  const clipPath = useTransform(x, (latest) => `inset(0 ${100 - latest}% 0 0)`);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const percent = ((clientX - rect.left) / rect.width) * 100;

    x.set(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={(e) => {
        if (dragging) {
          updateSlider(e.clientX);
        }
      }}
      onTouchMove={(e) => {
        if (dragging) {
          updateSlider(e.touches[0].clientX);
        }
      }}
      style={{
        position: "relative",
        width: "100%",
        height: 260,
        overflow: "hidden",
        borderRadius: "1rem",
        background: "#0f0f0f",
        touchAction: "pan-y",
        userSelect: "none",
      }}
    >
      {/* BEFORE */}
      <Image
        src={before}
        alt="Antes"
        fill
        draggable={false}
        style={{
          objectFit: "cover",
          pointerEvents: "auto",
        }}
      />

      {/* AFTER */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          clipPath,
          pointerEvents: "auto",
        }}
      >
        <Image
          src={after}
          alt="Depois"
          fill
          draggable={false}
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* LINE */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: useTransform(x, (v) => `${v}%`),
          width: 2,
          background: "#B7FF00",
          boxShadow: "0 0 18px rgba(183,255,0,0.8)",
          zIndex: 5,
          pointerEvents: "auto",
        }}
      >
        {/* HANDLE */}
        <div
          onPointerDown={() => {
            setDragging(true);
          }}
          onPointerUp={() => {
            setDragging(false);
          }}
          onPointerLeave={() => {
            setDragging(false);
          }}
          onTouchStart={() => {
            setDragging(true);
          }}
          onTouchEnd={() => {
            setDragging(false);
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#fff",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          ↔
        </div>
      </motion.div>

      {/* LABELS */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 3,
          background: "rgba(0,0,0,0.6)",
          padding: "0.35rem 0.6rem",
          borderRadius: "999px",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        ANTES
      </div>

      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 3,
          background: "rgba(163,230,53,0.18)",
          border: "1px solid rgba(163,230,53,0.35)",
          padding: "0.35rem 0.6rem",
          borderRadius: "999px",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#B7FF00",
        }}
      >
        DEPOIS
      </div>
    </div>
  );
}
