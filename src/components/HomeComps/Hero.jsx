import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'

import Button from '../Button'

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
}

const Hero = () => {
    return (
        <section className="border-b border-outline-variant">
            <div className="mx-auto flex max-w-[860px] flex-col items-center px-gutter py-24 text-center sm:px-page-padding sm:py-32">
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="text-page-title-mobile sm:text-hero-title"
                >
                    One dashboard for every spacecraft you fly.
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.16 }}
                    className="mt-stack-md max-w-[560px] text-body text-on-surface-variant"
                >
                    Aether puts telemetry, maneuver planning, and ground-station handoffs in one
                    console, so your team can run a whole fleet, not just one satellite.
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
            </div>
        </section>
    )
}

export default Hero
