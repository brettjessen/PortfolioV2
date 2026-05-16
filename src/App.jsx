import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "15+", label: "Years in operations leadership" },
  { value: "3,200+", label: "Users onboarded through Web3 launch" },
  { value: "500k", label: "Audience contribution in digital asset media" },
  { value: "4", label: "Core lanes: Ops, Data, Research, Tech" },
];

const strengths = [
  {
    icon: "briefcase",
    title: "Operations execution",
    body: "Experienced in hub operations, supervisor development, standards, compliance, planning, and daily production performance.",
  },
  {
    icon: "chart",
    title: "Data-driven improvement",
    body: "Uses metrics, reporting, and process analysis to identify bottlenecks, improve accountability, and turn ambiguity into action.",
  },
  {
    icon: "brain",
    title: "Digital asset research",
    body: "Builds clear research around emerging technologies, token ecosystems, market structure, and investor education.",
  },
];

const experience = [
  {
    company: "UPS",
    role: "Hub Supervisor / Operations Leader",
    tag: "Operations Leadership",
    summary:
      "Led teams in a high-pressure logistics environment focused on service, safety, production, compliance, and supervisor development.",
    bullets: [
      "Supported operational planning, execution standards, training, and compliance documentation.",
      "Collaborated across functions to improve production flow, dispatch accuracy, and service outcomes.",
      "Used daily reporting and operational metrics to identify issues and reinforce accountability.",
    ],
  },
  {
    company: "PersonaFi",
    role: "Digital Assets Researcher / Creator",
    tag: "Research + Community Growth",
    summary:
      "Produced digital asset research, educational content, tutorials, and launch support for a large Web3 audience.",
    bullets: [
      "Created project research, technical analysis, tutorials, and app-facing educational content.",
      "Supported a PersonaFi+ NFT launch that onboarded more than 3,200 users.",
      "Helped translate complex crypto concepts into accessible, responsible investor education.",
    ],
  },
  {
    company: "CryptoBanter",
    role: "Digital Asset Researcher",
    tag: "Market Research + Editorial",
    summary:
      "Contributed research for a large crypto media operation through project analysis, market research, and editorial collaboration.",
    bullets: [
      "Researched emerging tokens, ecosystems, venture capital holdings, and on-chain narratives.",
      "Worked with a globally distributed team across editorial and live-show preparation workflows.",
      "Focused on clarity, responsible education, and separating signal from hype.",
    ],
  },
];

const skills = [
  {
    category: "Leadership",
    items: ["Decision Making", "Communication", "Emotional Intelligence", "Relationship Building", "Change Management"],
  },
  {
    category: "Operations",
    items: ["Planning", "Implementation", "Risk Management", "Standards", "Compliance", "Training"],
  },
  {
    category: "Research",
    items: ["Digital Assets", "Technical Analysis", "Fundamental Analysis", "On-chain Research", "Data Analytics"],
  },
  {
    category: "Technical",
    items: ["HTML", "CSS", "JavaScript", "Python", "Java", "Automation"],
  },
];

const research = [
  {
    label: "AI + Society",
    title: "Charting the Future",
    body: "A leadership-focused look at AI, incentives, productivity, and how emerging technology may reshape work.",
  },
  {
    label: "Market Analysis",
    title: "VC Fund Holdings",
    body: "Research framework for identifying institutional positioning, project narratives, and potential market signals.",
  },
  {
    label: "Project Research",
    title: "Stacks / Bitcoin Ecosystem",
    body: "A project-level review combining technology, team, use case, market fit, and ecosystem direction.",
  },
  {
    label: "Education",
    title: "Web3 Security 101",
    body: "A practical beginner guide to wallet safety, scams, risk management, and operational security.",
  },
];

const audienceCards = [
  { icon: "users", title: "For recruiters", body: "Show leadership scope, operational responsibility, and measurable outcomes." },
  { icon: "trend", title: "For Web3 readers", body: "Show research judgment, responsible analysis, and ability to simplify complexity." },
  { icon: "shield", title: "For collaborators", body: "Show integrity, consistency, and practical execution across multiple domains." },
];

