import { useNavigate, Outlet } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const AuthLayout = () => {
    const navigate = useNavigate()

    return (
        <div className="mx-auto flex max-w-[400px] flex-col px-gutter py-24">
            <button
                type="button"
                onClick={() => navigate('/')}
                className="flex w-fit items-center gap-1.5 text-label text-on-surface-variant hover:text-on-surface"
            >
                <FiArrowLeft size={14} />
                Back to home
            </button>

            <div className="mt-stack-lg">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout