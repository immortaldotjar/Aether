import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="border-t border-outline-variant bg-surface-container-lowest">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-stack-md px-gutter py-panel-gap sm:flex-row sm:items-center sm:justify-between sm:px-page-padding">
                <div>
                    <span className="text-panel-title text-on-surface">Aether</span>
                    <p className="mt-1 text-caption text-on-surface-variant">
                        Mission control for satellite fleets.
                    </p>
                </div>

                <div className="flex items-center gap-stack-lg">
                    <Link to="/" className="text-caption text-on-surface-variant hover:text-on-surface">
                        Overview
                    </Link>
                    <Link to="/dashboard" className="text-caption text-on-surface-variant hover:text-on-surface">
                        Dashboard
                    </Link>
                    <Link to="/auth/login" className="text-caption text-on-surface-variant hover:text-on-surface">
                        Log in
                    </Link>
                </div>

                <p className="text-caption text-on-surface-variant">
                    © {new Date().getFullYear()} Aether
                </p>
            </div>
        </footer>
    )
}

export default Footer
