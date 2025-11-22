import styles from "./roadmap-timeline.module.css";

type RoadmapItem = {
  phase: string;
  focus: string;
  outcomes: string[];
};

const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 0 · Vision",
    focus: "Establish product north-star, success metrics, and architectural constraints.",
    outcomes: [
      "Product strategy brief with measurable impact targets.",
      "Stakeholder alignment on scope, budget, and timeline.",
      "Discovery spikes for high-risk technical or regulatory areas."
    ]
  },
  {
    phase: "Phase 1 · Foundations",
    focus:
      "Lay down the core system architecture, CI/CD plumbing, and shared UI language.",
    outcomes: [
      "Modular domain-driven folder structure with strict linting and formatting.",
      "Automated pipeline covering build, type-check, lint, and tests.",
      "Component library baseline with accessibility baked in."
    ]
  },
  {
    phase: "Phase 2 · Vertical Slices",
    focus: "Deliver end-to-end value slices that validate architecture under load.",
    outcomes: [
      "Production telemetry for each slice: error rates, latency, UX metrics.",
      "Progressive rollout strategy with feature flags and kill switches.",
      "Cross-functional demos to surface gaps early."
    ]
  },
  {
    phase: "Phase 3 · Hardening",
    focus:
      "Stabilize for launch: scale tests, chaos drills, documentation, and training.",
    outcomes: [
      "Load-test envelope matched to forecast load + 30% safety margin.",
      "Runbooks for incidents, release automation, and rollback drills.",
      "Onboarding guides for engineers, support, and operations teams."
    ]
  }
];

export function RoadmapTimeline() {
  return (
    <section className={styles.timeline}>
      {ROADMAP.map((item) => (
        <article key={item.phase} className={styles.step}>
          <header>
            <span className={styles.badge}>{item.phase}</span>
            <h3>{item.focus}</h3>
          </header>
          <ul>
            {item.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
