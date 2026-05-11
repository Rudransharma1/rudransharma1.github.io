import { motion } from "framer-motion";

/**
 * Pure-CSS rotating "data globe" — concentric SVG meridians + orbiting
 * data nodes. No three.js needed for static GH Pages perf.
 */
export function DataGlobe() {
  const nodes = Array.from({ length: 14 }).map((_, i) => ({
    angle: (i / 14) * Math.PI * 2,
    r: 120 + (i % 3) * 18,
    delay: i * 0.15,
  }));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* glow */}
      <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-16 rounded-full bg-accent/20 blur-3xl" />

      {/* rotating sphere */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="-160 -160 320 320" className="size-full">
          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.66 0.19 257)" stopOpacity="0.35" />
              <stop offset="60%" stopColor="oklch(0.65 0.22 295)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="0" cy="0" r="140" fill="url(#globeGrad)" />
          <circle cx="0" cy="0" r="140" fill="none" stroke="oklch(1 0 0 / 0.08)" />
          <circle cx="0" cy="0" r="110" fill="none" stroke="oklch(1 0 0 / 0.06)" />
          <circle cx="0" cy="0" r="80" fill="none" stroke="oklch(1 0 0 / 0.05)" />
          {/* meridians */}
          {[0, 30, 60, 90, 120, 150].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="0"
              rx={Math.abs(Math.cos((a * Math.PI) / 180)) * 140 + 4}
              ry="140"
              fill="none"
              stroke="oklch(1 0 0 / 0.08)"
              transform={`rotate(${a})`}
            />
          ))}
          {/* parallels */}
          {[-60, -30, 0, 30, 60].map((y) => (
            <ellipse
              key={y}
              cx="0"
              cy={y * 1.4}
              rx={Math.cos((y * Math.PI) / 180) * 140}
              ry="6"
              fill="none"
              stroke="oklch(1 0 0 / 0.06)"
            />
          ))}
        </svg>
      </div>

      {/* orbiting data nodes */}
      {nodes.map((n, i) => {
        const x = Math.cos(n.angle) * n.r;
        const y = Math.sin(n.angle) * n.r * 0.55;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + n.delay, duration: 0.5 }}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <span className="relative block size-1.5 rounded-full bg-primary">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
            </span>
          </motion.div>
        );
      })}

      {/* center HUD */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-strong relative rounded-2xl px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-success animate-pulse-glow" />
            live data feed
          </div>
          <div className="mt-1 text-foreground">analytics-core / v2.4</div>
        </div>
      </div>

      {/* floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -left-2 top-6 glass rounded-xl p-3 animate-float"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          revenue Δ
        </div>
        <div className="font-display text-lg font-semibold text-success">
          +18.4%
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -right-4 bottom-10 glass rounded-xl p-3 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          forecast acc.
        </div>
        <div className="font-display text-lg font-semibold text-foreground">
          94.2<span className="text-muted-foreground text-sm">%</span>
        </div>
      </motion.div>
    </div>
  );
}
