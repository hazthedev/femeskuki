import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { buttonTap, pulseGlow } from '@/utils/animations';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
  pulse?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  href,
  target,
  rel,
  pulse = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent-coral text-white shadow-medium hover:shadow-large hover:bg-accent-coral/90 focus:ring-accent-coral/50',
    secondary: 'bg-white text-accent-pink border-2 border-accent-pink hover:bg-accent-pink hover:text-white focus:ring-accent-pink/50',
    accent: 'bg-accent-pink text-white shadow-soft hover:shadow-medium hover:bg-accent-pink/90 focus:ring-accent-pink/50',
    outline: 'bg-transparent text-accent-coral border-2 border-accent-coral hover:bg-accent-coral hover:text-white focus:ring-accent-coral/50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const motionProps = {
    whileTap: !disabled && !loading ? buttonTap.tap : undefined,
    animate: pulse && !disabled && !loading ? pulseGlow.animate : undefined,
    initial: pulse ? pulseGlow.initial : undefined,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;