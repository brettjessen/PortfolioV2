import React from "react";
import { motion } from "framer-motion";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/brettjessen",
  github: "https://github.com/brettjessen",
  email: "mailto:jessen.brett@gmail.com",
};

const pillars = [
  {
    number: "01",
    label: "LEADERSHIP",
    title: "Operate under pressure.",
    text: "18+ years in high-volume logistics taught me how to lead people, build standards, make decisions with incomplete information, and keep complex systems moving.",
  },
  {
    number: "02",
    label: "ARTIFICIAL INTELLIGENCE",
    title: "Learn what changes next.",
    text: "I study how AI changes work, decision-making and human agency — then apply it through research, automation, analysis and practical builds.",
  },
  {
    number: "03",
    label: "DECENTRALIZATION",
    title: "Question where power sits.",
    text: "My blockchain work centers on Bitcoin, digital assets, market structure and systems that distribute ownership, verification and control.",
  },
];

const metrics = [
  ["18+", "Years in operations"],
  ["175+", "People & frontline leaders"],
  ["3,200+", "Users onboarded in Web3"],
  ["500K", "Digital-asset media audience"],
];

const experience = [
  {
    company: "UPS",
    role: "Operations Leader",
    period: "2008 — Present",
    category: "LEADERSHIP / OPERATIONS",
    summary:
      "Progressed from the hourly operation into management across Hub, Preload and Dispatch. Lead high-volume, time-critical operations where safety, service, staffing, people development and performance converge.",
    proof: [
      "Lead operations involving 175+ employees and frontline leaders",
      "Selected to assume Sort Manager responsibilities during management absences",
      "Build staffing and execution plans from forecasted volume and operational constraints",
      "Conduct audits, work with union stewards, and develop hourly employees into supervisors",
      "Direct experience in Preload, Dispatch, Saturday Air, route planning and customer service",
    ],
  },
  {
    company: "PersonaFi",
    role: "Digital Assets Researcher / Creator",
    period: "2021 — 2024",
    category: "BLOCKCHAIN / RESEARCH",
    summary:
      "Turned self-directed blockchain study into professional research, education and launch support. The work required translating technical systems and volatile markets into information people could actually use.",
    proof: [
      "Supported a PersonaFi+ launch that onboarded 3,200+ users",
      "Produced technical, fundamental and educational digital-asset content",
      "Worked across research, onboarding, engagement and community workflows",
    ],
  },
  {
    company: "CryptoBanter",
    role: "Digital Asset Researcher",
    period: "2020 — 2021",
    category: "MARKETS / DECENTRALIZATION",
    summary:
      "Researched emerging protocols, venture positioning, ecosystems and market narratives for a global digital-asset media operation under fast-moving deadlines.",
    proof: [
      "Contributed research for an audience of roughly 500,000 YouTube subscribers",
      "Analyzed projects, narratives, institutional positioning and market structure",
      "Collaborated inside a distributed international editorial team",
    ],
  },
];

const frontier = [
  {
    tag: "AI",
    title: "Artificial intelligence is an operating-system change.",
    body: "I am most interested in the layer below the product demos: how AI changes judgment, management, labor, incentives, learning and human agency. My work combines research with hands-on experimentation so the ideas are tested against reality.",
    points: ["AI + work", "Automation workflows", "Human agency", "Decision support", "Applied prototyping"],
  },
  {
    tag: "WEB3",
    title: "Decentralization is a systems-design question.",
    body: "My interest in blockchain was never limited to token prices. The durable question is what changes when verification, ownership, coordination and settlement can move away from a central gatekeeper — and where decentralization is actually worth the tradeoffs.",
    points: ["Bitcoin", "Blockchain infrastructure", "Tokenomics", "Market structure", "DePIN / decentralized systems"],
  },
];

