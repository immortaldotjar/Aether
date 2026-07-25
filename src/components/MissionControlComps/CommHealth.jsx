const CommHealth = ({ commsDelay }) => {
    const signalQuality = Math.max(90, 100 - commsDelay / 40)

    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Comm health</h2>
            <div className="mt-stack-md grid grid-cols-2 gap-stack-md">
                <div>
                    <p className="text-caption text-on-surface-variant">Signal quality</p>
                    <p className="mt-1 text-panel-title text-on-surface">{signalQuality.toFixed(1)}%</p>
                </div>
                <div>
                    <p className="text-caption text-on-surface-variant">Latency</p>
                    <p className="mt-1 text-panel-title text-on-surface">{commsDelay.toFixed(0)} ms</p>
                </div>
            </div>
            <div className="mt-stack-md h-1.5 w-full bg-surface-container">
                <div className="h-full bg-primary" style={{ width: `${signalQuality}%` }} />
            </div>
        </div>
    )
}

export default CommHealth
