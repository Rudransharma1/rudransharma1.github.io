import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "$ boot --system=analytics-core",
  "› loading neural pipelines ............ ok",
  "› streaming KPI feeds ................. ok",
  "› calibrating forecasting models ...... ok",
  "› mounting BI dashboards .............. ok",
  "› welcome, operator.",
];

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        const n = Math.min(100, p + Math.random() * 9 + 3);
        return n;
      });
    }, 110);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (shown < lines.length) {
      const t = setTimeout(() => setShown((s) => s + 1), 220);
      return () => clearTimeout(t);
    }
  }, [shown]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setHide(true);
        setTimeout(onDone, 700);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_50%,oklch(0.66_0.19_257/0.18),transparent_60%)]" />

          <div className="relative w-[min(680px,92vw)] glass-strong rounded-2xl p-6 md:p-8 glow-primary">
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-danger/80" />
                <span className="size-2.5 rounded-full bg-warning/80" />
                <span className="size-2.5 rounded-full bg-success/80" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                rudransh@analytics-core ~ %
              </span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                secure session
              </span>
            </div>

            <div className="mt-4 font-mono text-sm leading-7 min-h-[180px]">
              {lines.slice(0, shown).map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    i === 0
                      ? "text-foreground"
                      : i === lines.length - 1
                        ? "text-primary"
                        : "text-muted-foreground"
                  }
                >
                  {l}
                </motion.div>
              ))}
              <span className="inline-block w-2 h-4 bg-primary animate-pulse-glow align-middle" />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <span>initializing intelligence layer</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px] text-muted-foreground">
                <span>cpu 38%</span>
                <span>mem 1.2gb</span>
                <span>net ▲ 84mb/s</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
