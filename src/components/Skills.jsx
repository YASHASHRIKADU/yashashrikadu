import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
    {
        category: 'Languages',
        emoji: '⬤',
        skills: ['Java', 'JavaScript', 'TypeScript'],
        color: 'from-blue-500 to-indigo-500',
        light: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    },
    {
        category: 'Frameworks',
        emoji: '⬤',
        skills: ['React.js', 'Angular', 'Bootstrap'],
        color: 'from-indigo-500 to-violet-500',
        light: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    },
    {
        category: 'Databases',
        emoji: '⬤',
        skills: ['MySQL', 'MongoDB'],
        color: 'from-violet-500 to-purple-500',
        light: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    },
    {
        category: 'Web Technologies',
        emoji: '⬤',
        skills: ['HTML', 'CSS'],
        color: 'from-orange-400 to-rose-500',
        light: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
    },
    {
        category: 'Tools & IDEs',
        emoji: '⬤',
        skills: ['Git', 'GitHub', 'Eclipse', 'IntelliJ IDEA', 'VS Code'],
        color: 'from-emerald-500 to-teal-500',
        light: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
}

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="expertise" className="py-24 section-tinted">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What I Know</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        My <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Technologies and tools I work with to build great products.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                            className="glass-dark p-6 rounded-2xl cursor-default"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-lg shadow-md`}>
                                    {group.emoji}
                                </div>
                                <h3 className="font-semibold text-slate-200">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.08 }}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${group.light}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
