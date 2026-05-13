import {
  Dumbbell,
  Medal,
  Target,
  Flame,
  Activity,
  Smartphone,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cardVariants } from "@/app/ui/CardVariant";
import ServiceCard from "../services/ServiceCard";
export default function ServicesSection() {
  return (
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
          items: ["Treinos dinâmicos", "Alta performance", "Qualidade de vida"],
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
  );
}
