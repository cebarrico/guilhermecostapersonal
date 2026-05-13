import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "@/app/ui/SectionTitle";
import { TESTIMONIALS } from "@/app/data";
import Stars from "@/app/ui/Stars";

export default function TestimonialSection() {
  return (
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
  );
}
