import { AnimationVariants } from '@/types';

// Fade in down animation
export const fadeInDown: AnimationVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade in up animation
export const fadeInUp: AnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade in left animation
export const fadeInLeft: AnimationVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade in right animation
export const fadeInRight: AnimationVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale animation
export const scaleIn: AnimationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Stagger container for children animations
export const staggerContainer: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Card hover effect
export const cardHover: AnimationVariants = {
  hidden: {},
  visible: {},
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, type: "spring", stiffness: 300 }
  }
};

// Button tap effect
export const buttonTap: AnimationVariants = {
  hidden: {},
  visible: {},
  tap: { scale: 0.95 }
};

// Floating animation for decorative elements
export const floating: AnimationVariants = {
  hidden: { y: 0 },
  visible: { y: 0 },
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Cookie float animation (different timing for variety)
export const cookieFloat: AnimationVariants = {
  hidden: { y: 0, rotate: 0 },
  visible: { y: 0, rotate: 0 },
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-15, 15, -15],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Slide in from bottom
export const slideInBottom: AnimationVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Bounce in animation
export const bounceIn: AnimationVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// Text reveal animation (for headings)
export const textReveal: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Word animation for text reveal
export const wordAnimation: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Parallax scroll effect
export const parallaxScroll: AnimationVariants = {
  hidden: { y: 0 },
  visible: { y: 0 },
  initial: { y: 0 },
  animate: {
    y: [-50, 50, -50],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Pulse animation for CTA buttons
export const pulseGlow: AnimationVariants = {
  hidden: { boxShadow: '0 0 0 0 rgba(255, 75, 87, 0.7)' },
  visible: { boxShadow: '0 0 0 0 rgba(255, 75, 87, 0.7)' },
  initial: { boxShadow: '0 0 0 0 rgba(255, 75, 87, 0.7)' },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(255, 75, 87, 0.7)',
      '0 0 0 20px rgba(255, 75, 87, 0)',
      '0 0 0 0 rgba(255, 75, 87, 0)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};