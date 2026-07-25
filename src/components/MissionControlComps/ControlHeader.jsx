const ControlHeader = ({ missionTime }) => {
    return (
        <div className="flex flex-col gap-stack-md border-b border-outline-variant pb-stack-lg sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 className="text-page-title-mobile sm:text-page-title">Mission Control</h1>
                <p className="mt-1 text-caption text-on-surface-variant">Odyssey-07 · Mission Artemis IX</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-caption sm:grid-cols-4">
                <div>
                    <p className="text-on-surface-variant">Status</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-on-surface">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Active
                    </p>
                </div>
                <div>
                    <p className="text-on-surface-variant">Ground station</p>
                    <p className="mt-0.5 text-on-surface">Houston MCC</p>
                </div>
                <div>
                    <p className="text-on-surface-variant">Mission time</p>
                    <p className="mt-0.5 text-on-surface">{missionTime}</p>
                </div>
                <div>
                    <p className="text-on-surface-variant">Data</p>
                    <p className="mt-0.5 text-on-surface">Simulated</p>
                </div>
            </div>
        </div>
    )
}

export default ControlHeader
