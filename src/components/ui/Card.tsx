import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '@/utils/animations';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-2xl overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-soft hover:shadow-large',
        glass: 'glass backdrop-blur-md border border-white/20',
        pastel: 'bg-pastel-cream shadow-soft hover:shadow-medium',
        accent: 'bg-accent-mint/20 shadow-soft hover:shadow-medium border border-accent-mint/30'
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md'
    }
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant,
  padding,
  className = '',
  hover = true,
  onClick
}) => {
  const motionProps = hover ? {
    whileHover: cardHover.hover,
    whileTap: onClick ? { scale: 0.98 } : undefined
  } : {};

  return (
    <motion.div
      className={`${cardVariants({ variant, padding })} ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;