const iconPaths = {
  arrowRight: [
    <path key="a1" d="M5 12h14" />,
    <path key="a2" d="m13 6 6 6-6 6" />,
  ],
  briefcase: [
    <path key="b1" d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />,
    <path key="b2" d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />,
    <path key="b3" d="M4 12h16" />,
  ],
  chart: [
    <path key="c1" d="M4 19V5" />,
    <path key="c2" d="M4 19h16" />,
    <path key="c3" d="M8 16v-5" />,
    <path key="c4" d="M12 16V8" />,
    <path key="c5" d="M16 16v-9" />,
  ],
  brain: [
    <path key="br1" d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0-2 7 4 4 0 0 0 4 5h1" />,
    <path key="br2" d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 2 7 4 4 0 0 1-4 5h-1" />,
    <path key="br3" d="M9 3v18" />,
    <path key="br4" d="M15 3v18" />,
    <path key="br5" d="M9 9H6" />,
    <path key="br6" d="M15 9h3" />,
  ],
  check: [
    <path key="ch1" d="M20 6 9 17l-5-5" />,
    <circle key="ch2" cx="12" cy="12" r="10" />,
  ],
  chevronRight: [<path key="cr1" d="m9 18 6-6-6-6" />],
  external: [
    <path key="e1" d="M14 3h7v7" />,
    <path key="e2" d="M10 14 21 3" />,
    <path key="e3" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />,
  ],
  github: [
    <path key="g1" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
  ],
  linkedin: [
    <path key="l1" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />,
    <path key="l2" d="M2 9h4v12H2z" />,
    <circle key="l3" cx="4" cy="4" r="2" />,
  ],
  mail: [
    <path key="m1" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />,
    <path key="m2" d="m22 7-10 7L2 7" />,
  ],
  menu: [
    <path key="me1" d="M4 6h16" />,
    <path key="me2" d="M4 12h16" />,
    <path key="me3" d="M4 18h16" />,
  ],
  shield: [
    <path key="s1" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    <path key="s2" d="m9 12 2 2 4-4" />,
  ],
  trend: [
    <path key="t1" d="M3 17 9 11l4 4 8-8" />,
    <path key="t2" d="M14 7h7v7" />,
  ],
  users: [
    <path key="u1" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />,
    <circle key="u2" cx="9" cy="7" r="4" />,
    <path key="u3" d="M22 21v-2a4 4 0 0 0-3-3.87" />,
    <path key="u4" d="M16 3.13a4 4 0 0 1 0 7.75" />,
  ],
  x: [
    <path key="x1" d="M18 6 6 18" />,
    <path key="x2" d="m6 6 12 12" />,
  ],
  zap: [<path key="z1" d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" />],
};

function Icon({ name, size = 22, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name] || iconPaths.zap}
    </svg>
  );
}

function validateContent() {
  const errors = [];

  if (navItems.length < 5) errors.push("Expected at least five navigation items.");
  if (!metrics.some((metric) => metric.value === "15+")) errors.push("Expected 15+ leadership metric.");
  if (!experience.some((item) => item.company === "UPS")) errors.push("Expected UPS experience item.");
  if (!skills.every((group) => Array.isArray(group.items) && group.items.length > 0)) {
    errors.push("Each skill group must include at least one item.");
  }
  if (!research.every((item) => item.label && item.title && item.body)) {
    errors.push("Each research card must include a label, title, and body.");
  }

  return errors;
}

