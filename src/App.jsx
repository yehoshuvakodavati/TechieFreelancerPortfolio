import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Braces, CheckCircle2, Code2, Database, Github, Linkedin, Mail, Menu, Server, X, Zap } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Hospital Management System',
    category: 'FULL-STACK APPLICATION',
    description: 'A full-stack hospital management project developed during my software engineering internship at SuperOrg. Built to bring application workflows, frontend functionality, backend services, and data management together.',
    tags: ['React', 'Backend APIs', 'Database'],
    icon: 'hospital',
    link: '',
    note: 'Internship project',
  },
  {
    number: '02',
    title: 'stockM',
    category: 'MARKET DATA & AI PROJECT',
    description: 'A personal project exploring historical stock market data, feature engineering, and AI workflows. Development has included retrieval-augmented generation (RAG), vector databases, and model experimentation.',
    tags: ['Python', 'Data Processing', 'RAG'],
    icon: 'stock',
    link: 'https://github.com/yehoshuvakodavati/stockM',
    note: 'Personal project',
  },
  {
    number: '03',
    title: 'Smart EV Charging Station',
    category: 'IOT & CLOUD DASHBOARD',
    description: 'An IoT project explored during my Emertxe internship, connecting an ESP32-based setup to cloud dashboards using MQTT and ThingsBoard, with sensor and power-monitoring concepts.',
    tags: ['ESP32', 'MQTT', 'ThingsBoard'],
    icon: 'iot',
    link: '',
    note: 'Internship project',
  },
]
const services = [
  { icon: Code2, title: 'Full-Stack Web Development', description: 'Responsive web interfaces connected to backend logic and databases.' },
  { icon: Server, title: 'Backend & REST APIs', description: 'Backend features, API endpoints, integrations, and application logic.' },
  { icon: Database, title: 'Database Integration', description: 'SQL database connectivity, data models, and application data flows.' },
  { icon: Zap, title: 'Bug Fixes & Improvements', description: 'Debugging existing applications, resolving issues, and improving features.' },
]
const skills = ['Java', 'Spring Boot', 'REST APIs', 'React', 'Node.js', 'Express.js', 'Python', 'SQL', 'Git & GitHub', 'Docker', 'FastAPI', 'Tailwind CSS']

