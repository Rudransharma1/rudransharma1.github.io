import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    title: "Sentiment Analysis NLP System",
    tag: "NLP / Classification",
    blurb:
      "Multi-class transformer pipeline for product reviews with realtime sentiment routing into Power BI.",
    stack: ["Python", "HuggingFace", "FastAPI", "Power BI"],
    metrics: [
      { k: "92.4%", v: "F1 score" },
      { k: "12k/min", v: "throughput" },
      { k: "4", v: "languages" },
    ],
    Visual: NlpVisual,
  },
  {
    title: "Revenue Optimization Analytics",
    tag: "BI / Pricing",
    blurb:
      "Cohort, elasticity, and channel-mix dashboard surfacing where to defend price and where to push.",
    stack: ["SQL", "dbt", "Power BI", "Python"],
    metrics: [
      { k: "+18%", v: "ARPU lift" },
      { k: "−9pp", v: "discount leak" },
      { k: "32", v: "live KPIs" },
    ],
    Visual: RevenueVisual,
  },
  {
    title: "Budget Forecasting System",
    tag: "Forecasting / AI",
    blurb:
      "Hybrid ARIMA + gradient-boosted forecaster powering rolling 12-month departmental budgets.",
    stack: ["Python", "Prophet", "XGBoost", "Tableau"],
    metrics: [
      { k: "94.2%", v: "accuracy" },
      { k: "−68%", v: "planning time" },
      { k: "11", v: "departments" },
    ],
    Visual: ForecastVisual,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>04 / Projects</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Case studies in <span className="text-gradient">applied intelligence</span>.
        </h2>

        <div className="mt-12 space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`glass relative overflow-hidden rounded-3xl p-6 md:p-10 grid grid-cols-1 gap-8 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 size-[420px] rounded-full bg-accent/10 blur-3xl" />

              <div className="lg:col-span-5 [direction:ltr]">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{p.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.v} className="rounded-xl bg-surface-2/60 p-3">
                      <div className="font-display text-lg font-semibold">
                        {m.k}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/5"
                  >
                    <Github className="size-3.5" />
                    Source
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
                  >
                    Live demo
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 [direction:ltr]">
                <p.Visual />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Project visuals ---------- */

function NlpVisual() {
  const tokens = [
    { t: "delivery", s: 0.92 },
    { t: "fast", s: 0.88 },
    { t: "broken", s: -0.74 },
    { t: "love", s: 0.95 },
    { t: "refund", s: -0.82 },
    { t: "support", s: 0.4 },
    { t: "seamless", s: 0.86 },
    { t: "delay", s: -0.61 },
  ];
  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>sentiment stream</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-success animate-pulse-glow" />
          live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {tokens.map((t, i) => (
          <motion.div
            key={t.t}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between rounded-lg bg-surface-2/70 px-3 py-2 font-mono text-xs"
          >
            <span>"{t.t}"</span>
            <span
              className={
                t.s > 0 ? "text-success" : "text-danger"
              }
            >
              {t.s > 0 ? "+" : ""}
              {t.s.toFixed(2)}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "POS", v: 64, c: "var(--color-success)" },
          { l: "NEU", v: 21, c: "var(--color-muted-foreground)" },
          { l: "NEG", v: 15, c: "var(--color-danger)" },
        ].map((b) => (
          <div key={b.l} className="rounded-lg bg-surface-2/60 p-2">
            <div className="font-mono text-[10px] uppercase text-muted-foreground">
              {b.l}
            </div>
            <div className="mt-1 h-1 rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full"
                style={{ background: b.c }}
              />
            </div>
            <div className="mt-1 font-mono text-xs">{b.v}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueVisual() {
  const bars = [42, 56, 48, 70, 65, 82, 78, 95, 88, 102, 110, 124];
  const max = Math.max(...bars);
  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>revenue / month</span>
        <span className="text-success">+18.4% YoY</span>
      </div>
      <div className="mt-5 flex h-48 items-end gap-2">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${(b / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
            className="flex-1 rounded-t"
            style={{
              background:
                "linear-gradient(180deg, var(--color-primary), var(--color-accent))",
            }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase text-muted-foreground">
        <div className="rounded-lg bg-surface-2/60 p-2">
          <div className="text-foreground text-sm font-display">$4.8M</div>
          ARR
        </div>
        <div className="rounded-lg bg-surface-2/60 p-2">
          <div className="text-foreground text-sm font-display">62</div>
          channels
        </div>
        <div className="rounded-lg bg-surface-2/60 p-2">
          <div className="text-foreground text-sm font-display">−9pp</div>
          discount leak
        </div>
      </div>
    </div>
  );
}

function ForecastVisual() {
  const w = 520;
  const h = 200;
  const actual = [22, 28, 30, 34, 33, 40, 46, 49];
  const forecast = [49, 54, 58, 63, 68, 72];
  const all = [...actual, ...forecast];
  const max = Math.max(...all);
  const min = Math.min(...all);
  const pt = (v: number, i: number) => {
    const x = (i / (all.length - 1)) * (w - 20) + 10;
    const y = h - 20 - ((v - min) / (max - min)) * (h - 50);
    return [x, y] as const;
  };
  const aPath = actual
    .map((v, i) => `${i === 0 ? "M" : "L"}${pt(v, i)[0]},${pt(v, i)[1]}`)
    .join(" ");
  const fPath = forecast
    .map((v, i) => {
      const idx = actual.length - 1 + i;
      const [x, y] = pt(v, idx);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>budget forecast</span>
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-primary" />
            actual
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-accent" />
            forecast
          </span>
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full">
        {[0.25, 0.5, 0.75].map((p) => (
          <line
            key={p}
            x1="0"
            x2={w}
            y1={h * p}
            y2={h * p}
            stroke="oklch(1 0 0 / 0.06)"
          />
        ))}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          d={aPath}
          fill="none"
          stroke="oklch(0.66 0.19 257)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          d={fPath}
          fill="none"
          stroke="oklch(0.65 0.22 295)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
