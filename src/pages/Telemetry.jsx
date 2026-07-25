import { useAuth } from '../context/AuthContext'
import { useTelemetry } from '../hooks/useTelemetry'
import MissionHeader from '../components/DashboardComps/MissionHeader'
import StatCard from '../components/DashboardComps/StatCard'
import TelemetryChart from '../components/DashboardComps/TelemetryChart'
import OrbitalParameters from '../components/DashboardComps/OrbitalParameters'
import SensorStream from '../components/DashboardComps/SensorStream'
import GroundTrack from '../components/DashboardComps/GroundTrack'

const Telemetry = () => {
    const { user } = useAuth()
    const { state, history } = useTelemetry()

    return (
        <div>
            <MissionHeader title="Telemetry" subtitle={`Welcome back, ${user.name}`} />

            <div className="mt-panel-gap grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                <StatCard label="Altitude" value={state.altitude.toFixed(2)} unit="km" />
                <StatCard label="Velocity" value={state.velocity.toFixed(2)} unit="km/s" />
                <StatCard label="Fuel" value={state.fuel.toFixed(1)} unit="%" />
                <StatCard label="Battery" value={state.battery.toFixed(0)} unit="%" />
                <StatCard label="Internal temp" value={state.internalTemp.toFixed(0)} unit="°C" />
                <StatCard label="Comms delay" value={state.commsDelay.toFixed(0)} unit="ms" />
            </div>

            <div className="mt-panel-gap grid grid-cols-1 gap-panel-gap lg:grid-cols-[1.6fr_1fr]">
                <TelemetryChart data={history} />
                <OrbitalParameters />
            </div>

            <div className="mt-panel-gap grid grid-cols-1 gap-panel-gap lg:grid-cols-[1.6fr_1fr]">
                <SensorStream />
                <GroundTrack />
            </div>
        </div>
    )
}

export default Telemetry
