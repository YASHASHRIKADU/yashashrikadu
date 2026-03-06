import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiCalendar, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'SettleUp - An Expense & Bill Splitter Web App',
        date: 'February 2026',
        description:
            'A full-stack expense splitting application that helps groups track shared expenses and calculate balances in real-time.',
        features: [
            'Group management with multiple split options',
            'Real-time balance updates',
            'Automated settlement suggestions',
        ],
        techs: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
        live: 'https://settleup-omega.vercel.app/login',
        gradient: 'from-indigo-500 to-violet-600',
        techBadge: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
    },
    {
        title: 'Student Result Management System',
        date: 'March 2025',
        description:
            'A web application that automates calculation of student totals and percentages with search and filter functionality.',
        features: [
            'Automated result calculation',
            'Search and filter functionality',
            'Efficient student record retrieval',
        ],
        techs: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/YASHASHRIKADU/Student-Result-Management-System',
        gradient: 'from-violet-500 to-purple-600',
        techBadge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    },
]

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="work" className="py-24 section-light">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What I've Built</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Highlighted projects demonstrating my full-stack development capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(0,0,0,0.5)' }}
                            className="glass-dark rounded-2xl overflow-hidden flex flex-col"
                        >
                            {/* Card header banner */}
                            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                            <div className="p-7 flex flex-col flex-1 gap-4">
                                {/* Title + GitHub icon */}
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                                    <a
                                        href={project.live || project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={project.live ? `${project.title} Live Demo` : `${project.title} GitHub`}
                                        className="flex-shrink-0 p-2 rounded-full bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 text-slate-400 transition-all duration-200"
                                    >
                                        {project.live ? <FiExternalLink size={18} /> : <FiGithub size={18} />}
                                    </a>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <FiCalendar size={12} />
                                    {project.date}
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                                <ul className="space-y-1.5">
                                    {project.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
                                    {project.techs.map((t) => (
                                        <span
                                            key={t}
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${project.techBadge}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
