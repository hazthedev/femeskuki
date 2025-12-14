// Product type definitions
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

// Social media links
export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'whatsapp' | 'email';
  url: string;
  handle?: string;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  avatar?: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  orderDetails?: string;
}

// Easter egg rewards
export interface EasterEggReward {
  id: string;
  clicksRequired: number;
  title: string;
  message: string;
  discountCode?: string;
  type: 'message' | 'discount' | 'secret';
}

// Animation variants
export interface AnimationVariants extends Record<string, any> {
  hidden?: any;
  visible?: any;
  hover?: any;
  tap?: any;
  initial?: any;
  animate?: any;
}

// Section props
export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

// SEO props
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}