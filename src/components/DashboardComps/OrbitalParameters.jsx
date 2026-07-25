const PARAMETERS = [
    { label: 'Apogee', value: '418.4 km' },
    { label: 'Perigee', value: '408.2 km' },
    { label: 'Inclination', value: '51.64°' },
    { label: 'Orbital period', value: '92.8 min' },
    { label: 'Orbit type', value: 'Sun-synchronous' },
]

const OrbitalParameters = () => {
    return (
        <div className="border border-outline-variant p-panel-gap">
            <h2 className="text-panel-title text-on-surface">Orbital parameters</h2>
            <div className="mt-stack-md divide-y divide-outline-variant">
                {PARAMETERS.map((param) => (
                    <div key={param.label} className="flex items-center justify-between py-2.5">
                        <span className="text-caption text-on-surface-variant">{param.label}</span>
                        <span className="text-label text-on-surface">{param.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrbitalParameters
