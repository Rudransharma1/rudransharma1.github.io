import { motion } from "framer-motion";
import { Brain, Database, LineChart, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Data Intelligence Engineer",
    body: "Build the plumbing — SQL warehouses, ETL flows, governance — so insight becomes inevitable.",
  },
  {
    icon: LineChart,
    title: "Business Insights Analyst",
    body: "Translate raw signals into executive narratives, KPIs, and decisions that move revenue.",
  },
  {
    icon: Brain,
    title: "Analytics-First Problem Solver",
    body: "Frame ambiguous business problems as measurable, testable, model-ready hypotheses.",
  },
  {
    icon: Workflow,
    title: "Automation Systems Thinker",
    body: "Replace recurring manual reporting with self-healing, event-driven data products.",
  },
];

const timeline = [
  { year: "2021", label: "Foundations — GTU, BTech in CSE" },
  { year: "2022", label: "Universal Roadways — first BI ownership" },
  { year: "2023", label: "PathToCareer — analytics across product & growth" },
  { year: "2024", label: "Humber College — Business Insights and Analytics (Completed)" },
  { year: "2025", label: "Glentel Inc. — risk-based reporting at scale" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>01 / About</SectionLabel>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-semibold tracking-tight md:text-5xl"
            >
              I make data behave like{" "}
              <span className="text-gradient">infrastructure</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-muted-foreground md:text-lg"
            >
              Data and BI Analyst with 2+ years across automation, risk-based
              reporting, and executive analytics. Completed a Graduate
              Certificate in Business Insights and Analytics at Humber College
              in 2024, enhancing skills in data analysis, business intelligence, and
              decision-making. Expert in SQL, Python, and Power BI — cleaning
              50K+ records and shipping dashboards decision-makers actually open
              every morning.
            </motion.p>

            {/* timeline */}
            <ol className="mt-10 space-y-4 border-l border-border pl-5">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[27px] top-1.5 size-2 rounded-full bg-primary ring-4 ring-primary/20" />
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t.year}
                  </div>
                  <div className="text-sm text-foreground">{t.label}</div>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
                <p.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold"
          >
            Business Insights and Analytics at Humber College
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            This graduate certificate program equips students with practical skills in business, database management, programming, data analysis, interpretation, decision-making, and communications. The program consists of 21 core courses and prepares graduates for roles such as business analytics specialist, data analytics manager, and marketing analyst across various industries including finance, healthcare, and marketing.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-border" />
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}
