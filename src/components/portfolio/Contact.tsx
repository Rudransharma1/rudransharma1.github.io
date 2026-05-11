import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SectionLabel } from "./About";

const prompts = [
  "› opening secure channel...",
  "› handshake complete.",
  "› type your message below.",
];

export function Contact() {
  const [shown, setShown] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (shown < prompts.length) {
      const t = setTimeout(() => setShown((s) => s + 1), 500);
      return () => clearTimeout(t);
    }
  }, [shown]);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>06 / Contact</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Open a <span className="text-gradient">secure channel</span>.
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Available for analytics, BI, and AI engineering roles, contracts, and
          collaborations.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong mt-10 overflow-hidden rounded-2xl"
        >
          <div className="flex items-center gap-3 border-b border-border bg-surface-2/40 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-danger/80" />
              <span className="size-2.5 rounded-full bg-warning/80" />
              <span className="size-2.5 rounded-full bg-success/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              rudransh@contact ~ %
            </span>
          </div>

          <div className="p-5 font-mono text-sm leading-7">
            {prompts.slice(0, shown).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  i === prompts.length - 1
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {p}
              </motion.div>
            ))}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:rudransharma2022@gmail.com?subject=Contact&body=${encodeURIComponent(msg)}`;
              }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="text-success">›</span>
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="hi rudransh, let's talk about..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
              >
                send
                <Send className="size-3" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            <ContactLink
              icon={Mail}
              label="Email"
              value="rudransharma2022@gmail.com"
              href="mailto:rudransharma2022@gmail.com"
            />
            <ContactLink
              icon={Linkedin}
              label="LinkedIn"
              value="/in/rudransh-sharma"
              href="https://linkedin.com/"
            />
            <ContactLink
              icon={Github}
              label="GitHub"
              value="@rudransh"
              href="https://github.com/"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/5"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-surface-2 ring-1 ring-border">
        <Icon className="size-4 text-primary" />
      </span>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm">{value}</div>
      </div>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="font-mono">
          © {new Date().getFullYear()} Rudransh Sharma — built with intent.
        </div>
        <div className="font-mono uppercase tracking-widest">
          analytics-core / v2.4
        </div>
      </div>
    </footer>
  );
}
