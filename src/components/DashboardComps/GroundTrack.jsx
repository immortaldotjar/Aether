import { useEffect, useState } from 'react'

const WIDTH = 320
const HEIGHT = 160
const INCLINATION = 51.64

const positionAt = (t) => {
    const lon = ((t * 6) % 360) - 180
    const lat = INCLINATION * Math.sin((t * Math.PI) / 45)
    return { lon, lat }
}

const toXY = ({ lon, lat }) => ({
    x: ((lon + 180) / 360) * WIDTH,
    y: ((90 - lat) / 180) * HEIGHT,
})

const GroundTrack = () => {
    const [t, setT] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setT((v) => v + 1), 1000)
        return () => clearInterval(interval)
    }, [])

    const points = Array.from({ length: 60 }, (_, i) => toXY(positionAt(t - 59 + i)))
    const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    const current = points[points.length - 1]

    return (
        <div className="border border-outline-variant p-panel-gap">
            <div className="flex items-center justify-between">
                <h2 className="text-panel-title text-on-surface">Ground track</h2>
                <span className="text-caption text-on-surface-variant">Simplified, demo</span>
            </div>
            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="mt-stack-md w-full"
                role="img"
                aria-label="Ground track plot"
            >
                <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="var(--color-surface-container)" />
                <line x1={0} y1={HEIGHT / 2} x2={WIDTH} y2={HEIGHT / 2} stroke="var(--color-outline-variant)" />
                <line x1={WIDTH / 2} y1={0} x2={WIDTH / 2} y2={HEIGHT} stroke="var(--color-outline-variant)" />
                <path d={path} fill="none" stroke="var(--color-primary)" strokeWidth={1.5} />
                <circle cx={current.x} cy={current.y} r={3} fill="var(--color-primary)" />
            </svg>
            <p className="mt-stack-sm text-caption text-on-surface-variant">
                {`Lat ${positionAt(t).lat.toFixed(2)}°, Lon ${positionAt(t).lon.toFixed(2)}°`}
            </p>
        </div>
    )
}

export default GroundTrack