const contentValidationErrors = validateContent();
if (contentValidationErrors.length > 0) {
  throw new Error(`Portfolio content validation failed: ${contentValidationErrors.join(" ")}`);
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, body, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.24em] ${dark ? "text-blue-300" : "text-blue-700"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {body && <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{body}</p>}
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm">
              BJ
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-slate-950">Brett Jessen</p>
              <p className="mt-1 text-xs text-slate-500">Operations • Data • Digital Assets</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" type="button">
            {open ? <Icon name="x" size={24} /> : <Icon name="menu" size={24} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(15,23,42,0.09),transparent_26%),linear-gradient(180deg,#ffffff,#f8fafc)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge>Operations Leader</Badge>
              <Badge>Digital Asset Researcher</Badge>
              <Badge>Self-directed Builder</Badge>
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Operations leader combining execution, data, and emerging technology.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I bring 15+ years of operational leadership together with digital asset research, technical learning, and systems thinking to help teams solve complex problems and move faster with discipline.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#experience" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-800">
                View Experience <Icon name="arrowRight" className="ml-2 h-4 w-4" />
              </a>
              <a href="#research" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                Read Research
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              <div className="border-b border-slate-100 bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Positioning</p>
                <h2 className="mt-3 text-3xl font-black">Lead. Analyze. Build.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A portfolio for leadership roles, research credibility, and technical collaboration.
                </p>
              </div>
              <div className="grid gap-4 p-6">
                {strengths.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                      <Icon name={item.icon} size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-4xl font-black tracking-tight text-blue-800">{metric.value}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">About</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Built at the intersection of leadership and learning.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My background is grounded in operational leadership: managing people, improving standards, solving production problems, and making decisions in environments where execution matters.
            </p>
            <p>
              Outside of operations, I study digital assets, automation, AI, and market structure. I like translating complex systems into clear frameworks that people can actually use.
            </p>
            <div className="grid gap-4 pt-3 sm:grid-cols-3">
              {["Integrity-first", "Systems thinker", "Execution focused"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                  <Icon name="check" className="h-5 w-5 text-blue-700" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experience"
            title="A résumé rewritten as evidence."
            body="Use each role to show the problem, the work, and the result. This makes the page stronger for recruiters, partners, and collaborators."
            dark
          />

          <div className="grid gap-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{item.tag}</p>
                    <h3 className="mt-3 text-2xl font-black text-white">{item.company}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.role}</p>
                  </div>
                  <div>
                    <p className="text-lg leading-8 text-slate-200">{item.summary}</p>
                    <div className="mt-5 grid gap-3">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 rounded-2xl bg-white/[0.05] p-4 text-sm leading-6 text-slate-300">
                          <Icon name="chevronRight" className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Organized by how people evaluate you."
          body="The current skill set is strongest when grouped by leadership, operations, research, and technical execution."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                <Icon name="zap" size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Research"
            title="Turn articles into a research library."
            body="Use short cards with topic labels and takeaways so visitors understand your thinking before they click."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {research.map((item) => (
              <article key={item.title} className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">{item.label}</span>
                  <Icon name="external" className="h-5 w-5 text-slate-400 transition group-hover:text-blue-700" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl shadow-slate-900/20">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.35),transparent_30%),linear-gradient(135deg,#0f172a,#1e3a8a)] p-8 text-white sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Positioning Statement</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">A credible bridge between operations and emerging technology.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100">
                This site should make one thing obvious: you are not just interested in technology. You know how to lead, communicate, analyze, and execute.
              </p>
            </div>
            <div className="grid gap-4 p-8 sm:p-12">
              {audienceCards.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-3xl bg-white/[0.06] p-5 text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-800">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Interested in leadership, research, or technical collaboration?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Use this section to give visitors a clear next step. Keep it simple: email, LinkedIn, GitHub, and selected writing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:jessenbrett01@gmail.com" className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800">
                <Icon name="mail" size={18} /> Email Brett
              </a>
              <a href="https://www.linkedin.com/" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="linkedin" size={18} /> LinkedIn
              </a>
              <a href="https://github.com/" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="github" size={18} /> GitHub
              </a>
              <a href="#research" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="external" size={18} /> Research
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Brett Jessen. All rights reserved.</p>
          <p>Built for leadership, research, and technical credibility.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
