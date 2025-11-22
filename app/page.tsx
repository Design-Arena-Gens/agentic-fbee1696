"use client";

import { RoadmapTimeline } from "../components/roadmap-timeline";
import { SectionCard } from "../components/section-card";
import styles from "./page.module.css";

const collaborationPrinciples = [
  "Anchor the roadmap in measurable outcomes; value is the north-star, not feature volume.",
  "Treat architecture as a living contract—codify decisions in ADRs and revisit after every milestone.",
  "Lean on automated quality gates early so scaling the team does not amplify regression risk.",
  "Balance discovery and delivery cadences; prototype small, productionize in resilient slices."
];

const codeScalingPractices = [
  "Partition by bounded context: isolate domains with feature folders and encapsulated data contracts.",
  "Adopt a platform layer for cross-cutting concerns (auth, telemetry, design tokens) to prevent duplication.",
  "Invest in incremental compilation (Next.js turbopack, SWC) and lint rules that block anti-patterns.",
  "Write executable docs—Storybook, integration tests, and scaffolds—to keep institutional knowledge close to code."
];

const largeFileHandling = [
  "Detect early: configure lint rules that flag files exceeding agreed thresholds (e.g., 400 lines).",
  "Refactor with intent: prefer pure utilities, hooks, and ViewModel adapters to shrink presentation components.",
  "Use code generation and AST tooling (Codemods) when manual refactors become brittle.",
  "Automate ownership via CODEOWNERS and review bots so large touch-points receive the right experts."
];

const deliveryPlaybook = [
  "Define SLIs/SLOs per capability before writing a line of code; instrument as you build.",
  "Continuously validate assumptions with feature flags, staged rollouts, and analytics funnels.",
  "Pair infrastructure-as-code with observability dashboards; every deploy should be observable in minutes.",
  "Schedule architecture retrospectives at the end of each phase to sunset shortcuts and pay down debt."
];

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.hero}>
        <div>
          <span className={styles.pill}>Blueprint</span>
          <h1>Build complex products without drowning in complexity.</h1>
          <p>
            A strategic playbook for shipping ambitious web applications. Use this as a
            launchpad: align teams, scale architecture, and keep codebases nimble—even
            when files grow massive and contributors multiply.
          </p>
        </div>
        <aside className={styles.metrics}>
          <article>
            <strong>20+</strong>
            <span>Foundational decisions codified up front</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Lifecycle phases with crisp exit criteria</span>
          </article>
          <article>
            <strong>∞</strong>
            <span>Learning loops for continuous evolution</span>
          </article>
        </aside>
      </header>

      <div className={styles.grid}>
        <SectionCard
          title="Collaboration Strategy"
          subtitle="Align process, architecture, and velocity from day zero."
          bullets={collaborationPrinciples}
        />
        <SectionCard
          title="Scaling the Codebase"
          subtitle="Structure, tooling, and checks that keep complexity in check."
          bullets={codeScalingPractices}
        />
        <SectionCard
          title="Taming Large Files"
          subtitle="Practical heuristics for splitting and governing oversized modules."
          bullets={largeFileHandling}
        />
        <SectionCard
          title="Delivery Playbook"
          subtitle="Operational guardrails that keep releases boring."
          bullets={deliveryPlaybook}
        />
      </div>

      <section className={styles.section}>
        <header>
          <h2>Execution Roadmap</h2>
          <p>
            Work iteratively, but never lose sight of the endgame. Each phase has a
            tangible exit, owners, and feedback loops so you can steer without handwavy
            status reports.
          </p>
        </header>
        <RoadmapTimeline />
      </section>

      <section className={styles.section}>
        <header>
          <h2>Big-File Refactor Tactics Toolkit</h2>
          <p>
            Use these prompts to drive refactors during triage meetings or architecture
            reviews.
          </p>
        </header>
        <div className={styles.toolkit}>
          <article>
            <h3>Smell Radar</h3>
            <ul>
              <li>Does this file mix presentation, domain logic, and data fetching?</li>
              <li>Are there hidden state machines or imperative effects that lack tests?</li>
              <li>Could this split into parameterized hooks or headless components?</li>
            </ul>
          </article>
          <article>
            <h3>Refactor Playbook</h3>
            <ul>
              <li>Extract selectors and serializers to `/lib` or `/services` boundaries.</li>
              <li>Introduce feature flags so legacy + refactored paths can coexist.</li>
              <li>Wrap third-party APIs behind dedicated adapters to avoid lock-in.</li>
            </ul>
          </article>
          <article>
            <h3>Automation Ideas</h3>
            <ul>
              <li>Validate component size budgets via custom ESLint rules.</li>
              <li>Generate visual diffs (Chromatic, Percy) as part of refactor PRs.</li>
              <li>Use static graphs (Madge, TS project references) to catch cycles.</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          Ready to move from blueprint to backlog? Clone this approach, wire it into your
          favorite project management stack, and iterate with ruthless focus on outcomes.
        </p>
        <a
          href="https://vercel.com/templates/next.js"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Launch your Next.js workspace
        </a>
      </footer>
    </main>
  );
}
