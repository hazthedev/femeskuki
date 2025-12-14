import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const skeletonVariants = cva(
  'bg-gray-200 rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        text: 'h-4 w-full',
        title: 'h-8 w-3/4',
        button: 'h-12 w-24 rounded-full',
        card: 'h-48 w-full',
        circle: 'rounded-full',
        square: 'aspect-square',
        image: 'aspect-video',
        avatar: 'h-12 w-12 rounded-full'
      },
      animation: {
        shimmer: 'relative overflow-hidden',
        pulse: 'animate-pulse',
        none: ''
      }
    },
    defaultVariants: {
      variant: 'text',
      animation: 'shimmer'
    }
  }
);

interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string;
  width?: string;
  height?: string;
  lines?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant,
  animation,
  className = '',
  width,
  height,
  lines = 1
}) => {
  const baseClasses = skeletonVariants({ variant, animation });
  const style = {
    width: width || undefined,
    height: height || undefined
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            animation={animation}
            width={i === lines - 1 ? '75%' : undefined}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {animation === 'shimmer' && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </div>
  );
};

export default Skeleton;