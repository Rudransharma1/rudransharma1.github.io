import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { DataGlobe } from "./DataGlobe";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pt-32 pb-16"
    >
      {/* ambient lighting */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 -z-10 size-[600px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-success/70" />
              <span className="relative size-1.5 rounded-full bg-success" />
            </span>
            Available for analytics & AI engineering roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Engineering{" "}
            <span className="text-gradient">Intelligence</span>{" "}
            Through Data.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Data Analytics • Business Intelligence • AI Systems • Predictive
            Insights. I design dashboards, models, and automation that turn
            messy data into executive decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-xl" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/5"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Sparkles className="size-4" />
              Let's talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3 font-mono"
          >
            {[
              { k: "50K+", v: "records cleaned" },
              { k: "2+ yrs", v: "BI delivery" },
              { k: "12", v: "production dashboards" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-xl p-3 text-left"
              >
                <div className="text-xl font-semibold text-foreground">
                  {s.k}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative lg:col-span-5"
        >
          <DataGlobe />
        </motion.div>
      </div>

      {/* ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-background/40 py-2 backdrop-blur">
        <div className="flex animate-ticker whitespace-nowrap font-mono text-[11px] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-10 px-5">
              {[
                ["SQL", "+12%"],
                ["PYTHON", "+08%"],
                ["POWER BI", "+21%"],
                ["TABLEAU", "+05%"],
                ["ETL PIPELINES", "+33%"],
                ["FORECASTING", "+18%"],
                ["NLP", "+27%"],
                ["KPI OPS", "+09%"],
                ["DATA GOVERNANCE", "+04%"],
                ["AUTOMATION", "+44%"],
              ].map(([k, v]) => (
                <span key={k} className="flex items-center gap-2">
                  <span className="text-foreground">{k}</span>
                  <span className="text-success">{v}</span>
                  <span className="opacity-30">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
