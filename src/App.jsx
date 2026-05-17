import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/brettjessen";
const GITHUB_URL = "https://www.github.com/brettjessen";
const RESUME_URL = "/resume.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "18+", label: "Years in operations leadership" },
  { value: "3,200+", label: "Users onboarded through Web3 launch" },
  { value: "500k", label: "Audience contribution in digital asset media" },
  { value: "4", label: "Core lanes: Ops, Data, Research, Tech" },
];

const systemNodes = [
  { label: "Operations", x: 250, y: 68 },
  { label: "Data", x: 130, y: 180 },
  { label: "Leadership", x: 370, y: 180 },
  { label: "Research", x: 250, y: 284 },
  { label: "Automation", x: 100, y: 360 },
  { label: "Digital Assets", x: 405, y: 360 },
];

const systemLines = [
  [250, 82, 130, 180],
  [250, 82, 370, 180],
  [130, 180, 250, 284],
  [370, 180, 250, 284],
  [130, 180, 100, 360],
  [370, 180, 405, 360],
  [250, 284, 100, 360],
  [250, 284, 405, 360],
];

const visitorMessages = {
  recruiter: {
    label: "Recruiter",
    title: "Operational leader with measurable execution discipline.",
    body: "18+ years of leadership experience, supervisor development, standards execution, compliance focus, and process improvement in high-pressure logistics environments.",
    proof: "Best fit: operations leadership, analytics-adjacent management, process improvement, and technology-forward team roles.",
  },
  collaborator: {
    label: "Collaborator",
    title: "A practical builder who can turn ideas into systems.",
    body: "Combine execution, communication, systems thinking, and technical curiosity across operations, automation, Web3 research, and data-driven workflows.",
    proof: "Best fit: early product concepts, automation workflows, research projects, local platforms, and emerging technology experiments.",
  },
  web3: {
    label: "Web3 Reader",
    title: "Responsible crypto research without the hype cycle.",
    body: "Focus on clear education, market structure, project research, token narratives, technical analysis, and separating signal from noise.",
    proof: "Best fit: project research, educational writing, community onboarding, market analysis, and long-form explainers.",
  },
  builder: {
    label: "Builder",
    title: "Self-directed learner moving from concept to implementation.",
    body: "Study tools, test workflows, build public projects, and use AI, automation, and code to turn ideas into useful prototypes.",
    proof: "Best fit: GitHub projects, portfolio builds, automation tools, dashboards, AI workflows, and product experiments.",
  },
};

const experience = [
  {
    company: "UPS",
    role: "Hub Supervisor / Operations Leader",
    tag: "Operations Leadership",
    challenge:
      "Lead people and production in a fast-moving logistics environment where safety, service, dispatch accuracy, and accountability all matter.",
    action:
      "Managed supervisors and operational teams, supported standards, reviewed reports, planned execution, reinforced training, and coordinated across functions.",
    result:
      "Built a leadership base grounded in decision-making, emotional intelligence, production metrics, compliance, and daily execution.",
    skills: ["Leadership", "Planning", "Compliance", "Training", "Performance Metrics"],
  },
  {
    company: "PersonaFi",
    role: "Digital Assets Researcher / Creator",
    tag: "Research + Community Growth",
    challenge:
      "Help users understand crypto projects, technical analysis, and Web3 opportunities without creating FOMO-driven content.",
    action:
      "Created research, tutorials, app content, launch support, and community-facing education for a large digital asset audience.",
    result:
      "Supported a PersonaFi+ NFT launch that onboarded 3,200+ users and helped translate complex topics into usable education.",
    skills: ["Research", "Education", "Technical Analysis", "Community", "Content"],
  },
  {
    company: "CryptoBanter",
    role: "Digital Asset Researcher",
    tag: "Market Research + Editorial",
    challenge:
      "Provide timely, useful research for a large global crypto media operation across fast-changing market narratives.",
    action:
      "Researched emerging tokens, venture capital holdings, ecosystems, on-chain narratives, and editorial topics with a distributed team.",
    result:
      "Strengthened market research judgment, editorial collaboration, narrative analysis, and cross-cultural communication workflows.",
    skills: ["Market Analysis", "Editorial", "Web3", "On-chain Research", "Narratives"],
  },
];

