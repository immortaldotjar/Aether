const roleStyles = {
    Primary: 'text-primary',
    Standby: 'text-on-surface-variant',
    Offline: 'text-error',
}

const GroundStationNetwork = ({ stations }) => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Ground station network</h2>
            <div className="mt-stack-md grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stations.map((station) => (
                    <div key={station.name} className="border border-outline-variant p-stack-md">
                        <div className="flex items-center justify-between">
                            <span className="text-label text-on-surface">{station.name}</span>
                            <span className={`text-caption ${roleStyles[station.role]}`}>{station.role}</span>
                        </div>
                        <p className="mt-2 text-caption text-on-surface-variant">
                            {station.signal === null ? 'No link' : `${station.signal} dBm`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroundStationNetwork
