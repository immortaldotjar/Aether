import { useEffect, useState } from 'react'
import { useMissionControl } from '../hooks/useMissionControl'
import ControlHeader from '../components/MissionControlComps/ControlHeader'
import SchematicPanel from '../components/MissionControlComps/SchematicPanel'
import CommandConsole from '../components/MissionControlComps/CommandConsole'
import CommHealth from '../components/MissionControlComps/CommHealth'
import GroundStationNetwork from '../components/MissionControlComps/GroundStationNetwork'
import SubsystemGrid from '../components/MissionControlComps/SubsystemGrid'
import EventLog from '../components/MissionControlComps/EventLog'
import MissionChecklist from '../components/MissionControlComps/MissionChecklist'

const MISSION_START = Date.now() - (6 * 3600 + 18 * 60 + 42) * 1000

const formatElapsed = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    const pad = (n) => String(n).padStart(2, '0')
    return `T+${days > 0 ? `${days}d ` : ''}${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const MissionControl = () => {
    const { subsystems, groundStations, events, queue, commsDelay, commands, runCommand } = useMissionControl()
    const [missionTime, setMissionTime] = useState(() => formatElapsed(Date.now() - MISSION_START))

    useEffect(() => {
        const interval = setInterval(() => {
            setMissionTime(formatElapsed(Date.now() - MISSION_START))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <ControlHeader missionTime={missionTime} />

            <div className="mt-panel-gap grid grid-cols-1 gap-panel-gap lg:grid-cols-[1.6fr_1fr]">
                <SchematicPanel subsystems={subsystems} />
                <div className="flex flex-col gap-panel-gap">
                    <CommandConsole commands={commands} queue={queue} onRun={runCommand} />
                    <CommHealth commsDelay={commsDelay} />
                </div>
            </div>

            <div className="mt-panel-gap">
                <GroundStationNetwork stations={groundStations} />
            </div>

            <div className="mt-panel-gap">
                <SubsystemGrid subsystems={subsystems} />
            </div>

            <div className="mt-panel-gap grid grid-cols-1 gap-panel-gap lg:grid-cols-[1.6fr_1fr]">
                <EventLog events={events} />
                <MissionChecklist />
            </div>
        </div>
    )
}

export default MissionControl
