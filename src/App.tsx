import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { FileCode2 } from "lucide-react";

const CodeLine = ({ n, highlight, children }: { n: string; highlight?: boolean; children: ReactNode }) => (
  <div className={`grid grid-cols-[44px_1fr] gap-x-2 pr-4.5 ${highlight ? "bg-primary/6" : ""}`}>
    <span className={`select-none pr-1 text-right ${highlight ? "text-primary-bright" : "text-fg-dim"}`}>{n}</span>
    <span>{children}</span>
  </div>
);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "History", href: "#history" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-surface/70 backdrop-blur-[10px] backdrop-saturate-150 transition-colors duration-200 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-310 items-center justify-between px-[clamp(20px,4vw,56px)]">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.01em]">
          <span className="grid h-5.5 w-5.5 place-items-center rounded-[5px] border border-primary font-mono text-xs font-medium text-primary-bright">
            S
          </span>
          <span>Sharath Daniel</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden border-b border-line py-[clamp(60px,9vw,120px)] pb-[clamp(80px,10vw,140px)]"
  >
    <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />

    <div className="relative max-w-310 mx-auto px-[clamp(20px,4vw,56px)] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[clamp(40px,6vw,80px)] items-center">
      {/* left column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col gap-7"
      >
        <h1 className="font-display font-semibold text-on-surface text-[clamp(48px,7.6vw,104px)] leading-[0.95] tracking-[-0.035em]">
          <span className="block">Senior</span>
          <span className="block whitespace-nowrap">Front&#8209;End</span>
          <span className="block">
            Developer<span className="font-medium italic text-primary-bright">.</span>
          </span>
        </h1>

        <p className="max-w-[46ch] text-[clamp(15px,1.3vw,17px)] leading-[1.55] text-fg-muted">
          Building clean, responsive interfaces with <b className="font-medium text-on-surface">HTML</b>,{" "}
          <b className="font-medium text-on-surface">CSS</b>, and modern{" "}
          <b className="font-medium text-on-surface">JavaScript frameworks</b> — backed by over a decade
          of front-end experience.
        </p>

        <dl className="mt-1 grid w-max max-w-full grid-cols-2 gap-7 border-t border-line pt-7 sm:grid-cols-3">
          <div>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">Experience</dt>
            <dd className="text-sm font-medium text-on-surface">13<span className="text-primary-bright">+</span> years</dd>
          </div>
          <div>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">Focus</dt>
            <dd className="text-sm font-medium text-on-surface">Angular · React</dd>
          </div>
          <div>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">Based in</dt>
            <dd className="text-sm font-medium text-on-surface">Kerala, India</dd>
          </div>
        </dl>
      </motion.div>

      {/* right column — code card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        aria-hidden="true"
        className="relative overflow-hidden rounded-[14px] border border-line bg-linear-to-b from-surface-container to-surface-container-low shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-line bg-surface-container-low/60 px-3.5 py-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted">
            <FileCode2 size={12} className="text-primary-bright" />
            App.tsx
          </span>
          <span className="ml-auto font-mono text-[11px] text-fg-dim">main · clean</span>
        </div>

        {/* code body */}
        <div className="py-4 font-mono text-[13px] leading-[1.75]">
          <CodeLine n="01"><span className="text-fg-dim italic">{"// portfolio · v2"}</span></CodeLine>
          <CodeLine n="02">
            <span className="text-[#c084fc]">import</span> <span className="text-fg-muted">{"{"}</span> Nav<span className="text-fg-muted">,</span> Hero<span className="text-fg-muted">,</span> About <span className="text-fg-muted">{"}"}</span> <span className="text-[#c084fc]">from</span> <span className="text-accent-green">"./sections"</span><span className="text-fg-muted">;</span>
          </CodeLine>
          <CodeLine n="03">&nbsp;</CodeLine>
          <CodeLine n="04" highlight>
            <span className="text-[#c084fc]">export default function</span> <span className="text-primary-bright">App</span><span className="text-fg-muted">()</span> <span className="text-fg-muted">{"{"}</span>
          </CodeLine>
          <CodeLine n="05"><span className="pl-[1.5ch]"><span className="text-[#c084fc]">return</span> <span className="text-fg-muted">(</span></span></CodeLine>
          <CodeLine n="06"><span className="pl-[3ch]"><span className="text-fg-muted">&lt;</span><span className="text-accent-red">div</span> <span className="text-accent-orange">className</span><span className="text-fg-muted">=</span><span className="text-accent-green">"bg-ink-950"</span><span className="text-fg-muted">&gt;</span></span></CodeLine>
          <CodeLine n="07"><span className="pl-[3ch]">&nbsp;&nbsp;<span className="text-fg-muted">&lt;</span><span className="text-accent-red">Nav</span> <span className="text-fg-muted">/&gt;</span></span></CodeLine>
          <CodeLine n="08"><span className="pl-[3ch]">&nbsp;&nbsp;<span className="text-fg-muted">&lt;</span><span className="text-accent-red">Hero</span> <span className="text-fg-muted">/&gt;</span>   <span className="text-fg-dim italic">{"// ← you are here"}</span></span></CodeLine>
          <CodeLine n="09"><span className="pl-[3ch]">&nbsp;&nbsp;<span className="text-fg-muted">&lt;</span><span className="text-accent-red">About</span> <span className="text-fg-muted">/&gt;</span></span></CodeLine>
          <CodeLine n="10"><span className="pl-[3ch]"><span className="text-fg-muted">&lt;/</span><span className="text-accent-red">div</span><span className="text-fg-muted">&gt;</span></span></CodeLine>
          <CodeLine n="11"><span className="pl-[1.5ch]"><span className="text-fg-muted">);</span></span></CodeLine>
          <CodeLine n="12"><span className="text-fg-muted">{"}"}</span></CodeLine>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between border-t border-line bg-surface-container-low/40 px-4 py-2.5 font-mono text-[11px] text-fg-dim">
          <span>UTF-8 · LF · TSX</span>
          <span className="inline-flex items-center gap-3.5">
            <span><b className="font-medium text-fg-muted">Ln</b> 8</span>
            <span><b className="font-medium text-fg-muted">Col</b> 12</span>
            <span className="text-accent-green">● clean</span>
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="border-b border-line bg-surface-container-low py-[clamp(80px,9vw,120px)]">
    <div className="mx-auto grid max-w-310 grid-cols-1 items-start gap-[clamp(40px,6vw,80px)] px-[clamp(20px,4vw,56px)] lg:grid-cols-[320px_1fr]">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative isolate">
          {/* corner brackets */}
          <span className="absolute -left-1.5 -top-1.5 z-10 h-3.5 w-3.5 border-l border-t border-primary" />
          <span className="absolute -bottom-1.5 -right-1.5 z-10 h-3.5 w-3.5 border-b border-r border-primary" />
          <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-line bg-linear-to-b from-[#1a232e] to-surface-container">
            <img
              src="/photo.png"
              alt="Sharath Daniel"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 pt-1.5"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">About</span>
        <h2 className="max-w-[18ch] font-display text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.1] tracking-[-0.02em] text-on-surface">
          I build interfaces that work for real users.
        </h2>
        <p className="max-w-[62ch] text-base leading-[1.65] text-on-surface-variant">
          With over 13 years in front-end development, I focus on what matters most: writing solid HTML,
          precise CSS, and well-structured components in Angular and React. I care about responsive
          layouts, clean markup, and interfaces that feel right.
        </p>
        <p className="max-w-[62ch] text-base leading-[1.65] text-on-surface-variant">
          I also built{" "}
          <a
            href="https://sharathdaniel.com/style-base/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-primary-bright/30 pb-px text-primary-bright transition-colors hover:border-primary-bright"
          >
            Stylebase
          </a>, a minimal, token-driven SCSS architecture for building scalable design
          systems. It reflects how I think about CSS: structured, reusable, and
          framework-agnostic.
        </p>
      </motion.div>
    </div>
  </section>
);

