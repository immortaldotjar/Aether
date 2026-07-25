import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import Globe from '../Globe'
import Button from '../Button'

const STATS = [
    { value: '99.98%', label: 'Network uptime' },
    { value: '142ms', label: 'Median command latency' },
    { value: '1,240+', label: 'Spacecraft under watch' },
    { value: '24/7', label: 'Mission ops coverage' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
}

const Hero = () => {
    return (
        <section className="relative overflow-hidden border-b border-outline-variant bg-grid">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Globe />
            </div>

            <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 55% at 50% 40%, transparent 0%, var(--color-background) 82%)',
                }}
            />

            <div className="relative z-20 mx-auto flex max-w-[860px] flex-col items-center px-gutter py-24 text-center sm:px-page-padding sm:py-32">
                <motion.span
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="rounded-full border border-outline-variant bg-surface-container px-4 py-1.5 text-caption uppercase tracking-[0.08em] text-on-surface-variant"
                >
                    Mission operations platform
                </motion.span>

                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="mt-stack-lg text-page-title-mobile sm:text-hero-title"
                >
                    One control plane for every spacecraft you fly.
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.16 }}
                    className="mt-stack-md max-w-[560px] text-body text-on-surface-variant"
                >
                    Aether unifies telemetry, maneuver planning, and ground-station handoffs into a
                    single real-time console — built for constellations, not just one satellite.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.24 }}
                    className="mt-stack-lg flex flex-col gap-3 sm:flex-row"
                >
                    <Button to="/auth/signup" variant="primary" icon={FiArrowRight}>
                        Launch workspace
                    </Button>
                    <Button href="#lifecycle" variant="outline" icon={FiPlayCircle}>
                        See how it works
                    </Button>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.32 }}
                    className="mt-16 grid w-full max-w-[640px] grid-cols-2 gap-stack-lg sm:grid-cols-4"
                >
                    {STATS.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-panel-title text-on-surface">{stat.value}</p>
                            <p className="mt-1 text-caption text-on-surface-variant">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Hero