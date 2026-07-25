const CommandConsole = ({ commands, queue, onRun }) => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Command console</h2>
            <div className="mt-stack-md flex flex-col gap-2">
                {commands.map((command) => (
                    <button
                        key={command.id}
                        type="button"
                        onClick={() => onRun(command.id)}
                        className="border border-outline-variant px-4 py-2.5 text-left text-label text-on-surface hover:border-primary"
                    >
                        {command.label}
                    </button>
                ))}
            </div>

            <p className="mt-stack-lg text-caption text-on-surface-variant">Command queue</p>
            <div className="mt-stack-sm">
                {queue.length === 0 && (
                    <p className="text-caption text-on-surface-variant">No commands sent yet.</p>
                )}
                {queue.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between border-b border-outline-variant py-2 text-caption last:border-0">
                        <span className="text-on-surface">{entry.label}</span>
                        <span className="text-on-surface-variant">{entry.time}</span>
                        <span className={entry.status === 'OK' ? 'text-primary' : 'text-on-surface-variant'}>
                            {entry.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommandConsole
