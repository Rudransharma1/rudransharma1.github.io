import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, Cpu, Database, Zap } from "lucide-react";
import { SectionLabel } from "./About";

function useTick(ms = 1500) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return t;
}

function rand(seed: number) {
  return Math.abs(Math.sin(seed * 9301 + 49297) * 233280) % 1;
}

export function CommandCenter() {
  const tick = useTick(1400);

  const kpis = [
    { l: "Active Models", v: 24 + (tick % 3), d: "+2", icon: Cpu },
    {
      l: "Pipelines / hr",
      v: 1320 + Math.floor(rand(tick) * 60),
      d: "+12%",
      icon: Database,
    },
    {
      l: "Latency (ms)",
      v: 84 + Math.floor(rand(tick + 1) * 12),
      d: "−6%",
      icon: Zap,
    },
    {
      l: "Anomalies",
      v: 1 + Math.floor(rand(tick + 2) * 2),
      d: "live",
      icon: AlertTriangle,
    },
  ];

  const series = Array.from({ length: 60 }).map(
    (_, i) => 30 + Math.sin((i + tick) * 0.4) * 10 + rand(i + tick) * 14
  );
  const max = Math.max(...series);

  return (
    <section id="command" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>05 / Analytics Command Center</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              The <span className="text-gradient">terminal</span> for live
              intelligence.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success animate-pulse-glow" />
            streaming
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {k.l}
                </span>
                <k.icon className="size-3.5 text-primary" />
              </div>
              <div className="mt-2 font-display text-3xl font-semibold tabular-nums">
                {k.v}
              </div>
              <div className="font-mono text-[11px] text-success">{k.d}</div>
            </motion.div>
          ))}
        </div>

        {/* Bento */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <div className="glass relative overflow-hidden rounded-2xl p-5 lg:col-span-4">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <Activity className="size-3.5 text-primary" />
                throughput / 60s window
              </span>
              <span className="text-foreground">{Math.floor(series[series.length - 1])} ops/s</span>
            </div>
            <div className="relative mt-4 h-56 w-full overflow-hidden rounded-xl bg-surface-2/40">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan" />
              <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="size-full">
                <defs>
                  <linearGradient id="liveArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={
                    series
                      .map((v, i) => {
                        const x = (i / (series.length - 1)) * 600;
                        const y = 180 - (v / max) * 160;
                        return `${i === 0 ? "M" : "L"}${x},${y}`;
                      })
                      .join(" ") + ` L600,200 L0,200 Z`
                  }
                  fill="url(#liveArea)"
                />
                <path
                  d={series
                    .map((v, i) => {
                      const x = (i / (series.length - 1)) * 600;
                      const y = 180 - (v / max) * 160;
                      return `${i === 0 ? "M" : "L"}${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="oklch(0.66 0.19 257)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              system health
            </div>
            <div className="mt-4 space-y-3">
              {[
                { l: "ETL Cluster", v: 96 },
                { l: "Warehouse", v: 88 },
                { l: "ML Inference", v: 74 },
                { l: "API Gateway", v: 99 },
              ].map((s) => (
                <div key={s.l}>
                  <div className="flex justify-between text-xs">
                    <span>{s.l}</span>
                    <span className="font-mono text-muted-foreground">
                      {s.v}%
                    </span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.v}%`,
                        background:
                          s.v > 90
                            ? "var(--color-success)"
                            : s.v > 80
                              ? "var(--color-primary)"
                              : "var(--color-warning)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-5 lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              anomaly feed
            </div>
            <ul className="mt-3 space-y-2 font-mono text-xs">
              {[
                { t: "00:42", c: "danger", m: "Forecast drift > 6σ on SKU-882" },
                { t: "00:51", c: "warning", m: "Latency spike → eu-west-2" },
                { t: "01:08", c: "success", m: "Auto-rebalance complete" },
                { t: "01:24", c: "muted-foreground", m: "Snapshot warehouse OK" },
              ].map((a, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-surface-2/50 px-3 py-2"
                >
                  <span className="text-muted-foreground">{a.t}</span>
                  <span
                    className={`size-1.5 rounded-full bg-${a.c} ${a.c === "danger" ? "animate-pulse-glow" : ""}`}
                    style={{
                      background:
                        a.c === "danger"
                          ? "var(--color-danger)"
                          : a.c === "warning"
                            ? "var(--color-warning)"
                            : a.c === "success"
                              ? "var(--color-success)"
                              : "var(--color-muted-foreground)",
                    }}
                  />
                  <span className="text-foreground/90">{a.m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-5 lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              model leaderboard
            </div>
            <table className="mt-3 w-full text-xs">
              <thead className="font-mono text-[10px] uppercase text-muted-foreground">
                <tr>
                  <th className="text-left">model</th>
                  <th className="text-right">acc</th>
                  <th className="text-right">drift</th>
                  <th className="text-right">qps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["forecast-v4", "94.2", "0.01", "182"],
                  ["sentiment-bert", "92.4", "0.04", "318"],
                  ["churn-xgb", "89.8", "0.02", "96"],
                  ["pricing-elasticity", "91.1", "0.03", "44"],
                ].map((r, i) => (
                  <tr
                    key={i}
                    className="border-t border-border/60 font-mono"
                  >
                    <td className="py-2">{r[0]}</td>
                    <td className="py-2 text-right text-success">{r[1]}</td>
                    <td className="py-2 text-right text-muted-foreground">
                      {r[2]}
                    </td>
                    <td className="py-2 text-right">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
