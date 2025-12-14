import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skeleton from './Skeleton';
import { fadeInUp } from '@/utils/animations';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  blurDataURL?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  blurDataURL,
  objectFit = 'cover',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.(undefined as any);
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
    objectFit
  };

  // Generate a blur placeholder if none provided
  const placeholderSrc = blurDataURL || `data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23FFF5F7'/%3E%3Ctext x='50%25' y='50%25' font-family='Poppins' font-size='16' fill='%23FF6B9D' text-anchor='middle' dominant-baseline='middle'%3E🍪%3C/text%3E%3C/svg%3E`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton while loading */}
      {!isLoaded && !hasError && (
        <Skeleton
          variant={objectFit === 'contain' || objectFit === 'none' ? 'square' : 'image'}
          className="absolute inset-0"
        />
      )}

      {/* Blur placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full filter blur-sm scale-110 transition-opacity duration-500"
          style={{
            opacity: isLoaded ? 0 : 1
          }}
        />
      )}

      {/* Main image */}
      <motion.img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
        variants={fadeInUp}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center w-full h-full bg-pastel-cream text-neutral-gray">
          <div className="text-center p-4">
            <span className="text-4xl mb-2 block">🍪</span>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;