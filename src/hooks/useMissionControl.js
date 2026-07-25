import { useEffect, useRef, useState } from 'react'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const jitter = (value, amount) => value + (Math.random() - 0.5) * amount
const timestamp = () => new Date().toLocaleTimeString('en-GB', { hour12: false })

const initialSubsystems = [
    { id: 'power', label: 'Power', value: 28.4, unit: 'kW', status: 'nominal' },
    { id: 'thermal', label: 'Thermal', value: 294, unit: 'K', status: 'nominal' },
    { id: 'navigation', label: 'Navigation', value: 0.4, unit: 'm drift', status: 'nominal' },
    { id: 'propulsion', label: 'Propulsion', value: 88, unit: '% fuel', status: 'warning' },
    { id: 'comm', label: 'Comm', value: 12.5, unit: 'MB/s', status: 'nominal' },
    { id: 'lifeSupport', label: 'Life support', value: 101.3, unit: 'kPa', status: 'nominal' },
    { id: 'payload', label: 'Payload', value: 4, unit: '/ 4 unit', status: 'nominal' },
    { id: 'flightComputer', label: 'Flight computer', value: 12, unit: '% load', status: 'nominal' },
]

const initialGroundStations = [
    { name: 'Houston', role: 'Primary', signal: -104 },
    { name: 'Canberra', role: 'Standby', signal: -118 },
    { name: 'Madrid', role: 'Standby', signal: -112 },
    { name: 'Goldstone', role: 'Offline', signal: null },
]

const initialEvents = [
    { time: '14:18:22', subsystem: 'Network', action: 'Ground station handover', operator: 'HOU_AUTO', status: 'Completed' },
    { time: '14:15:01', subsystem: 'Power', action: 'Solar array optimization', operator: 'R_VANCE', status: 'Completed' },
    { time: '14:10:45', subsystem: 'Navigation', action: 'Star tracker recalibration', operator: 'HOU_SYST', status: 'Completed' },
]

const COMMANDS = [
    { id: 'orbit-correction', label: 'Orbit correction', subsystem: 'Navigation' },
    { id: 'attitude-control', label: 'Attitude control', subsystem: 'Navigation' },
    { id: 'thruster-calibration', label: 'Thruster calibration', subsystem: 'Propulsion' },
]

export const useMissionControl = () => {
    const [subsystems, setSubsystems] = useState(initialSubsystems)
    const [groundStations] = useState(initialGroundStations)
    const [events, setEvents] = useState(initialEvents)
    const [queue, setQueue] = useState([])
    const [commsDelay, setCommsDelay] = useState(248)
    const pendingTimers = useRef([])

    useEffect(() => {
        const interval = setInterval(() => {
            setSubsystems((prev) =>
                prev.map((s) => ({ ...s, value: clamp(jitter(s.value, s.value * 0.02), 0, s.value * 1.5) }))
            )
            setCommsDelay((prev) => clamp(jitter(prev, 8), 180, 320))
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => () => pendingTimers.current.forEach(clearTimeout), [])

    const runCommand = (commandId) => {
        const command = COMMANDS.find((c) => c.id === commandId)
        if (!command) return

        const queueEntry = { id: `${commandId}-${Date.now()}`, label: command.label, time: timestamp(), status: 'Pending' }
        setQueue((prev) => [queueEntry, ...prev].slice(0, 5))

        const timer = setTimeout(() => {
            setQueue((prev) =>
                prev.map((entry) => (entry.id === queueEntry.id ? { ...entry, status: 'OK' } : entry))
            )
            setEvents((prev) =>
                [{ time: timestamp(), subsystem: command.subsystem, action: command.label, operator: 'You', status: 'Completed' }, ...prev].slice(0, 8)
            )
        }, 2500)
        pendingTimers.current.push(timer)
    }

    return { subsystems, groundStations, events, queue, commsDelay, commands: COMMANDS, runCommand }
}
