import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

const contactInfo = [
    {
        icon: FiPhone,
        label: 'Phone',
        value: '+91-8010558095',
        href: 'tel:+918010558095',
        color: 'from-blue-500 to-indigo-500',
    },
    {
        icon: FiMail,
        label: 'Email',
        value: 'yashashrirkadu@gmail.com',
        href: 'mailto:yashashrirkadu@gmail.com',
        color: 'from-indigo-500 to-violet-500',
    },
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/yashashrikadu',
        href: 'https://www.linkedin.com/in/yashashri-r-kadu/',
        color: 'from-violet-500 to-purple-500',
    },
    {
        icon: FiGithub,
        label: 'GitHub',
        value: 'github.com/yashashrikadu',
        href: 'https://github.com/yashashrikadu',
        color: 'from-purple-500 to-pink-500',
    },
]

export default function Contact() {
    const ref = useRef(null)
    const formRef = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const emailjs = await import('@emailjs/browser')
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            )
            setStatus('success')
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <section id="contact" className="py-24 section-light">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Feel free to reach out for opportunities, collaborations, or a friendly chat.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ x: 6, boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
                                className="flex items-center gap-4 glass-dark rounded-2xl p-5 group cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                                    <item.icon className="text-white" size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</div>
                                    <div className="text-slate-300 font-medium text-sm mt-0.5 truncate group-hover:text-indigo-400 transition-colors">
                                        {item.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-dark rounded-2xl p-8"
                    >
                        <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-3xl mb-4">✅</div>
                                <h4 className="font-bold text-white text-lg">Message Sent!</h4>
                                <p className="text-slate-400 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-3xl mb-4">❌</div>
                                <h4 className="font-bold text-white text-lg">Something went wrong!</h4>
                                <p className="text-slate-400 text-sm mt-1">Please try again or email me directly.</p>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">Your Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all resize-none"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    whileHover={status !== 'sending' ? { scale: 1.03, y: -1 } : {}}
                                    whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={16} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16 pt-8 border-t border-white/5"
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                            YK
                        </div>
                        <span className="text-slate-400 font-semibold text-sm">Yashashri Kadu</span>
                    </div>
                    <p className="text-slate-600 text-xs">
                        © 2025 Starfall Portfolio · Built with React &amp; Framer Motion
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
