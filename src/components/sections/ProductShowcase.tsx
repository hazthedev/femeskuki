import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { Image } from '@/components/ui';
import { products } from '@/data/products';
import { fadeInUp, staggerContainer } from '@/utils/animations';

// Tilt options configuration
const tiltOptions = {
  max: 15,
  speed: 400,
  glare: true,
  'max-glare': 0.3,
  scale: 1.05,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, tiltOptions);
    }

    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-pastel-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Cookie Gallery
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Feast your eyes on our beautiful cookie creations
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <TiltCard className="group">
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 bg-white">
                  <Image
                    src={product.image}
                    alt={`Cookie ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index < 3}
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-black/20 group-hover:to-transparent transition-all duration-500" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Note */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-accent-pink/60 text-sm italic">
            Hover over the images to see the magic ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;