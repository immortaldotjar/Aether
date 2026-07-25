import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { useAuth } from '../../context/AuthContext'

const Signup = () => {
    const { signup } = useAuth()
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        try {
            signup(form)
            navigate('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            <h1 className="text-page-title-mobile">Create your workspace</h1>
            <p className="mt-stack-sm text-body text-on-surface-variant">
                Start tracking your fleet in minutes.
            </p>

            <form onSubmit={handleSubmit} className="mt-stack-lg flex flex-col gap-stack-md">
                <div>
                    <label className="text-label text-on-surface-variant">Name</label>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-body text-on-surface outline-none focus:border-primary"
                    />
                </div>
                <div>
                    <label className="text-label text-on-surface-variant">Email</label>
                    <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-body text-on-surface outline-none focus:border-primary"
                    />
                </div>
                <div>
                    <label className="text-label text-on-surface-variant">Password</label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-body text-on-surface outline-none focus:border-primary"
                    />
                </div>

                {error && <p className="text-caption text-error">{error}</p>}

                <Button type="submit" variant="primary" className="mt-stack-sm w-full">
                    Create account
                </Button>
            </form>

            <p className="mt-stack-lg text-center text-caption text-on-surface-variant">
                Already have a workspace?{' '}
                <button
                    type="button"
                    onClick={() => navigate('/auth/login')}
                    className="text-primary hover:underline"
                >
                    Log in
                </button>
            </p>
        </>
    )
}

export default Signup