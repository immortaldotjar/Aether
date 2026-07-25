const MissionHeader = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col gap-stack-sm border-b border-outline-variant pb-stack-lg sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 className="text-page-title-mobile sm:text-page-title">{title}</h1>
                <p className="mt-1 text-caption text-on-surface-variant">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 border border-outline-variant px-3 py-1.5 text-caption text-on-surface">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Active
                </span>
                <span className="border border-outline-variant px-3 py-1.5 text-caption text-on-surface-variant">
                    Simulated data
                </span>
            </div>
        </div>
    )
}

export default MissionHeader
