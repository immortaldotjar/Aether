import { useEffect, useRef, useState } from 'react'

const HISTORY_LENGTH = 24

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const jitter = (value, amount) => value + (Math.random() - 0.5) * amount

const buildPoint = (i, base) => ({
    t: i,
    altitude: base.altitude,
    velocity: base.velocity,
    fuel: base.fuel,
})

const initialState = {
    altitude: 411.95,
    velocity: 7.66,
    fuel: 81,
    battery: 94,
    internalTemp: 22,
    commsDelay: 182,
}

export const useTelemetry = () => {
    const [state, setState] = useState(initialState)
    const [history, setHistory] = useState(() =>
        Array.from({ length: HISTORY_LENGTH }, (_, i) => buildPoint(i, initialState))
    )
    const tick = useRef(HISTORY_LENGTH)

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prev) => {
                const next = {
                    altitude: clamp(jitter(prev.altitude, 0.6), 405, 418),
                    velocity: clamp(jitter(prev.velocity, 0.02), 7.6, 7.72),
                    fuel: clamp(prev.fuel - Math.random() * 0.02, 60, 81),
                    battery: clamp(jitter(prev.battery, 1.2), 78, 100),
                    internalTemp: clamp(jitter(prev.internalTemp, 0.4), 18, 27),
                    commsDelay: clamp(jitter(prev.commsDelay, 8), 150, 260),
                }
                setHistory((h) => [...h.slice(1), buildPoint(tick.current, next)])
                tick.current += 1
                return next
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return { state, history }
}
