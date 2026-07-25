import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TABS = [
    { to: '/dashboard', label: 'Mission Control', end: true },
    { to: '/dashboard/telemetry', label: 'Telemetry' },
]

const DashboardLayout = () => {
    const { user, ready } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (ready && !user) {
            navigate('/auth/login', { replace: true })
        }
    }, [ready, user, navigate])

    if (!ready || !user) return null

    return (
        <div className="mx-auto max-w-[1440px] px-gutter py-panel-gap sm:px-page-padding">
            <div className="mb-panel-gap flex gap-1 border-b border-outline-variant">
                {TABS.map((tab) => (
                    <NavLink
                        key={tab.to}
                        to={tab.to}
                        end={tab.end}
                        className={({ isActive }) =>
                            `border-b-2 px-3 py-2.5 text-label transition-colors ${isActive
                                ? 'border-primary text-on-surface'
                                : 'border-transparent text-on-surface-variant hover:text-on-surface'
                            }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardLayout
