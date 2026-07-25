import { motion } from 'framer-motion'

import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const TELEMETRY_DATA = [
    { t: 0, v: 62 }, { t: 1, v: 68 }, { t: 2, v: 60 }, { t: 3, v: 74 },
    { t: 4, v: 71 }, { t: 5, v: 80 }, { t: 6, v: 76 }, { t: 7, v: 88 },
    { t: 8, v: 83 }, { t: 9, v: 91 }, { t: 10, v: 86 }, { t: 11, v: 94 },
]

const TelemetryPanel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-lg border border-outline-variant bg-surface-container p-panel-gap lg:sticky lg:top-24"
        >
            <div className="flex items-center gap-2">
                {/* <PiActivityBold size={18} className="text-secondary" /> */}
                <h3 className="text-panel-title">Downlink signal</h3>
                <span className="ml-auto flex items-center gap-1.5 text-caption text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    live
                </span>
            </div>

            <div className="mt-stack-md h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={TELEMETRY_DATA}>
                        <defs>
                            <linearGradient id="signal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.05} />
                                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="v"
                            stroke="var(--color-primary)"
                            strokeWidth={2}
                            fill="url(#signal)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-stack-md grid grid-cols-3 gap-stack-sm border-t border-outline-variant pt-stack-md">
                <div>
                    <p className="text-caption text-on-surface-variant">SNR</p>
                    <p className="text-label text-on-surface">18.4 dB</p>
                </div>
                <div>
                    <p className="text-caption text-on-surface-variant">Pass</p>
                    <p className="text-label text-on-surface">04:12 left</p>
                </div>
                <div>
                    <p className="text-caption text-on-surface-variant">Station</p>
                    <p className="text-label text-on-surface">Svalbard</p>
                </div>
            </div>
        </motion.div>
    )
}

export default TelemetryPanel