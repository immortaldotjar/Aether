import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const { user, ready } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (ready && !user) {
            navigate('/auth/login', { replace: true })
        }
    }, [ready, user, navigate])

    if (!ready || !user) return null

    return (
        <div className="mx-auto max-w-[720px] px-gutter py-24 text-center">
            <h1 className="text-page-title-mobile">Welcome back, {user.name}.</h1>
            <p className="mt-stack-sm text-body text-on-surface-variant">
                Mission Control, Telemetry and Analytics land here next.
            </p>
        </div>
    )
}

export default Dashboard