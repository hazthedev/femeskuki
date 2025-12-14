import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Chip Classic',
    description: 'Our signature cookie with premium chocolate chunks and a hint of vanilla',
    price: 12.99,
    image: '/images/cookies/chocolate-chip.jpg',
    category: 'classic',
    featured: true
  },
  {
    id: '2',
    name: 'Rainbow Sugar Cookies',
    description: 'Colorful, fun-shaped sugar cookies perfect for celebrations',
    price: 14.99,
    image: '/images/cookies/rainbow-sugar.jpg',
    category: 'colorful',
    featured: true
  },
  {
    id: '3',
    name: 'Double Chocolate Fudge',
    description: 'Rich, decadent cookies made with premium cocoa and chocolate chips',
    price: 13.99,
    image: '/images/cookies/double-chocolate.jpg',
    category: 'chocolate'
  },
  {
    id: '4',
    name: 'Pastel Macarons',
    description: 'Delicate French macarons in beautiful pastel colors',
    price: 18.99,
    image: '/images/cookies/macarons.jpg',
    category: 'delicate',
    featured: true
  },
  {
    id: '5',
    name: 'Cookie Butter Sandwich',
    description: 'Two soft cookies with creamy cookie butter filling',
    price: 15.99,
    image: '/images/cookies/cookie-butter.jpg',
    category: 'specialty'
  },
  {
    id: '6',
    name: 'Confetti Birthday',
    description: 'Celebrate with our birthday cookie loaded with rainbow sprinkles',
    price: 13.99,
    image: '/images/cookies/confetti.jpg',
    category: 'colorful'
  }
];

export const productCategories = [
  { id: 'all', name: 'All Cookies', color: 'bg-gradient-to-r from-pastel-pink to-pastel-cream' },
  { id: 'classic', name: 'Classics', color: 'bg-gradient-to-r from-accent-orange to-accent-pink' },
  { id: 'colorful', name: 'Colorful', color: 'bg-gradient-to-r from-accent-mint to-pastel-blue' },
  { id: 'chocolate', name: 'Chocolate', color: 'bg-gradient-to-r from-neutral-gray to-neutral-charcoal' },
  { id: 'delicate', name: 'Delicate', color: 'bg-gradient-to-r from-pastel-cream to-accent-pink' },
  { id: 'specialty', name: 'Specialty', color: 'bg-gradient-to-r from-accent-coral to-accent-orange' }
];