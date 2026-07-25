const EventLog = ({ events }) => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Mission event log</h2>
            <div className="mt-stack-md overflow-x-auto">
                <table className="w-full text-left text-caption">
                    <thead>
                        <tr className="border-b border-outline-variant text-on-surface-variant">
                            <th className="pb-2 font-medium">Time</th>
                            <th className="pb-2 font-medium">Subsystem</th>
                            <th className="pb-2 font-medium">Action</th>
                            <th className="pb-2 font-medium">Operator</th>
                            <th className="pb-2 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, i) => (
                            <tr key={`${event.time}-${i}`} className="border-b border-outline-variant last:border-0">
                                <td className="py-2.5 text-on-surface-variant">{event.time}</td>
                                <td className="py-2.5 text-on-surface">{event.subsystem}</td>
                                <td className="py-2.5 text-on-surface">{event.action}</td>
                                <td className="py-2.5 text-on-surface-variant">{event.operator}</td>
                                <td className="py-2.5 text-primary">{event.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EventLog
