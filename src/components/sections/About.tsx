import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold gradient-text mb-4"
              variants={fadeInUp}
            >
              Biskut pilihan anda 🍪
            </motion.h2>

            <motion.div
              className="space-y-4 text-neutral-gray leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                Bermula di Seremban, Negeri Sembilan, Femes Kuki memulakan resipi keluarga.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Kini kami menjadi pilihan utama untuk majlis istimewa - Hari Raya, Tahun Baru, Deepavali, dan semua sambutan istimewa anda.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Setiap kuki dihasilkan dengan cinta, menggunakan bahan-bahan berkualiti tinggi, membawa kenangan manis yang kekal abadi.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="font-medium text-accent-pink"
              >
                Femes Kuki - Setiap gigitan adalah cerita kami. ❤️
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={() => window.location.href = '#contact'}
                className="w-full sm:w-auto"
              >
                Buat Pesanan Sekarang
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-2 pt-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '🌟', text: 'Resipi Tradisional' },
                { icon: '🎨', text: 'Pesanan Istimewa' },
                { icon: '✨', text: 'Dibuat dengan Kasih' },
                { icon: '🚀', text: 'Penghantaran Seluruh Malaysia' }
              ].map((item, index) => (
                <motion.span
                  key={index}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-pastel-pink/20 rounded-full text-sm font-medium text-neutral-gray inline-flex items-center gap-2"
                >
                  {item.icon}
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative"
            >
              <img
                src="/assets/hero-kuki.jpg"
                alt="Femes Kuki - Biskut Buatan Sendiri"
                className="rounded-3xl shadow-2xl mx-auto w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-pink/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-orange/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-4 -left-4 w-12 h-12 bg-accent-mint/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <blockquote className="text-accent-pink font-medium text-lg italic">
            "Dari dapur kami dengan penuh cinta, kepada hati anda dengan kenangan manis"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;