function SectionHeading({ eyebrow, title, description }) {
  return <div className="mb-10 max-w-2xl">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
  </div>
}
function ProjectIcon({ type }) {
  const Icon = type === 'stock' ? Database : type === 'iot' ? Zap : Braces
  return <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300"><Icon size={23} /></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <div className="min-h-screen overflow-hidden bg-[#080d18] text-slate-200">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d18]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">YK</span><span className="font-semibold tracking-wide text-white">Kodavati <span className="text-cyan-300">Yehoshuva</span></span></a>
        <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 p-2 md:hidden">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#080d18] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {[['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Services', '#services'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="text-sm text-slate-300 transition hover:text-cyan-300">{label}</a>)}
        </div>
      </nav>
    </header>
    <main>
      <section id="home" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200"><span className="h-2 w-2 rounded-full bg-cyan-300" />Open to suitable freelance projects</div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Software Engineer · Full-Stack Developer</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">I build useful<span className="block text-cyan-300">digital products.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">I'm a Computer Science engineering student and software development intern with experience building web applications and exploring AI and IoT projects. I help turn clear requirements into practical software.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200">Explore my work <ArrowRight size={18} /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-300/60">Let's talk <ArrowUpRight size={17} /></a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" />Backend & APIs</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" />Full-stack projects</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/5 blur-2xl" /><div className="relative rounded-[2rem] border border-white/10 bg-[#101827] p-5 shadow-2xl sm:p-7">
          <div className="flex items-center gap-2 border-b border-white/10 pb-5"><span className="h-3 w-3 rounded-full bg-rose-400/80" /><span className="h-3 w-3 rounded-full bg-amber-300/80" /><span className="h-3 w-3 rounded-full bg-emerald-300/80" /><span className="ml-auto text-xs text-slate-500"></span></div>
          <div className="space-y-5 py-7 font-mono text-sm leading-7"><p className="text-slate-500">A little about me</p><p><span className="text-fuchsia-300"></span> <span className="text-cyan-200"></span> = {''}</p><p className="pl-5"><span className="text-slate-400">focus:</span> <span className="text-amber-200">'Backend & Web'</span>,</p><p className="pl-5"><span className="text-slate-400">build:</span> [<span className="text-emerald-200">'APIs'</span>, <span className="text-emerald-200">'Apps'</span>],</p><p className="pl-5"><span className="text-slate-400">mindset:</span> <span className="text-amber-200">'Just Building'</span>,</p><p>{''}</p><div className="rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-4"><p className="text-xs text-slate-500">CURRENT MISSION</p><p className="mt-1 font-sans font-semibold text-cyan-200">Just Building and Improving the Techies</p></div></div>
          <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-500"><span>React · Java · APIs</span><Braces size={18} className="text-cyan-300" /></div>
        </div></div>
      </section>
      <section id="about" className="border-y border-white/5 bg-white/[0.02]"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center"><SectionHeading eyebrow="A little about me" title="Engineering mindset. Practical execution." /><div className="space-y-4 leading-8 text-slate-400"><p>I'm pursuing a B.Tech in Computer Science and Engineering at ANITS. My interests include backend engineering, full-stack development, and building software that solves real problems.</p><p>During my software engineering internship at SuperOrg, I worked on a full-stack hospital management system. Through Emertxe, I explored IoT concepts and cloud dashboards for a smart EV charging station project.</p><p>I value clear requirements, maintainable code, regular communication, and honest delivery commitments.</p></div></div></section>
      <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8"><SectionHeading eyebrow="Selected work" title="Projects that show how I build." description="A selection of internship and personal projects. Ask me for a walkthrough or more implementation details." /><div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => <article key={project.number} className="group flex flex-col rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"><div className="flex items-center justify-between"><ProjectIcon type={project.icon} /><span className="font-mono text-sm text-slate-600">{project.number}</span></div><p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-cyan-300">{project.category}</p><h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-300">{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5"><span className="text-xs text-slate-500">{project.note}</span>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"><ArrowUpRight size={19} /></a> : <span className="text-xs text-slate-500" title="Add a public project link after checking permissions">Link coming soon</span>}</div></article>)}
      </div><p className="mt-5 text-sm leading-6 text-slate-500">Before publishing, verify every technology listed against the actual code and add public demos or repositories only when you have permission to share them.</p></section>
      <section id="skills" className="border-y border-white/5 bg-white/[0.02]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><SectionHeading eyebrow="Technical toolkit" title="Tools I work with." description="Technologies relevant to my development work and learning. I discuss each project's actual stack individually." /><div className="flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-xl border border-white/10 bg-[#101827] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">{skill}</span>)}</div><p className="mt-5 text-xs leading-6 text-slate-500">Keep only skills you can confidently explain, demonstrate, and use for the specific work you accept.</p></div></section>
      <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8"><SectionHeading eyebrow="Freelance services" title="What I can help you build." description="Small, clearly scoped projects are a practical way to start working with freelance clients." /><div className="grid gap-4 sm:grid-cols-2">{services.map(({ icon: Icon, title, description }) => <div key={title} className="rounded-2xl border border-white/10 bg-[#101827] p-6 transition hover:border-cyan-300/30"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon size={22} /></div><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{description}</p></div>)}</div></section>
      <section className="border-y border-white/5 bg-white/[0.02]"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><SectionHeading eyebrow="How I work" title="Clear scope. Clear communication." /><div className="grid gap-7 sm:grid-cols-3">{[['01', 'Understand', 'Confirm requirements, priorities, and acceptance criteria.'], ['02', 'Build', 'Break work into manageable steps and share progress.'], ['03', 'Deliver', 'Test the agreed scope, provide handover notes, and discuss next steps.']].map(([number, title, description]) => <div key={number} className="border-l-2 border-cyan-300/40 pl-5"><p className="font-mono text-sm text-cyan-300">{number}</p><h3 className="mt-3 text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{description}</p></div>)}</div></div></section>
      <section id="contact" className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8"><p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Have a project in mind?</p><h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">Let's build something useful.</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">Tell me what you're trying to build, what is currently blocking you, and what outcome you need. We can discuss the scope and a realistic delivery plan.</p><a href="mailto:YOUR_EMAIL@example.com?subject=Freelance%20Project%20Inquiry" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-200"><Mail size={19} />Email me <ArrowUpRight size={18} /></a><div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-400"><a href="https://github.com/yehoshuvakodavati" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Github size={18} />GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300"><Linkedin size={18} />LinkedIn</a></div></section>
    </main>
    <footer className="border-t border-white/10 px-5 py-7 text-center text-xs text-slate-500">© {new Date().getFullYear()} Yehoshuva Kodavati · Built with React and Tailwind CSS.</footer>
  </div>
}
