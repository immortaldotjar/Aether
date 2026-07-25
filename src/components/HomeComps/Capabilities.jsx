import {
    PiSlidersHorizontalBold,
    PiBroadcastBold,
    PiShieldCheckBold,
    PiPackageBold,
    PiPlugsBold,
    PiCodeBlockBold,
} from 'react-icons/pi'

const CAPABILITIES = [
    { icon: PiSlidersHorizontalBold, title: 'Automated maneuver planning', desc: 'Propose and check orbit-correction burns against your fuel budget before they run.' },
    { icon: PiBroadcastBold, title: 'Multi-network uplink', desc: 'Switch ground-station networks automatically when a pass is at risk.' },
    { icon: PiShieldCheckBold, title: 'Cryptographic security', desc: 'Command links are encrypted end to end, with keys rotated per mission.' },
    { icon: PiPackageBold, title: 'Payload orchestration', desc: 'Schedule instrument operations against orbit geometry and power budgets.' },
    { icon: PiPlugsBold, title: 'Legacy telemetry bridge', desc: 'Read CCSDS and legacy frame formats without changing your ground segment.' },
    { icon: PiCodeBlockBold, title: 'Orbital data API', desc: 'Stream state vectors and health telemetry into your own tools.' },
]

const Capabilities = () => {
    return (
        <section className="border-b border-outline-variant py-24">
            <div className="mx-auto max-w-[1440px] px-gutter sm:px-page-padding">
                <h2 className="text-page-title-mobile sm:text-page-title">
                    Built for orbital-scale operations
                </h2>
                <p className="mt-stack-sm max-w-[560px] text-body text-on-surface-variant">
                    Every subsystem your ops team touches, in one console.
                </p>

                <div className="mt-stack-lg grid grid-cols-1 gap-x-16 gap-y-stack-md border-t border-outline-variant sm:grid-cols-2">
                    {CAPABILITIES.map((item) => (
                        <div key={item.title} className="flex gap-4 border-b border-outline-variant py-stack-md">
                            <item.icon size={20} className="mt-1 shrink-0 text-primary" />
                            <div>
                                <h3 className="text-label text-on-surface">{item.title}</h3>
                                <p className="mt-1 text-caption text-on-surface-variant">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Capabilities
