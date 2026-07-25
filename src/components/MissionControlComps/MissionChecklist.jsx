const PHASES = [
    { title: 'Launch and orbit injection', note: 'Separation confirmed at T+00:14:00', state: 'done' },
    { title: 'System self-diagnostics', note: '98.9% subsystem health reported', state: 'done' },
    { title: 'Trans-lunar injection', note: 'Delta-v burn 2 of 3', state: 'active', progress: 66 },
    { title: 'Lunar orbit arrival', note: 'Pending, estimated T+9 days', state: 'pending' },
    { title: 'Lander deployment', note: 'Locked until orbit is stable', state: 'pending' },
]

const stateDot = {
    done: 'bg-primary',
    active: 'bg-primary',
    pending: 'bg-outline-variant',
}

const MissionChecklist = () => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Mission checklist</h2>
            <div className="mt-stack-md flex flex-col gap-stack-md">
                {PHASES.map((phase) => (
                    <div key={phase.title} className="flex gap-3">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${stateDot[phase.state]}`} />
                        <div className="flex-1">
                            <p className={`text-label ${phase.state === 'pending' ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                                {phase.title}
                            </p>
                            <p className="mt-0.5 text-caption text-on-surface-variant">{phase.note}</p>
                            {phase.state === 'active' && (
                                <div className="mt-2 h-1 w-full bg-surface-container">
                                    <div className="h-full bg-primary" style={{ width: `${phase.progress}%` }} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MissionChecklist
