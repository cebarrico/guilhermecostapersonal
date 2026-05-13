import styles from "./ServiceCard.module.css";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  items: string[];
}

export default function ServiceCard({
  icon,
  title,
  desc,
  items,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.glow} />

      <div className={styles.iconBox}>{icon}</div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{desc}</p>

        <div className={styles.list}>
          {items.map((item) => (
            <div key={item} className={styles.listItem}>
              <div className={styles.check}>
                <Check size={12} strokeWidth={3} />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
