import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    try {
      login(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="mx-auto flex max-w-[400px] flex-col px-gutter py-24">
      <h1 className="text-page-title-mobile">Log in</h1>
      <p className="mt-stack-sm text-body text-on-surface-variant">
        Access your mission control workspace.
      </p>

      <form onSubmit={handleSubmit} className="mt-stack-lg flex flex-col gap-stack-md">
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
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1.5 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-body text-on-surface outline-none focus:border-primary"
          />
        </div>

        {error && <p className="text-caption text-error">{error}</p>}

        <Button type="submit" variant="primary" className="mt-stack-sm w-full">
          Log in
        </Button>
      </form>

      <p className="mt-stack-lg text-center text-caption text-on-surface-variant">
        No account?{' '}
        <Link to="/signup" className="text-primary">
          Sign up
        </Link>
      </p>
    </div>
  )
}

export default Login