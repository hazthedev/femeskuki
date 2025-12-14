import React from 'react';
import { motion } from 'framer-motion';
import { Button, Image } from '@/components/ui';
import { fadeInUp, cookieFloat } from '@/utils/animations';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/cookies/kuki-1.jpg"
          alt="Femes Kuki cookies background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/90 via-pastel-cream/80 to-pastel-blue/70" />
      </div>

      {/* Floating Cookie Elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20 z-10"
        variants={cookieFloat}
        initial="initial"
        animate="animate"
      >
        🍪
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl opacity-20 z-10"
        variants={cookieFloat}
        initial="initial"
        animate="animate"
        style={{ transitionDelay: '1s' }}
      >
        🧁
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-5xl opacity-20 z-10"
        variants={cookieFloat}
        initial="initial"
        animate="animate"
        style={{ transitionDelay: '2s' }}
      >
        🍩
      </motion.div>

      <div className="container-custom text-center z-20 px-4 relative">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Femes Kuki
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-neutral-gray mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          Biskut buatan sendiri yang sedap dengan warna menarik dan penuh kasih sayang
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            pulse
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Buat Pesanan Sekarang
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lihat Menu
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-accent-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-pink rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;