const projects = [
  {
    title: "Human Dividend",
    status: "Concept / nonprofit idea",
    href: "https://humandividendfoundation.org/",
    problem:
      "AI and automation may reduce traditional employment and tax bases while increasing productivity concentration.",
    build:
      "A voluntary contribution and voting mechanism where agents, companies, and platforms can fund human-centered distributions.",
    tools: ["Product Strategy", "Web3", "Governance", "Proof of Humanity"],
  },
  {
    title: "Operations Data Dashboard",
    status: "Portfolio direction",
    href: "/operations-dashboard.html",
    problem:
      "Operational performance is easier to improve when teams can see service, productivity, and exceptions clearly.",
    build:
      "A UPS-style analytics case study showing KPIs, trends, root-cause categories, and improvement priorities.",
    tools: ["Excel", "SQL", "Power BI", "Process Analysis"],
  },
  {
    title: "Crypto Research Library",
    status: "Content system",
    problem:
      "Crypto research often gets buried in feeds and hype cycles instead of being organized by durable frameworks.",
    build:
      "A categorized research section for market analysis, project reviews, security education, and AI/Web3 commentary.",
    tools: ["Research", "Writing", "Web3", "Education"],
  },
  {
    title: "Automation Experiments",
    status: "Active learning lane",
    problem:
      "Small workflows waste time when data collection, reporting, and content tasks stay manual.",
    build:
      "Prototype automations using spreadsheets, scripts, AI tools, and web workflows to reduce repetitive effort.",
    tools: ["Python", "VBA", "AI", "Workflow Design"],
  },
];

const skills = [
  {
    category: "Leadership",
    items: [
      "Decision Making",
      "Communication",
      "Emotional Intelligence",
      "Relationship Building",
      "Change Management",
    ],
  },
  {
    category: "Operations",
    items: ["Planning", "Implementation", "Risk Management", "Standards", "Compliance", "Training"],
  },
  {
    category: "Research",
    items: [
      "Digital Assets",
      "Technical Analysis",
      "Fundamental Analysis",
      "On-chain Research",
      "Data Analytics",
    ],
  },
  {
    category: "Technical",
    items: ["HTML", "CSS", "JavaScript", "Python", "Java", "Automation"],
  },
];

const research = [
  {
    category: "AI",
    label: "AI + Society",
    title: "Charting the Future",
    body: "A leadership-focused look at AI, incentives, productivity, and how emerging technology may reshape work.",
  },
  {
    category: "Market Analysis",
    label: "Market Analysis",
    title: "VC Fund Holdings",
    body: "Research framework for identifying institutional positioning, project narratives, and potential market signals.",
  },
  {
    category: "Crypto",
    label: "Project Research",
    title: "Stacks / Bitcoin Ecosystem",
    body: "A project-level review combining technology, team, use case, market fit, and ecosystem direction.",
  },
  {
    category: "Security",
    label: "Education",
    title: "Web3 Security 101",
    body: "A practical beginner guide to wallet safety, scams, risk management, and operational security.",
  },
  {
    category: "Leadership",
    label: "Operations Thinking",
    title: "Execution Under Pressure",
    body: "Notes on accountability, supervisor development, communication, and translating goals into daily execution.",
  },
  {
    category: "Crypto",
    label: "Digital Assets",
    title: "Narratives vs. Fundamentals",
    body: "A research lens for separating durable project value from short-term market attention and hype cycles.",
  },
];

const principles = [
  "Clarity over noise",
  "Execution beats theory",
  "Integrity compounds",
  "Systems create outcomes",
  "Learn fast, apply faster",
];

