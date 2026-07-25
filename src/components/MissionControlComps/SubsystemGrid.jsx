const SubsystemGrid = ({ subsystems }) => {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {subsystems.map((system) => (
                <div key={system.id} className="border border-outline-variant p-stack-md">
                    <div className="flex items-center justify-between">
                        <span className="text-caption text-on-surface-variant">{system.label}</span>
                        <span className={`text-caption ${system.status === 'warning' ? 'text-error' : 'text-primary'}`}>
                            {system.status}
                        </span>
                    </div>
                    <p className="mt-1 text-panel-title text-on-surface">
                        {system.value.toFixed(1)}
                        <span className="ml-1 text-caption text-on-surface-variant">{system.unit}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default SubsystemGrid