const projects = [
  {
    index: "01",
    title: "UPS Sort Simulator",
    type: "LEADERSHIP DEMO",
    href: "/projects/ups-sort-simulator/",
    description:
      "A browser-based operations simulation where each decision advances the clock and changes safety, service, productivity and morale. Built to turn frontline judgment into an interactive experience.",
    stack: ["Operations", "Simulation Design", "JavaScript"],
  },
  {
    index: "02",
    title: "The Outsourced Mind",
    type: "AI RESEARCH",
    href: "/writings/the-outsourced-mind.pdf",
    description:
      "A research-driven examination of what happens when AI shifts from a tool we use to a cognitive layer we depend on — and the implications for human agency and independent thought.",
    stack: ["AI", "Research", "Writing"],
  },
  {
    index: "03",
    title: "Human Dividend",
    type: "AI + DECENTRALIZATION",
    href: "https://humandividendfoundation.org/",
    description:
      "A concept exploring how voluntary contributions, governance and proof-of-humanity mechanisms could distribute part of AI-era productivity toward human-centered outcomes.",
    stack: ["AI", "Governance", "Web3", "Systems Design"],
  },
  {
    index: "04",
    title: "Operations Data Dashboard",
    type: "LEADERSHIP + DATA",
    href: "/operations-dashboard.html",
    description:
      "An operations analytics case study focused on making service, productivity, exceptions and root causes visible enough to drive better management decisions.",
    stack: ["Analytics", "SQL", "Excel", "Process Improvement"],
  },
  {
    index: "05",
    title: "Crypto News",
    type: "BLOCKCHAIN TOOL",
    href: "/projects/crypto-news-widget/",
    description:
      "A searchable digital-asset news utility built around information efficiency — filtering a 24/7 market stream into something easier to scan, open and share.",
    stack: ["APIs", "JavaScript", "Market Research"],
  },
  {
    index: "06",
    title: "GoQC",
    type: "AI / PRODUCT BUILD",
    href: "https://play.google.com/apps/internaltest/4701591183248615204",
    description:
      "A local-events product concept created to solve a practical discovery problem: useful events are fragmented across websites, social platforms and community calendars.",
    stack: ["React", "AI", "Automation", "Product"],
  },
];

const research = [
  ["AI", "The Outsourced Mind", "/writings/the-outsourced-mind.pdf"],
  ["Leadership", "Execution Under Pressure", "/writings/execution-under-pressure.pdf"],
  ["Digital Assets", "Narratives vs. Fundamentals", "/writings/narratives-vs-fundamentals.pdf"],
  ["AI", "Charting the Future", "/writings/charting-the-future.pdf"],
  ["Markets", "VC Fund Holdings", "/writings/vc-fund-holdings.pdf"],
  ["Bitcoin", "Stacks / Bitcoin Ecosystem", "/writings/stacks-bitcoin-ecosystem.pdf"],
  ["Web3", "Newsletter Examples", "/writings/newsletter-examples.pdf"],
  ["Security", "Web3 Security 101", "/writings/web3-security-101.pdf"],
];

const principles = [
  ["01", "Clarity over noise", "Reduce complexity until the next decision is obvious."],
  ["02", "Systems create outcomes", "Fix incentives, information flow and process before blaming individuals."],
  ["03", "Learn fast. Apply faster.", "Knowledge becomes valuable when it changes what you can build or execute."],
  ["04", "Decentralize with purpose", "Distribution is useful when it improves resilience, ownership or trust — not as ideology alone."],
];