const SKILL_COLUMNS = [
  {
    num: "01",
    title: "Core",
    items: [
      { name: "TypeScript", meta: ".ts / .tsx" },
      { name: "React", meta: "v18" },
      { name: "Angular", meta: "v17+" },
      { name: "HTML & CSS", meta: "semantic" }
    ]
  },
  {
    num: "02",
    title: "Styling & UI",
    items: [
      { name: "Tailwind CSS", meta: "utility-first" },
      { name: "SCSS", meta: "tokens" },
      { name: "Responsive Design", meta: "mobile-up" },
      { name: "Bootstrap · MUI", meta: "component libs" }
    ]
  },
  {
    num: "03",
    title: "Tooling",
    items: [
      { name: "npm · Yarn", meta: "pkg mgmt" },
      { name: "Git · GitHub", meta: "workflow" },
      { name: "Figma", meta: "handoff" },
      { name: "Stylelint · Prettier", meta: "quality" }
    ]
  }
];

const Toolkit = () => (
  <section id="skills" className="border-b border-line py-[clamp(80px,9vw,120px)]">
    <div className="mx-auto max-w-310 px-[clamp(20px,4vw,56px)]">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">Skills</span>

      <div className="mb-[clamp(40px,5vw,64px)] mt-5 grid grid-cols-1 items-end gap-6 sm:grid-cols-[1fr_auto]">
        <h2 className="font-display text-[clamp(32px,4.2vw,52px)] font-semibold leading-[1.05] tracking-[-0.02em] text-on-surface">
          What I work with.
        </h2>
        <p className="max-w-[32ch] text-sm text-fg-muted sm:text-right">
          The tools I reach for every day to build clean, responsive interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 border-t border-line md:grid-cols-3">
        {SKILL_COLUMNS.map((col) => (
          <div
            key={col.num}
            className="border-b border-line px-7 pb-8 pt-7 transition-colors last:border-r-0 hover:bg-primary/2.5 md:border-r"
          >
            <div className="mb-5 flex items-baseline justify-between">
              <h3 className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-fg-muted">
                {col.title}
              </h3>
              <span className="font-mono text-[11px] tracking-[0.12em] text-primary">{col.num}</span>
            </div>
            <ul>
              {col.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between border-b border-dashed border-line py-3 text-lg font-medium tracking-[-0.01em] text-on-surface transition-all duration-200 last:border-b-0 hover:pl-2 hover:text-primary-bright"
                >
                  {item.name}
                  <span className="font-mono text-[11px] tracking-[0.04em] text-fg-dim">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JOBS = [
  {
    date: "2020 — Present",
    duration: "5+ years",
    role: "Senior Front-End Developer",
    company: "Experion Technologies · India",
    description:
      "Building and maintaining responsive UI components in Angular and React. Writing scalable CSS architectures, collaborating with designers in Figma, and shipping features that serve real users.",
    tags: ["Angular", "React", "SCSS", "Figma"]
  },
  {
    date: "2013 — 2020",
    duration: "7 years",
    role: "UI Developer",
    company: "Verbat Technologies · India",
    description:
      "Developed pixel-perfect interfaces from design mockups using HTML, SCSS, and React. Focused on cross-browser compatibility, accessibility, and clean component architecture.",
    tags: ["HTML", "SCSS", "React", "A11y"]
  }
];

const History = () => (
  <section id="history" className="border-b border-line bg-surface-container-low py-[clamp(80px,9vw,120px)]">
    <div className="mx-auto max-w-310 px-[clamp(20px,4vw,56px)]">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">History</span>
      <h2 className="mb-[clamp(40px,5vw,64px)] mt-5 font-display text-[clamp(32px,4.2vw,52px)] font-semibold leading-[1.05] tracking-[-0.02em] text-on-surface">
        Where I've worked.
      </h2>

      <div className="relative">
        {/* timeline rail */}
        <div className="absolute bottom-0 top-1.5 left-2 w-px bg-line md:left-45" aria-hidden="true" />

        {JOBS.map((job) => (
          <div
            key={job.company}
            className="relative grid grid-cols-1 gap-2 py-7 pb-9 pl-8 [&+&]:border-t [&+&]:border-line md:grid-cols-[180px_1fr] md:gap-8 md:pl-0"
          >
            <div className="relative pt-1.5 font-mono text-xs tracking-[0.12em] text-fg-muted">
              {/* node marker */}
              <span className="absolute -left-7.25 top-2 h-2.75 w-2.75 rounded-full border-2 border-primary bg-surface-container-low shadow-[0_0_0_4px_var(--color-surface-container-low)] md:left-auto md:-right-8 md:top-2.5" />
              {job.date}
              <b className="mt-1 block font-sans text-[11px] font-medium uppercase tracking-normal text-on-surface">
                {job.duration}
              </b>
            </div>
            <div>
              <h3 className="mb-1 font-display text-[clamp(22px,2.4vw,28px)] font-semibold tracking-[-0.015em] text-on-surface">
                {job.role}
              </h3>
              <span className="mb-3.5 inline-block font-mono text-xs uppercase tracking-[0.14em] text-primary-bright">
                {job.company}
              </span>
              <p className="max-w-[62ch] leading-[1.65] text-on-surface-variant">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface pb-14 pt-12">
    <div className="mx-auto grid max-w-310 grid-cols-1 items-center gap-5 px-[clamp(20px,4vw,56px)] md:grid-cols-[1fr_auto_1fr]">
      <div className="font-semibold tracking-[-0.01em] text-on-surface">Sharath Daniel</div>
      <p className="text-[13px] text-fg-dim md:text-center">
        © {new Date().getFullYear()} Sharath Daniel · Built with care.
      </p>
      <div className="flex gap-2.5 md:justify-end">
        <a
          href="https://github.com/sharathdaniel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-8.5 w-8.5 place-items-center rounded-lg border border-line-strong text-fg-muted transition-colors hover:border-primary hover:bg-primary/6 hover:text-primary-bright"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
        </a>
        <a
          href="https://linkedin.com/in/sharathdaniel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid h-8.5 w-8.5 place-items-center rounded-lg border border-line-strong text-fg-muted transition-colors hover:border-primary hover:bg-primary/6 hover:text-primary-bright"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8.34 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.71-2.54 3.48V22H8.34V8z"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Toolkit />
      <History />
      <Footer />
    </div>
  );
}
