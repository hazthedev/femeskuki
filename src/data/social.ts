import { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/femeskuki?igsh=YXh6MWhkbDNmN3ky&utm_source=qr',
    handle: '@femeskuki'
  },
  {
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@femes.kuki?_r=1&_t=ZS-92Bspuzr2Cl',
    handle: '@femes.kuki'
  },
  {
    platform: 'whatsapp',
    url: 'https://wa.me/601133272447',
    handle: '+601133272447'
  },
  {
    platform: 'email',
    url: 'mailto:order@femeskuki.com',
    handle: 'order@femeskuki.com'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Lim',
    message: 'The best cookies I\'ve ever tasted! The Rainbow Sugar Cookies were a huge hit at my daughter\'s birthday party.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmad Rahman',
    message: 'Femes Kuki never disappoints! Fresh, delicious, and beautifully packaged. Perfect for gifting.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Chen',
    message: 'Ordered the Chocolate Chip Classic and it brought back childhood memories. Will definitely order again!',
    rating: 5
  }
];

export const easterEggRewards = [
  {
    id: '1',
    clicksRequired: 10,
    title: 'Cookie Rookie!',
    message: 'You found the secret! You\'re on your way to becoming a cookie master! 🍪',
    type: 'message'
  },
  {
    id: '2',
    clicksRequired: 25,
    title: 'Cookie Explorer',
    message: 'Wow! You\'re really clicking those cookies! Here\'s a virtual high-five! 👋',
    type: 'message'
  },
  {
    id: '3',
    clicksRequired: 50,
    title: 'DISCOUNT UNLOCKED!',
    message: 'Congratulations! Use code COOKIE50 for 10% off your next order! 🎉',
    discountCode: 'COOKIE50',
    type: 'discount'
  },
  {
    id: '4',
    clicksRequired: 75,
    title: 'Cookie Master',
    message: 'Incredible! Your dedication to cookies is unmatched! 🌟',
    type: 'message'
  },
  {
    id: '5',
    clicksRequired: 100,
    title: 'SECRET MENU REVEALED!',
    message: 'You\'ve unlocked our secret cookie: The Golden Double Chocolate with edible gold flakes! Ask for it by name! ✨',
    type: 'secret'
  }
];