function Arrow({ size = 18 }) {
  return <span style={{ fontSize: size }} aria-hidden="true">↗</span>;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.28em] text-lime-300">
      <span className="h-px w-10 bg-lime-300/70" />{children}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b10]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-black tracking-tight text-white">
          <span className="grid h-8 w-8 place-items-center border border-lime-300/70 bg-lime-300/10 text-xs text-lime-300">BJ</span>
          <span>BRETT JESSEN</span>
        </a>
        <nav className="hidden items-center gap-7 text-xs font-bold tracking-wide text-slate-400 md:flex">
          <a className="transition hover:text-white" href="#leadership">LEADERSHIP</a>
          <a className="transition hover:text-white" href="#frontier">AI / WEB3</a>
          <a className="transition hover:text-white" href="#work">WORK</a>
          <a className="transition hover:text-white" href="#research">RESEARCH</a>
        </nav>
        <a href={LINKS.email} className="border border-white/20 px-4 py-2 text-xs font-black tracking-wider text-white transition hover:border-lime-300 hover:text-lime-300">CONTACT</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#070b10] px-5 pb-20 pt-32 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-36 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>LEADERSHIP × AI × DECENTRALIZATION</SectionLabel>
          <h1 className="max-w-6xl text-[clamp(3.8rem,9vw,8.5rem)] font-black uppercase leading-[0.84] tracking-[-0.055em]">
            Build people.<br />
            <span className="text-slate-500">Question systems.</span><br />
            <span className="text-lime-300">Learn what’s next.</span>
          </h1>
        </Reveal>
        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal delay={0.12}>
            <p className="max-w-3xl text-xl leading-8 text-slate-300 sm:text-2xl sm:leading-9">
              I’m an operations leader and self-directed researcher working at the intersection of <strong className="text-white">human leadership, artificial intelligence and decentralized technology.</strong>
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-wrap items-start gap-3 lg:justify-end">
            <a href="#work" className="bg-lime-300 px-5 py-3 text-sm font-black text-[#070b10] transition hover:bg-lime-200">EXPLORE WORK ↓</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-white/50">GITHUB ↗</a>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
          {metrics.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.06} className="border-white/10 p-5 even:border-l lg:border-l lg:first:border-l-0">
              <div className="text-3xl font-black text-white sm:text-4xl">{value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-[#0b1118] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>THREE TIERS</SectionLabel>
        <div className="grid border border-white/10 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} className="relative min-h-[360px] border-b border-white/10 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="text-xs font-black tracking-[0.28em] text-slate-600">{p.number}</div>
              <div className="mt-14 text-xs font-black tracking-[0.22em] text-lime-300">{p.label}</div>
              <h2 className="mt-4 text-3xl font-black tracking-tight">{p.title}</h2>
              <p className="mt-5 leading-7 text-slate-400">{p.text}</p>
              <div className="absolute bottom-7 right-7 h-3 w-3 border-b border-r border-lime-300" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="bg-[#f1efe9] px-5 py-24 text-[#0b1118] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.28em] text-violet-700"><span className="h-px w-10 bg-violet-700" />WORK HISTORY</div>
            <h2 className="text-5xl font-black uppercase leading-[.95] tracking-[-0.04em] sm:text-6xl">Leadership<br />before<br />technology.</h2>
            <p className="mt-7 max-w-md leading-7 text-slate-600">Technology changes quickly. The durable layer is still judgment: people, incentives, standards, communication and execution.</p>
          </div>
          <div className="border-t border-slate-300">
            {experience.map((item, index) => (
              <Reveal key={item.company} className="grid gap-5 border-b border-slate-300 py-8 md:grid-cols-[.35fr_.65fr]">
                <div>
                  <div className="text-[10px] font-black tracking-[.22em] text-violet-700">{item.category}</div>
                  <div className="mt-3 text-3xl font-black">{item.company}</div>
                  <div className="mt-1 font-bold text-slate-600">{item.role}</div>
                  <div className="mt-3 text-xs font-bold text-slate-400">{item.period}</div>
                </div>
                <div>
                  <p className="text-lg leading-8 text-slate-700">{item.summary}</p>
                  <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-600 sm:grid-cols-2">
                    {item.proof.map((p) => <li key={p} className="border-l-2 border-lime-500 pl-3 leading-6">{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Frontier() {
  return (
    <section id="frontier" className="bg-violet-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>THE FRONTIER</SectionLabel>
        <h2 className="max-w-5xl text-5xl font-black uppercase leading-[.92] tracking-[-.04em] sm:text-7xl">Two technologies.<br /><span className="text-violet-300">One underlying question:</span><br />who gets agency?</h2>
        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-2">
          {frontier.map((f, i) => (
            <Reveal key={f.tag} delay={i * .08} className="bg-violet-950 p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-[.25em] text-lime-300">{f.tag}</span>
                <span className="text-4xl font-black text-white/15">0{i + 1}</span>
              </div>
              <h3 className="mt-10 text-3xl font-black leading-tight sm:text-4xl">{f.title}</h3>
              <p className="mt-6 text-lg leading-8 text-violet-200/80">{f.body}</p>
              <div className="mt-8 flex flex-wrap gap-2">{f.points.map((p) => <span key={p} className="border border-violet-300/20 px-3 py-2 text-xs font-bold text-violet-100">{p}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-[#070b10] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>SELECTED WORK / DEMOS</SectionLabel>
        <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-8 md:flex-row md:items-end">
          <h2 className="text-5xl font-black uppercase tracking-[-.04em] sm:text-7xl">Ideas made visible.</h2>
          <p className="max-w-md leading-7 text-slate-400">The common thread is self-directed learning: identify a question, learn enough to test it, then make the result tangible.</p>
        </div>
        <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * .05} className="group bg-[#070b10] p-7 transition hover:bg-[#101821]">
              <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block min-h-[350px]">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black tracking-[.22em] text-lime-300">{p.type}</span>
                  <span className="text-4xl font-black text-white/10 transition group-hover:text-lime-300/30">{p.index}</span>
                </div>
                <h3 className="mt-14 text-3xl font-black tracking-tight">{p.title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{p.description}</p>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-slate-500">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <div className="mt-8 flex items-center gap-2 text-sm font-black text-white">OPEN <Arrow /></div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="bg-[#d9ff57] px-5 py-24 text-[#070b10] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4 text-[11px] font-black tracking-[0.28em]"><span className="h-px w-10 bg-[#070b10]" />RESEARCH LIBRARY</div>
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <h2 className="text-5xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-6xl">Read.<br />Think.<br />Publish.</h2>
            <p className="mt-7 max-w-sm leading-7 text-black/65">Long-form work across leadership, AI, Bitcoin, digital assets, security and market structure.</p>
          </div>
          <div className="border-t border-black/20">
            {research.map(([category, title, href], i) => (
              <Reveal key={title}>
                <a href={href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-black/20 py-5 transition hover:pl-3">
                  <span className="text-xs font-black text-black/35">0{i + 1}</span>
                  <div><div className="text-[10px] font-black tracking-[.2em] text-black/45">{category.toUpperCase()}</div><div className="mt-1 text-xl font-black">{title}</div></div>
                  <Arrow size={22} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="bg-[#0b1118] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>OPERATING PRINCIPLES</SectionLabel>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([n, title, text], i) => (
            <Reveal key={title} delay={i * .05} className="min-h-[280px] bg-[#0b1118] p-6">
              <div className="text-xs font-black text-lime-300">{n}</div>
              <h3 className="mt-14 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#070b10] px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <div className="text-xs font-black tracking-[.25em] text-lime-300">NEXT CONVERSATION</div>
            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-7xl">Leadership for systems that haven’t been built yet.</h2>
          </div>
          <div className="flex flex-col justify-end gap-3 text-sm font-black">
            <a href={LINKS.email} className="flex items-center justify-between border-b border-white/15 py-4 hover:text-lime-300">EMAIL <Arrow /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/15 py-4 hover:text-lime-300">LINKEDIN <Arrow /></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/15 py-4 hover:text-lime-300">GITHUB <Arrow /></a>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs font-bold text-slate-600 sm:flex-row sm:justify-between"><span>© 2026 BRETT JESSEN</span><span>LEADERSHIP / AI / DECENTRALIZATION</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b10] font-sans antialiased selection:bg-lime-300 selection:text-black">
      <Nav />
      <Hero />
      <Pillars />
      <Leadership />
      <Frontier />
      <Work />
      <Research />
      <Principles />
      <Footer />
    </div>
  );
}
