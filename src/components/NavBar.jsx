import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'

import Button from './Button'
import { useAuth } from '../context/AuthContext'

const LINKS = [
    { to: '/', label: 'Overview' },
    { to: '/dashboard', label: 'Mission Control' },
    { to: '/dashboard', label: 'Telemetry' },
    { to: '/dashboard', label: 'Analytics' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        setOpen(false)
        navigate('/')
    }

    return (
        <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest">
            <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-gutter sm:px-page-padding">
                <Link to="/" className="flex items-center gap-2 text-on-surface">

                    <span className="text-panel-title tracking-tight">Aether</span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={({ isActive }) =>
                                `rounded-base px-3 py-2 text-label transition-colors ${isActive
                                    ? 'text-on-surface'
                                    : 'text-on-surface-variant hover:text-on-surface'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    {user ? (
                        <>
                            <span className="text-label text-on-surface-variant">{user.name}</span>
                            <Button variant="outline" icon={FiLogOut} onClick={handleLogout}>
                                Log out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" to="/auth/login">
                                Log in
                            </Button>
                            <Button variant="primary" to="/auth/signup">
                                Get started
                            </Button>
                        </>
                    )}
                </div>

                <button
                    className="text-on-surface md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden border-b border-outline-variant bg-surface-container-lowest md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-gutter py-stack-md">
                            {LINKS.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    onClick={() => setOpen(false)}
                                    className="rounded-base px-3 py-2 text-label text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <div className="mt-stack-sm flex flex-col gap-2 border-t border-outline-variant pt-stack-sm">
                                {user ? (
                                    <Button variant="outline" icon={FiLogOut} onClick={handleLogout}>
                                        Log out
                                    </Button>
                                ) : (
                                    <>
                                        <Button variant="outline" to="/auth/login" onClick={() => setOpen(false)}>
                                            Log in
                                        </Button>
                                        <Button variant="primary" to="/auth/signup" onClick={() => setOpen(false)}>
                                            Get started
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar