const TAGS = [
    { id: 'solarArray', label: 'Solar array', x: 60, y: 60, status: 'nominal' },
    { id: 'propulsion', label: 'Propulsion', x: 260, y: 130, status: 'warning' },
    { id: 'comm', label: 'Comm antenna', x: 300, y: 40, status: 'nominal' },
]

const statusColor = (status) => (status === 'warning' ? 'var(--color-error)' : 'var(--color-primary)')

const SchematicPanel = ({ subsystems }) => {
    const statusFor = (id) => subsystems.find((s) => s.id === id)?.status ?? 'nominal'

    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Odyssey-07 schematic</h2>
            <svg viewBox="0 0 360 180" className="mt-stack-md w-full" role="img" aria-label="Spacecraft schematic">
                <rect x={0} y={0} width={360} height={180} fill="var(--color-surface-container)" />
                <rect x={40} y={30} width={30} height={90} fill="none" stroke="var(--color-outline)" />
                <rect x={140} y={70} width={90} height={40} rx={4} fill="none" stroke="var(--color-on-surface-variant)" />
                <rect x={290} y={30} width={30} height={90} fill="none" stroke="var(--color-outline)" />
                <line x1={70} y1={75} x2={140} y2={75} stroke="var(--color-outline)" />
                <line x1={230} y1={75} x2={290} y2={75} stroke="var(--color-outline)" />
                <circle cx={230} cy={90} r={4} fill={statusColor(statusFor('propulsion'))} />
                {TAGS.map((tag) => (
                    <g key={tag.id}>
                        <circle cx={tag.x} cy={tag.y} r={3} fill={statusColor(statusFor(tag.id))} />
                        <text x={tag.x + 8} y={tag.y + 4} fontSize={10} fill="var(--color-on-surface-variant)">
                            {tag.label}
                        </text>
                    </g>
                ))}
            </svg>
            <p className="mt-stack-sm text-caption text-on-surface-variant">
                Simplified diagram, status markers reflect live subsystem values.
            </p>
        </div>
    )
}

export default SchematicPanel
