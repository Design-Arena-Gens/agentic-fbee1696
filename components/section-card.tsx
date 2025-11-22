import styles from "./section-card.module.css";

type SectionCardProps = {
  title: string;
  subtitle?: string;
  bullets: string[];
};

export function SectionCard({ title, subtitle, bullets }: SectionCardProps) {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      <ul className={styles.list}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}
