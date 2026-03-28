import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Terminal,
  Code2,
  Palette,
  Wrench,
  Cpu,
  Layers,
  Layout,
  Wind,
  Zap,
  Box,
  GitBranch,
  Package
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest/10">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
      <div className="text-xl font-bold text-on-surface tracking-tighter font-display">
        Sharath Daniel
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a href="#about" className="text-on-surface/70 font-medium hover:text-primary transition-colors">About</a>
        <a href="#skills" className="text-on-surface/70 font-medium hover:text-primary transition-colors">Skills</a>
        <a href="#history" className="text-on-surface/70 font-medium hover:text-primary transition-colors">History</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]"
        >
          Senior <br />
          <span className="text-gradient-hero">Front-End</span> <br />
          Developer
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-xl md:text-2xl text-on-surface-variant font-sans leading-relaxed mb-12 font-light"
        >
          Building clean, responsive interfaces with HTML, CSS, and modern JavaScript frameworks, backed by over a decade of front-end experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-3 text-on-surface/60 font-mono text-sm uppercase tracking-widest"
        >
          <Terminal size={18} className="text-primary" />
          Sharath Daniel
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative hidden lg:block"
      >
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10"></div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-surface-container-highest/20 shadow-2xl overflow-hidden">
          <div className="flex gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="font-mono text-sm space-y-2 text-on-surface/60">
            <div className="flex gap-4"><span className="text-primary">01</span> <span className="text-blue-400">export default function</span> <span className="text-yellow-400">App</span>() {"{"}</div>
            <div className="flex gap-4"><span className="text-primary">02</span> &nbsp;&nbsp;<span className="text-blue-400">return</span> (</div>
            <div className="flex gap-4"><span className="text-primary">03</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"selection:bg-primary/30"</span>&gt;</div>
            <div className="flex gap-4"><span className="text-primary">04</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">Navbar</span> /&gt;</div>
            <div className="flex gap-4"><span className="text-primary">05</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">Hero</span> /&gt;</div>
            <div className="flex gap-4"><span className="text-primary">06</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">About</span> /&gt;</div>
            <div className="flex gap-4"><span className="text-primary">07</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-400">div</span>&gt;</div>
            <div className="flex gap-4"><span className="text-primary">08</span> &nbsp;&nbsp;);</div>
            <div className="flex gap-4"><span className="text-primary">09</span> {"}"}</div>
          </div>
          <div className="mt-8 relative aspect-video rounded-lg overflow-hidden border border-surface-container-highest/30">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
              alt="Coding Illustration" 
              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-4 lg:col-start-1"
      >
        <div className="relative aspect-4/5 bg-surface-container-highest rounded overflow-hidden max-w-sm mx-auto lg:mx-0">
          <img 
            src="/photo.png"
            alt="Sharath Daniel"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 lg:col-start-6 space-y-8"
      >
        <span className="font-mono text-primary tracking-[0.3em] font-bold text-sm uppercase">About</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface leading-tight">
          I build interfaces that work for real users.
        </h2>
        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-sans font-light">
          <p>With over 13 years in front-end development, I focus on what matters most: writing solid HTML, precise CSS, and well-structured components in Angular and React. I care about responsive layouts, clean markup, and interfaces that feel right.</p>
          <p>I also built <a href="https://github.com/sharathdaniel/style-base" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stylebase</a>, a minimal, token-driven SCSS architecture for building scalable design systems. It reflects how I think about CSS: structured, reusable, and framework-agnostic.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillCard = ({ title, icon: Icon, items }: { title: string, icon: LucideIcon, items: { name: string, icon: LucideIcon }[] }) => (
  <div className="bg-surface-container-low p-8 rounded border-l-2 border-primary space-y-8 h-full">
    <div className="flex items-center gap-3">
      <Icon size={32} className="text-primary" />
      <h3 className="font-display text-xl font-bold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.name} className="group bg-surface-container p-4 rounded hover:bg-surface-container-high transition-all">
          <item.icon size={20} className="text-primary mb-2" />
          <div className="text-sm font-medium">{item.name}</div>
        </div>
      ))}
    </div>
  </div>
);

