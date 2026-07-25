import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const tooltipStyle = {
    background: 'var(--color-surface-container)',
    border: '1px solid var(--color-outline-variant)',
    borderRadius: 4,
    fontSize: 12,
    color: 'var(--color-on-surface)',
}

const TelemetryChart = ({ data }) => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <div className="flex items-center justify-between">
                <h2 className="text-panel-title text-on-surface">Altitude over time</h2>
                <span className="text-caption text-on-surface-variant">km, last 24 samples</span>
            </div>
            <div className="mt-stack-md h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 4, right: 8, left: -24, bottom: 0 }}>
                        <XAxis dataKey="t" hide />
                        <YAxis
                            domain={['dataMin - 2', 'dataMax + 2']}
                            tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip contentStyle={tooltipStyle} labelFormatter={() => ''} />
                        <Line
                            type="monotone"
                            dataKey="altitude"
                            stroke="var(--color-primary)"
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TelemetryChart
