import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/portfolio/Preloader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { CommandCenter } from "@/components/portfolio/CommandCenter";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, oklch(0.66 0.19 257 / 0.08), transparent 60%)`,
      }}
    />
  );
}

function Index() {
  const [loaded, setLoaded] = useState(false);
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Preloader onDone={() => setLoaded(true)} />
      <CursorGlow />
      <Nav />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 600ms ease",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CommandCenter />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
