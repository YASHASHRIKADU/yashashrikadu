import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiCode, FiUser } from 'react-icons/fi'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="py-24 section-light">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Who I Am</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Avatar */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-700 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                                <span className="text-7xl font-extrabold text-white">YK</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-white/5 border border-indigo-500/20 backdrop-blur-sm flex items-center justify-center">
                                <FiCode className="text-indigo-400" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ delay: 0.2 }}
                        className="space-y-5"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Hi! I'm <strong className="text-white">Yashashri Kadu</strong>, a final-year Computer
                            Science Engineering student at P. R. Pote Patil College of Engineering & Management,
                            Amravati, Maharashtra.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            I'm passionate about full-stack web development and enjoy crafting clean, scalable
                            applications that solve real-world problems. I have hands-on experience with Java,
                            React, Node.js, and modern web technologies.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <FiMapPin className="text-indigo-400" size={16} />
                                Amravati, Maharashtra, India
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <FiUser className="text-indigo-400" size={16} />
                                Open to internships & placements
                            </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                            {[['2+', 'Projects'], ['2', 'Internships'], ['7.5', 'CGPA']].map(([val, label]) => (
                                <div key={label} className="glass-dark px-5 py-3 rounded-xl text-center">
                                    <div className="text-2xl font-bold gradient-text">{val}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
