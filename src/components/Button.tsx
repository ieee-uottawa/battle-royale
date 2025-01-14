import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-colors'
  const variantClasses = {
    default: 'bg-neon-green text-black hover:bg-neon-green/80',
    outline: 'bg-transparent border-2 hover:bg-white/10'
  }
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button