const Toolkit = () => (
  <section id="skills" className="py-32 px-8 max-w-7xl mx-auto">
    <div className="mb-20 space-y-4">
      <span className="font-mono text-primary tracking-[0.3em] font-bold text-sm uppercase block">Skills</span>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">What I Work With</h2>
      <p className="text-on-surface-variant max-w-xl font-light">The tools I reach for every day to build clean, responsive interfaces.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SkillCard
        title="Core Technologies"
        icon={Cpu}
        items={[
          { name: "TypeScript", icon: Code2 },
          { name: "React", icon: Zap },
          { name: "Angular", icon: Box },
          { name: "HTML / CSS", icon: Layout }
        ]}
      />
      <SkillCard
        title="Styling & UI"
        icon={Palette}
        items={[
          { name: "Tailwind CSS", icon: Wind },
          { name: "SCSS", icon: Layers },
          { name: "Responsive Design", icon: Layout },
          { name: "Bootstrap / MUI", icon: Layout }
        ]}
      />
      <SkillCard
        title="Tooling"
        icon={Wrench}
        items={[
          { name: "npm / Yarn", icon: Package },
          { name: "Git / GitHub", icon: GitBranch },
          { name: "Figma", icon: Palette },
          { name: "Stylelint / Prettier", icon: Code2 }
        ]}
      />
    </div>
  </section>
);

const HistoryItem = ({ date, role, company, description, isCurrent }: { date: string, role: string, company: string, description: string, isCurrent?: boolean }) => (
  <div className="relative pl-12 md:pl-0">
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-3">
        <span className={`font-mono text-sm font-bold ${isCurrent ? 'text-primary' : 'text-on-surface/60'}`}>
          {date}
        </span>
      </div>
      <div className="md:col-span-9">
        <h3 className="text-2xl font-display font-bold text-on-surface mb-2">{role}</h3>
        <div className={`${isCurrent ? 'text-primary' : 'text-on-surface/60'} font-mono text-xs tracking-widest uppercase mb-6`}>
          {company}
        </div>
        <p className="text-on-surface-variant leading-relaxed font-sans font-light">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const History = () => (
  <section id="history" className="py-32 px-8 bg-surface">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <span className="font-mono text-primary tracking-[0.3em] font-bold text-sm uppercase mb-4 block">History</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Where I've Worked</h2>
      </div>
      
      <div className="space-y-24">
        <HistoryItem
          date="2020 - PRESENT"
          role="Senior Front-End Developer"
          company="Experion Technologies, India"
          description="Building and maintaining responsive UI components in Angular and React. Writing scalable CSS architectures, collaborating with designers in Figma, and shipping features that serve real users."
          isCurrent
        />
        <HistoryItem
          date="2013 - 2020"
          role="UI Developer"
          company="Verbat Technologies, India"
          description="Developed pixel-perfect interfaces from design mockups using HTML, SCSS, and React. Focused on cross-browser compatibility, accessibility, and clean component architecture."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-20 px-8 bg-surface-container-low border-t border-surface-container-highest/10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
      <div className="space-y-2 text-center md:text-left">
        <div className="font-display tracking-tighter text-on-surface text-xl font-bold">Sharath Daniel</div>
        <p className="font-sans text-sm text-on-surface/60 max-w-xs font-light">
          © {new Date().getFullYear()} Sharath Daniel.
        </p>
      </div>
      
      <div className="flex gap-8">
        <a href="https://github.com/sharathdaniel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-on-surface/60 font-sans text-sm hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
        <a href="https://linkedin.com/in/sharathdaniel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-on-surface/60 font-sans text-sm hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
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
