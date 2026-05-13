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
import { SERVICES_DETAIL } from "@/app/data";

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
      {SERVICES_DETAIL.map((service, index) => (
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
