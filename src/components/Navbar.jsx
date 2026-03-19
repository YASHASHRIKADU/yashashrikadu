import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#09090f]/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Avatar */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
                        YK
                    </div>
                    <span className="font-semibold text-slate-200 text-base hidden sm:block">
                        Yashashri Kadu
                    </span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right: Download CV */}
                <div className="hidden md:flex items-center gap-3">
                    <motion.a
                        href="https://drive.google.com/file/d/13mEvhx5Y0nOiVrLwKKxlxHtzGIkIPCJZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-medium rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-200"
                    >
                        <FiDownload size={14} />
                        Resume
                    </motion.a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 text-slate-400 hover:text-indigo-400"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-[#0d0d1f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block px-4 py-2 text-sm font-medium text-slate-400 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1pBoOUT2aiake8SdvB2EvNPAt76otGu11/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 mt-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-medium rounded-full w-fit"
                    >
                        <FiDownload size={14} />
                        Resume
                    </a>
                </motion.div>
            )}
        </motion.nav>
    )
}
