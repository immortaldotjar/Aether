import { Link } from 'react-router-dom'

const VARIANTS = {
    primary: 'bg-primary text-on-primary hover:bg-primary/90',
    outline:
        'border border-outline-variant text-on-surface hover:border-outline hover:bg-surface-container',
    ghost: 'text-on-surface-variant hover:text-on-surface',
}

const Button = ({
    to,
    href,
    onClick,
    type = 'button',
    variant = 'primary',
    icon: Icon,
    className = '',
    children,
}) => {
    const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-label transition-colors duration-150 ${VARIANTS[variant]} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
                {Icon && <Icon size={16} />}
            </Link>
        )
    }
    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
                {Icon && <Icon size={16} />}
            </a>
        )
    }
    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
            {Icon && <Icon size={16} />}
        </button>
    )
}

export default Button