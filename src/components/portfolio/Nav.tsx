import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "command", label: "Command Center" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-sm font-bold text-primary-foreground">
              R
            </span>
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md -z-10" />
          </span>
          <span className="font-display text-sm font-medium tracking-tight">
            Rudransh<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform hover:scale-[1.02]"
          >
            <Mail className="size-3.5" />
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
