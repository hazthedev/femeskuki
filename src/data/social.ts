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
    message: 'Kuki terbaik yang pernah saya rasa! Kuki Gula Pelangi menjadi hit besar di parti hari jadi anak perempuan saya.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmad Rahman',
    message: 'Femes Kuki tidak pernah mengecewakan! Segar, lazat, dan dibungkus dengan cantik. Sempurna untuk hadiah.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Chen',
    message: 'Memesan Cip Coklat Klasik dan ia membawa kembali kenangan zaman kanak-kanak. Pasti akan memesan lagi!',
    rating: 5
  }
];

export const easterEggRewards = [
  {
    id: '1',
    clicksRequired: 10,
    title: 'Pemula Kuki!',
    message: 'Anda menemui rahsia! Anda sedang menjadi pakar kuki! 🍪',
    type: 'message'
  },
  {
    id: '2',
    clicksRequired: 25,
    title: 'Penjelajah Kuki',
    message: 'Wah! Anda betul-betul klik kuki ini! Ini high-five maya! 👋',
    type: 'message'
  },
  {
    id: '3',
    clicksRequired: 50,
    title: 'DISKAUN DIBUKA!',
    message: 'Tahniah! Gunakan kod COOKIE50 untuk 10% diskaun untuk pesanan seterusnya! 🎉',
    discountCode: 'COOKIE50',
    type: 'discount'
  },
  {
    id: '4',
    clicksRequired: 75,
    title: 'Master Kuki',
    message: 'Hebat! Dedikasi anda pada kuki tiada tandingan! 🌟',
    type: 'message'
  },
  {
    id: '5',
    clicksRequired: 100,
    title: 'MENU RAHSIA DIBONGKARKAN!',
    message: 'Anda telah membuka kuki rahsia kami: Double Chocolate Emas dengan kelipatan emas boleh dimakan! Tanya dengan nama ini! ✨',
    type: 'secret'
  }
];