import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'

function StarfallCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId
        let width, height

        const resize = () => {
            width = canvas.width = canvas.offsetWidth
            height = canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const NUM_STARS = 90
        const stars = Array.from({ length: NUM_STARS }, () => ({
            x: Math.random() * (width || 1200),
            y: Math.random() * (height || 800),
            len: Math.random() * 90 + 40,
            speed: Math.random() * 2.5 + 0.8,
            opacity: Math.random() * 0.6 + 0.25,
            size: Math.random() * 1.8 + 0.4,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, width, height)
            stars.forEach((star) => {
                star.x += star.speed * 0.6
                star.y += star.speed

                if (star.y > height + 20) {
                    star.x = Math.random() * width
                    star.y = -20
                }
                if (star.x > width + 20) {
                    star.x = -20
                    star.y = Math.random() * height
                }

                const grad = ctx.createLinearGradient(
                    star.x, star.y,
                    star.x - star.len * 0.5, star.y - star.len
                )
                grad.addColorStop(0, `rgba(129,140,248,${star.opacity})`)
                grad.addColorStop(1, 'rgba(129,140,248,0)')

                ctx.beginPath()
                ctx.moveTo(star.x, star.y)
                ctx.lineTo(star.x - star.len * 0.5, star.y - star.len)
                ctx.strokeStyle = grad
                ctx.lineWidth = star.size
                ctx.lineCap = 'round'
                ctx.stroke()

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size * 0.9, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(192,132,252,${star.opacity * 0.85})`
                ctx.fill()
            })
            animationId = requestAnimationFrame(draw)
        }

        draw()
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            id="starfall-canvas"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        />
    )
}

const titles = ['Full Stack Developer']

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #09090f 0%, #0e0b1e 50%, #0d0d1f 100%)',
            }}
        >
            <StarfallCanvas />

            {/* Floating orbs */}
            <div
                className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
            />
            <div
                className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
                >
                    Yashashri{' '}
                    <span className="gradient-text">Kadu</span>
                </motion.h1>

                {/* Animated titles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 mb-6"
                >
                    {titles.map((t) => (
                        <span
                            key={t}
                            className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-white/5 text-indigo-300 text-sm font-semibold backdrop-blur-sm"
                        >
                            {t}
                        </span>
                    ))}
                </motion.div>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    I am a Computer Science Engineering student passionate about building
                    scalable web applications and solving real-world problems through
                    software development.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        href="#work"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-200"
                    >
                        Explore My Work
                        <FiArrowRight size={16} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-slate-200 font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-200"
                    >
                        <FiMail size={16} />
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-16 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
