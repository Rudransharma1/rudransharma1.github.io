import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const skills = [
  { name: "SQL", level: 95, group: "Data" },
  { name: "Python", level: 90, group: "Data" },
  { name: "Power BI", level: 92, group: "BI" },
  { name: "Tableau", level: 85, group: "BI" },
  { name: "ETL", level: 88, group: "Data" },
  { name: "Predictive Modeling", level: 82, group: "AI" },
  { name: "NLP", level: 78, group: "AI" },
  { name: "KPI Analytics", level: 90, group: "BI" },
  { name: "Data Governance", level: 80, group: "Data" },
  { name: "Forecasting", level: 84, group: "AI" },
  { name: "Business Intelligence", level: 92, group: "BI" },
  { name: "Data Automation", level: 88, group: "Data" },
];

const radar = [
  { axis: "SQL", v: 0.95 },
  { axis: "Python", v: 0.9 },
  { axis: "BI", v: 0.92 },
  { axis: "ETL", v: 0.88 },
  { axis: "ML", v: 0.8 },
  { axis: "NLP", v: 0.78 },
  { axis: "Forecast", v: 0.84 },
  { axis: "Govern.", v: 0.8 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>02 / Skills</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              The <span className="text-gradient">stack</span> behind the
              insight.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Skill bars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass group rounded-xl p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {s.level}
                  </span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    }}
                  />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.group}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass relative lg:col-span-5 flex flex-col items-center justify-center rounded-2xl p-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              capability radar
            </div>
            <Radar data={radar} />
            <div className="mt-4 grid grid-cols-3 gap-3 w-full text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div>
                <div className="text-foreground text-base font-display">
                  4.2x
                </div>
                report speed
              </div>
              <div>
                <div className="text-foreground text-base font-display">
                  −62%
                </div>
                manual hours
              </div>
              <div>
                <div className="text-foreground text-base font-display">
                  99.1%
                </div>
                data accuracy
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Radar({ data }: { data: { axis: string; v: number }[] }) {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const R = 110;
  const n = data.length;
  const points = data.map((d, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * R * d.v, cy + Math.sin(a) * R * d.v] as const;
  });
  const poly = points.map((p) => p.join(",")).join(" ");

  return (
    <svg width={size} height={size} className="mt-2">
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((s) => (
        <circle
          key={s}
          cx={cx}
          cy={cy}
          r={R * s}
          fill="none"
          stroke="oklch(1 0 0 / 0.08)"
        />
      ))}
      {data.map((d, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={d.axis}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(a) * R}
            y2={cy + Math.sin(a) * R}
            stroke="oklch(1 0 0 / 0.06)"
          />
        );
      })}
      <motion.polygon
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        points={poly}
        fill="url(#radarFill)"
        stroke="oklch(0.66 0.19 257)"
        strokeWidth="1.5"
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {data.map((d, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const lx = cx + Math.cos(a) * (R + 18);
        const ly = cy + Math.sin(a) * (R + 18);
        return (
          <text
            key={d.axis}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground"
            style={{ fontSize: 10, fontFamily: "JetBrains Mono" }}
          >
            {d.axis}
          </text>
        );
      })}
    </svg>
  );
}
