import { Link } from 'react-router-dom'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const COLUMNS = [
    {
        title: 'Product',
        links: [
            { label: 'Mission Control', to: '/dashboard' },
            { label: 'Telemetry', to: '/dashboard' },
            { label: 'Analytics', to: '/dashboard' },
            { label: 'Pricing', to: '/' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', to: '/' },
            { label: 'Careers', to: '/' },
            { label: 'Security', to: '/' },
            { label: 'GitHub', href: 'https://github.com' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy', to: '/' },
            { label: 'Terms', to: '/' },
            { label: 'Cookie policy', to: '/' },
        ],
    },
]

const Footer = () => {
    return (
        <footer className="border-t border-outline-variant bg-surface-container-lowest">
            <div className="mx-auto max-w-[1440px] px-gutter py-panel-gap sm:px-page-padding">
                <div className="grid grid-cols-1 gap-panel-gap sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 text-on-surface">
                            
                            <span className="text-panel-title">Aether</span>
                        </div>
                        <p className="mt-stack-sm text-caption text-on-surface-variant">
                            The operating system for modern space exploration and satellite logistics.
                        </p>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-label text-on-surface-variant">{col.title}</h3>
                            <ul className="mt-stack-sm flex flex-col gap-2">
                                {col.links.map((link) =>
                                    link.href ? (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-caption text-on-surface-variant hover:text-on-surface"
                                            />
                                            {link.label}

                                        </li>
                                    ) : (
                                        <li key={link.label}>
                                            <Link
                                                to={link.to}
                                                className="text-caption text-on-surface-variant hover:text-on-surface"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-panel-gap flex flex-col items-center justify-between gap-stack-sm border-t border-outline-variant pt-stack-lg sm:flex-row">
                    <p className="text-caption text-on-surface-variant">
                        © {new Date().getFullYear()} Aether. Built for mission-critical operations.
                    </p>
                    <div className="flex items-center gap-4 text-on-surface-variant">
                        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FiGithub size={16} className="hover:text-on-surface" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <FiTwitter size={16} className="hover:text-on-surface" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FiLinkedin size={16} className="hover:text-on-surface" />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer