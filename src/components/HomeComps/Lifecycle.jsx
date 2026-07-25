import { motion } from 'framer-motion'
import {
    PiCompassBold,
    PiRocketLaunchBold,
    PiPlanetBold,
    PiGaugeBold,
    PiChartLineUpBold,
} from 'react-icons/pi'

const LIFECYCLE = [
    { icon: PiCompassBold, title: 'Planning', desc: 'Model trajectories, propellant budgets, and launch windows before a command is sent.' },
    { icon: PiRocketLaunchBold, title: 'Launch', desc: 'Track ascent and separation live, with ground-station handoffs pre-staged.' },
    { icon: PiPlanetBold, title: 'Orbit', desc: 'Confirm acquisition of signal and settle the spacecraft into its operating orbit.' },
    { icon: PiGaugeBold, title: 'Operations', desc: 'Run daily passes, maneuvers, and payload scheduling from one console.' },
    { icon: PiChartLineUpBold, title: 'Analysis', desc: 'Close the loop with telemetry review and anomaly reporting after every phase.' },
]

const Lifecycle = () => {
    return (
        <section id="lifecycle" className="border-b border-outline-variant py-24">
            <div className="mx-auto max-w-[1440px] px-gutter sm:px-page-padding">
                <div className="mx-auto max-w-[560px] text-center">
                    <h2 className="text-page-title-mobile sm:text-page-title">
                        The mission lifecycle, in one workspace
                    </h2>
                    <p className="mt-stack-sm text-body text-on-surface-variant">
                        From first orbit plan to post-mission analysis, Aether keeps every phase on one
                        timeline.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-stack-lg sm:grid-cols-2 lg:grid-cols-5">
                    {LIFECYCLE.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            className="relative border-t border-outline-variant pt-stack-md"
                        >
                            <step.icon size={20} className="text-primary" />
                            <h3 className="mt-stack-sm text-panel-title">{step.title}</h3>
                            <p className="mt-1 text-caption text-on-surface-variant">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Lifecycle