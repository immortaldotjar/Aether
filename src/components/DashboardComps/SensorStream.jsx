import { useEffect, useState } from 'react'

const SENSORS = [
    { id: 'IMU-01-A', subsystem: 'Attitude control', range: '± 2.0°/s' },
    { id: 'PWR-BT-04', subsystem: 'Power management', range: '24V - 32V' },
    { id: 'TC-THR-02', subsystem: 'Propulsion', range: '100K - 600K' },
    { id: 'COM-X-ANT', subsystem: 'Communications', range: '-120 dBm min' },
]

const readingFor = (id) => {
    if (id === 'IMU-01-A') return `X: ${(Math.random() * 0.01 - 0.005).toFixed(3)}°/s`
    if (id === 'PWR-BT-04') return `${(27 + Math.random() * 2).toFixed(2)}V`
    if (id === 'TC-THR-02') return `${(470 + Math.random() * 20).toFixed(1)}K`
    return `${(-108 + Math.random() * 8).toFixed(1)} dBm`
}

const timestamp = () => new Date().toLocaleTimeString('en-GB', { hour12: false })

const buildRows = () =>
    SENSORS.map((sensor) => ({
        ...sensor,
        value: readingFor(sensor.id),
        time: timestamp(),
        warning: sensor.id === 'TC-THR-02' && Math.random() < 0.3,
    }))

const SensorStream = () => {
    const [rows, setRows] = useState(buildRows)

    useEffect(() => {
        const interval = setInterval(() => setRows(buildRows()), 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Sensor stream</h2>
            <div className="mt-stack-md overflow-x-auto">
                <table className="w-full text-left text-caption">
                    <thead>
                        <tr className="border-b border-outline-variant text-on-surface-variant">
                            <th className="pb-2 font-medium">Time</th>
                            <th className="pb-2 font-medium">Sensor</th>
                            <th className="pb-2 font-medium">Value</th>
                            <th className="pb-2 font-medium">Subsystem</th>
                            <th className="pb-2 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} className="border-b border-outline-variant last:border-0">
                                <td className="py-2.5 text-on-surface-variant">{row.time}</td>
                                <td className="py-2.5 text-on-surface">{row.id}</td>
                                <td className="py-2.5 text-on-surface">{row.value}</td>
                                <td className="py-2.5 text-on-surface-variant">{row.subsystem}</td>
                                <td className={`py-2.5 ${row.warning ? 'text-error' : 'text-on-surface-variant'}`}>
                                    {row.warning ? 'Warning' : 'Nominal'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SensorStream
