const StatCard = ({ label, value, unit, sublabel }) => {
    return (
        <div className="border border-outline-variant p-stack-md">
            <p className="text-caption text-on-surface-variant">{label}</p>
            <p className="mt-1 text-panel-title text-on-surface">
                {value}
                {unit && <span className="ml-1 text-caption text-on-surface-variant">{unit}</span>}
            </p>
            {sublabel && <p className="mt-1 text-caption text-on-surface-variant">{sublabel}</p>}
        </div>
    )
}

export default StatCard
