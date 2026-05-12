import { motion } from "framer-motion";
import { SectionLabel } from "./About";
import { Building2, TrendingUp, Truck } from "lucide-react";

const roles = [
  {
    company: "Glentel Inc.",
    title: "Data & BI Analyst",
    period: "2024 — Present",
    icon: Building2,
    summary:
      "Owning risk-based reporting and executive dashboards across retail telecom operations.",
    metrics: [
      { k: "52K+", v: "records cleaned" },
      { k: "−41%", v: "report turnaround" },
      { k: "10", v: "live BI dashboards" },
    ],
    series: [38, 42, 41, 55, 60, 58, 72, 78, 84, 81, 92, 96],
  },
  {
    company: "PathToCareer Inc.",
    title: "Business Insights Analyst",
    period: "2023 — 2024",
    icon: TrendingUp,
    summary:
      "Built funnel, retention, and revenue analytics powering product & growth decisions.",
    metrics: [
      { k: "+18%", v: "conversion lift" },
      { k: "8", v: "KPI frameworks" },
      { k: "3", v: "data products shipped" },
    ],
    series: [22, 28, 30, 34, 33, 40, 46, 49, 55, 60, 67, 72],
  },
  {
    company: "Universal Roadways",
    title: "Data Analyst",
    period: "2022 — 2023",
    icon: Truck,
    summary:
      "Set up the first analytics stack — ETL pipelines, fleet KPIs, and operational forecasting.",
    metrics: [
      { k: "−27%", v: "fuel variance" },
      { k: "100%", v: "manual → automated" },
      { k: "+24%", v: "on-time delivery" },
    ],
    series: [12, 18, 16, 22, 26, 30, 34, 32, 41, 46, 52, 58],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 / Experience</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Operating rooms for <span className="text-gradient">decisions</span>.
        </h2>

        <div className="mt-12 space-y-6">
          {roles.map((r, i) => (
            <motion.article
              key={r.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-6 md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-surface-2 ring-1 ring-border">
                      <r.icon className="size-5 text-primary" />
                    </span>
                    <div>
                      <div className="font-display text-lg font-semibold">
                        {r.company}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {r.period}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {r.title}
                  </div>
                  <p className="mt-2 text-foreground/90">{r.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {r.metrics.map((m) => (
                      <div key={m.v} className="rounded-xl bg-surface-2/60 p-3">
                        <div className="font-display text-lg font-semibold text-foreground">
                          {m.k}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Sparkline series={r.series} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkline({ series }: { series: number[] }) {
  const w = 600;
  const h = 200;
  const max = Math.max(...series);
  const min = Math.min(...series);
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * (w - 20) + 10;
    const y = h - 20 - ((v - min) / (max - min)) * (h - 50);
    return [x, y] as const;
  });
  const path = pts.reduce(
    (a, p, i) => a + `${i === 0 ? "M" : "L"}${p[0]},${p[1]} `,
    ""
  );
  const area = path + `L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;

  return (
    <div className="glass-strong h-full rounded-xl p-4">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>impact / quarter</span>
        <span className="text-success">▲ trend</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full">
        <defs>
          <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0" />
          </linearGradient>
        </defs>
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
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          d={path}
          fill="none"
          stroke="oklch(0.66 0.19 257)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          d={area}
          fill="url(#areaGrad)"
        />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="oklch(0.985 0.004 250)" />
        ))}
      </svg>
    </div>
  );
}
