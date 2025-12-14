import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Chocolate Chip',
    description: 'Our signature cookie with premium chocolate chunks and a hint of vanilla',
    price: 12.99,
    image: '/assets/cookies/kuki-1.jpg',
    category: 'classic',
    featured: true
  },
  {
    id: '2',
    name: 'Colorful Rainbow Cookies',
    description: 'Vibrant, fun-shaped cookies perfect for celebrations and special moments',
    price: 14.99,
    image: '/assets/cookies/kuki-2.jpg',
    category: 'colorful',
    featured: true
  },
  {
    id: '3',
    name: 'Double Chocolate Delight',
    description: 'Rich, decadent cookies made with premium cocoa and chocolate chips',
    price: 13.99,
    image: '/assets/cookies/kuki-3.jpg',
    category: 'chocolate'
  },
  {
    id: '4',
    name: 'Pastel Dream Cookies',
    description: 'Delicate cookies with beautiful pastel colors and sprinkles',
    price: 18.99,
    image: '/assets/cookies/kuki-4.jpg',
    category: 'delicate',
    featured: true
  },
  {
    id: '5',
    name: 'Creamy Cookie Sandwich',
    description: 'Two soft cookies with creamy buttercream filling',
    price: 15.99,
    image: '/assets/cookies/kuki-5.jpg',
    category: 'specialty'
  },
  {
    id: '6',
    name: 'Celebration Confetti',
    description: 'Party-ready cookies loaded with rainbow sprinkles and joy',
    price: 13.99,
    image: '/assets/cookies/kuki-6.jpg',
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