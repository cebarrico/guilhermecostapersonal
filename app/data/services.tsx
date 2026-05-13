import {
  Dumbbell,
  Medal,
  Target,
  Flame,
  Activity,
  Smartphone,
} from "lucide-react";

export const SERVICES_DETAIL = [
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
    items: ["Progressão de carga", "Técnicas avançadas", "Avaliação contínua"],
  },

  {
    icon: <Activity size={28} />,
    title: "Condicionamento",
    desc: "Mais resistência, mobilidade e performance para o dia a dia.",
    items: ["Treinos dinâmicos", "Alta performance", "Qualidade de vida"],
  },

  {
    icon: <Smartphone size={28} />,
    title: "Performance & Reabilitação Funcional",
    desc: "Treinamento personalizado para ganho de performance, mobilidade e fortalecimento com segurança.",
    items: [
      "Mobilidade e estabilidade",
      "Adaptação para lesões e dores",
      "Evolução progressiva",
    ],
  },
];
