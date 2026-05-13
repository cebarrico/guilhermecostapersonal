import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "@/app/ui/SectionTitle";
import { TRANSFORMATIONS } from "@/app/data";
import BeforeAfterSlider from "@/app/ui/BeforeAfterSlider";

export default function ResultSection() {
  return (
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
        nested={true}
        touchRatio={0.2}
        threshold={20}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={true}
        spaceBetween={16}
        slidesPerView={1.15}
        centeredSlides={false}
        allowTouchMove={true}
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
            <BeforeAfterSlider before={t.before} after={t.after} />
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
  );
}