const iconPaths = {
  arrowRight: [
    <path key="a1" d="M5 12h14" />,
    <path key="a2" d="m13 6 6 6-6 6" />,
  ],
  check: [
    <path key="c1" d="M20 6 9 17l-5-5" />,
    <circle key="c2" cx="12" cy="12" r="10" />,
  ],
  chevronRight: [<path key="cr1" d="m9 18 6-6-6-6" />],
  external: [
    <path key="e1" d="M14 3h7v7" />,
    <path key="e2" d="M10 14 21 3" />,
    <path key="e3" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />,
  ],
  file: [
    <path key="f1" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />,
    <path key="f2" d="M14 2v6h6" />,
    <path key="f3" d="M8 13h8" />,
    <path key="f4" d="M8 17h6" />,
  ],
  github: [
    <path
      key="g1"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />,
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
  spark: [
    <path key="s1" d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />,
    <path key="s2" d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />,
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
  const visitorKeys = Object.keys(visitorMessages);
  const researchCategories = new Set(research.map((item) => item.category));

  if (navItems.length < 5) errors.push("Expected at least five navigation items.");
  if (!navItems.some((item) => item.href === "#projects")) errors.push("Expected Projects navigation item.");
  if (!metrics.some((metric) => metric.value === "18+")) errors.push("Expected 18+ leadership metric.");
  if (systemNodes.length < 6 || systemLines.length < 6) errors.push("Expected animated systems map nodes and lines.");
  if (visitorKeys.length < 4) errors.push("Expected at least four visitor selector states.");
  if (!experience.some((item) => item.company === "UPS")) errors.push("Expected UPS experience item.");
  if (projects.length < 4) errors.push("Expected at least four selected projects.");
  if (researchCategories.size < 5) errors.push("Expected multiple filterable research categories.");
  if (!skills.every((group) => Array.isArray(group.items) && group.items.length > 0)) {
    errors.push("Each skill group must include at least one item.");
  }

  return errors;
}

const validationErrors = validateContent();

if (validationErrors.length > 0) {
  console.warn(`Portfolio content validation warning: ${validationErrors.join(" ")}`);
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
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.24em] ${dark ? "text-blue-300" : "text-blue-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

function SystemsMap() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-slate-900/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.32),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:34px_34px]" />

      <motion.svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 440" initial="hidden" animate="visible">
        {systemLines.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(147,197,253,0.42)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
            transition={{ duration: 1.2, delay: index * 0.08 }}
          />
        ))}
      </motion.svg>

      {systemNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
        >
          <motion.div
            className="h-4 w-4 rounded-full bg-blue-300 shadow-[0_0_30px_rgba(147,197,253,0.95)]"
            animate={{ scale: [1, 1.45, 1], opacity: [0.78, 1, 0.78] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
          />
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {node.label}
          </span>
        </motion.div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">Systems Map</p>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          A visual summary of the site: operations discipline, research judgment, data thinking, and technology execution.
        </p>
      </div>
    </div>
  );
}

function VisitorSelector() {
  const [active, setActive] = useState("recruiter");
  const current = visitorMessages[active];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Choose your lane"
        title="Different visitors need different proof."
        body=""
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {Object.entries(visitorMessages).map(([key, item]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`rounded-3xl border p-5 text-left transition ${
                active === key
                  ? "border-blue-300 bg-blue-50 shadow-lg shadow-blue-900/10"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <p className={`text-sm font-black ${active === key ? "text-blue-800" : "text-slate-950"}`}>
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.title}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-blue-200">
              <Icon name="spark" size={25} />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-slate-950">{current.title}</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">{current.body}</p>
            <div className="mt-6 rounded-3xl bg-slate-50 p-5 text-sm font-medium leading-7 text-slate-700">
              {current.proof}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experience[activeIndex];

  return (
    <section id="experience" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="An interactive career timeline."
          body="Instead of a static list, each role is framed as challenge, action, result, and transferable skills."
          dark
        />

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
            {experience.map((item, index) => (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`mb-3 flex w-full items-center justify-between rounded-2xl p-4 text-left transition last:mb-0 ${
                  activeIndex === index ? "bg-white text-slate-950" : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                }`}
              >
                <span>
                  <span className="block text-sm font-black">{item.company}</span>
                  <span className={`mt-1 block text-xs ${activeIndex === index ? "text-blue-800" : "text-slate-400"}`}>
                    {item.tag}
                  </span>
                </span>
                <Icon name="chevronRight" size={20} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.company}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{active.tag}</p>
              <h3 className="mt-3 text-3xl font-black text-white">{active.company}</h3>
              <p className="mt-2 text-sm text-slate-300">{active.role}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  ["Challenge", active.challenge],
                  ["Action", active.action],
                  ["Result", active.result],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-3xl bg-white/[0.06] p-5">
                    <p className="text-sm font-black text-blue-200">{title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-300/10 px-3 py-1.5 text-xs font-bold text-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Project Examples"
        title="Here are some of my projects."
        body="In my free-time I enjoy learning new skills and applying them to real world use cases."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            onClick={() => {
              if (!project.href) return;
              if (project.href.startsWith("http")) {
                window.open(project.href, "_blank", "noopener,noreferrer");
              } else {
                window.location.href = project.href;
              }
            }}
            className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10 ${
              project.href ? "cursor-pointer" : ""
            }`}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {project.status}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{project.title}</h3>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                <Icon name="spark" size={22} />
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Problem</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{project.problem}</p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">What I built / would build</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{project.build}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(research.map((item) => item.category)))], []);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredResearch = activeCategory === "All" ? research : research.filter((item) => item.category === activeCategory);

  return (
    <section id="research" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research"
          title="A filterable research library."
          body=""
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredResearch.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.2 }}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">{item.label}</span>
                  <Icon name="external" className="h-5 w-5 text-slate-400 transition group-hover:text-blue-700" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="mb-3 w-72 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/20"
          >
            <p className="text-sm font-black text-slate-950">Connect with Brett</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Fast links for email, social profiles, resume, and research.</p>
            <div className="mt-4 grid gap-2">
              <a href="mailto:jessenbrett01@gmail.com" className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">
                <Icon name="mail" size={17} /> Email Brett
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800">
                <Icon name="linkedin" size={17} /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800">
                <Icon name="github" size={17} /> GitHub
              </a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800">
                <Icon name="file" size={17} /> Resume
              </a>
              <a href="#research" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800">
                <Icon name="external" size={17} /> Research
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-slate-900/25 transition hover:-translate-y-0.5 hover:bg-blue-800"
      >
        {open ? <Icon name="x" size={18} /> : <Icon name="mail" size={18} />} {open ? "Close" : "Connect"}
      </button>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

          <a href="#contact" className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 md:inline-flex">
            Contact
          </a>

          <button className="md:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation" type="button">
            {mobileOpen ? <Icon name="x" size={24} /> : <Icon name="menu" size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(15,23,42,0.09),transparent_26%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
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
              I bring 18+ years of operational leadership together with digital asset research, technical learning, and systems thinking to help teams solve complex problems and move faster with discipline.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                View Projects <Icon name="arrowRight" className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800"
              >
                Explore Experience
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white"
              >
                <Icon name="file" className="mr-2 h-4 w-4" /> View Resume
              </a>
            </div>
          </motion.div>

          <SystemsMap />
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
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Built at the intersection of leadership and learning.
            </h2>
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

      <VisitorSelector />
      <ExperienceTimeline />
      <ProjectsSection />

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Organized by how people evaluate you."
          body="The skill set is strongest when grouped by leadership, operations, research, and technical execution."
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

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl shadow-slate-900/20">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.35),transparent_30%),linear-gradient(135deg,#0f172a,#1e3a8a)] p-8 text-white sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Operating Principles</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Professional standards with builder energy.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100">
              </p>
            </div>

            <div className="grid gap-4 p-8 sm:p-12">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-4 rounded-3xl bg-white/[0.06] p-5 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-800">
                    <Icon name="check" size={20} />
                  </div>
                  <p className="font-black">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ResearchSection />

      <section id="contact" className="border-t border-slate-200 bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Interested in a leadership, research, or technical collaboration?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:jessenbrett01@gmail.com" className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800">
                <Icon name="mail" size={18} /> Email Brett
              </a>

              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="linkedin" size={18} /> LinkedIn
              </a>

              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="github" size={18} /> GitHub
              </a>

              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800">
                <Icon name="file" size={18} /> Resume
              </a>

              <a href="#research" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-800 sm:col-span-2">
                <Icon name="external" size={18} /> Research
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Brett Jessen. All rights reserved.</p>
          <p>Operations • Data • Digital Assets • Automation</p>
        </div>
      </footer>

      <FloatingContact />
    </main>
  );
}

export default App;
