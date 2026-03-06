import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
    {
        degree: 'Bachelor of Engineering in Computer Science & Engineering',
        institution: 'P. R. Pote Patil College of Engineering & Management',
        grade: 'CGPA: 7.5 / 10',
        period: 'Aug 2022 – May 2026',
        location: 'Amravati, Maharashtra',
        type: 'BE / B.Tech',
        color: 'from-indigo-500 to-violet-600',
        badge: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
    },
    {
        degree: 'Higher Secondary Certificate (Class XII)',
        institution: 'M. F. M. Sitaramji Choudhari Science Mahavidyalaya',
        grade: 'Percentage: 62.50%',
        period: '2021 – 2022',
        location: 'Warud, Maharashtra',
        type: 'HSC',
        color: 'from-violet-500 to-purple-600',
        badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    },
    {
        degree: 'Secondary School Certificate (Class X)',
        institution: 'Srimati Jankidevi Gandhi Kanya Vidyalaya',
        grade: 'Percentage: 86.80%',
        period: '2019 – 2020',
        location: 'Warud, Maharashtra',
        type: 'SSC',
        color: 'from-purple-500 to-pink-600',
        badge: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    },
]

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="education" className="py-24 section-light">
            <div className="max-w-4xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Academic Background</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        My <span className="gradient-text">Education</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent -translate-x-px hidden md:block" />

                    <div className="space-y-10">
                        {educationData.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#09090f] shadow-lg items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 12px rgba(99,102,241,0.5)' }}
                                />

                                <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                                    <motion.div
                                        whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}
                                        className="glass-dark rounded-2xl overflow-hidden"
                                    >
                                        <div className={`h-1.5 bg-gradient-to-r ${edu.color}`} />
                                        <div className="p-6">
                                            <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${edu.badge}`}>{edu.type}</span>
                                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                                    <FiCalendar size={11} />
                                                    {edu.period}
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-white text-base mt-2 leading-snug">{edu.degree}</h3>
                                            <div className="flex items-center gap-1.5 text-sm text-indigo-400 font-medium mt-1">
                                                <FiBook size={13} />
                                                {edu.institution}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                                <FiMapPin size={11} />
                                                {edu.location}
                                            </div>
                                            <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-semibold">
                                                {edu.grade}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty column for alternating layout */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
