import {
    PiSlidersHorizontalBold,
    PiBroadcastBold,
    PiShieldCheckBold,
    PiPackageBold,
    PiPlugsBold,
    PiCodeBlockBold,
} from 'react-icons/pi'
import TelemetryPanel from './TelemetryPanel'

const CAPABILITIES = [
    { icon: PiSlidersHorizontalBold, title: 'Automated maneuver planning', desc: 'Propose and validate orbit-correction burns with fuel-budget guardrails built in.' },
    { icon: PiBroadcastBold, title: 'Multi-network uplink', desc: 'Fail over across ground-station networks automatically when a pass is at risk.' },
    { icon: PiShieldCheckBold, title: 'Cryptographic security', desc: 'End-to-end encrypted command links with per-mission key rotation.' },
    { icon: PiPackageBold, title: 'Payload orchestration', desc: 'Queue instrument operations against orbit geometry and power budgets.' },
    { icon: PiPlugsBold, title: 'Legacy telemetry bridge', desc: 'Ingest CCSDS and legacy frame formats without touching your ground segment.' },
    { icon: PiCodeBlockBold, title: 'Orbital data API', desc: 'Stream state vectors and health telemetry into your own tools in real time.' },
]

const Capabilities = () => {
    return (
        <section className="border-b border-outline-variant py-24">
            <div className="mx-auto max-w-[1440px] px-gutter sm:px-page-padding">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
                    <div>
                        <h2 className="text-page-title-mobile sm:text-page-title">
                            Built for orbital-scale operations
                        </h2>
                        <p className="mt-stack-sm max-w-[440px] text-body text-on-surface-variant">
                            Every subsystem your ops team touches, wired into one control plane.
                        </p>

                        <div className="mt-stack-lg divide-y divide-outline-variant border-t border-outline-variant">
                            {CAPABILITIES.map((item) => (
                                <div key={item.title} className="flex gap-4 py-stack-md">
                                    <item.icon size={20} className="mt-1 shrink-0 text-primary" />
                                    <div>
                                        <h3 className="text-label text-on-surface">{item.title}</h3>
                                        <p className="mt-1 text-caption text-on-surface-variant">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <TelemetryPanel />
                </div>
            </div>
        </section>
    )
}

export default Capabilities