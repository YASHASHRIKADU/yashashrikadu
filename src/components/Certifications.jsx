import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar } from 'react-icons/fi'

const certs = [
    {
        title: 'Java Programming Certification',
        issuer: 'NASSCOM',
        year: '2024',
        color: 'from-blue-500 to-indigo-600',
        badge: 'bg-blue-500/10 border-blue-500/25 text-blue-300',
        icon: '⬤',
    },
    {
        title: 'HTML, CSS, JavaScript & Bootstrap',
        issuer: 'Infosys Springboard',
        year: '2025',
        color: 'from-violet-500 to-purple-600',
        badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
        icon: '⬤',
    },
]

const softSkills = [
    { label: 'Adaptability', icon: '●' },
    { label: 'Growth Mindset', icon: '●' },
]

export default function Certifications() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="certifications" className="py-24 section-tinted">
            <div className="max-w-4xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Credentials</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        Certifications &amp; <span className="gradient-text">Soft Skills</span>
                    </h2>
                </motion.div>

                {/* Certifications */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                            className="glass-dark rounded-2xl overflow-hidden"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shadow-md flex-shrink-0`}>
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cert.badge}`}>
                                                {cert.issuer}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                                <FiCalendar size={11} />
                                                {cert.year}
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-white text-base mt-2 leading-snug">{cert.title}</h3>
                                        <div className="flex items-center gap-1.5 mt-2 text-xs text-indigo-400 font-medium">
                                            <FiAward size={12} />
                                            Certified
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="glass-dark rounded-2xl p-6"
                >
                    <h3 className="font-bold text-slate-200 mb-5 text-lg">Soft Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {softSkills.map((sk) => (
                            <motion.div
                                key={sk.label}
                                whileHover={{ scale: 1.06 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10"
                            >
                                <span className="text-2xl">{sk.icon}</span>
                                <span className="font-semibold text-slate-200">{sk.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
