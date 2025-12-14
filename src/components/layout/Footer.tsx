import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui';
import { socialLinks } from '@/data/social';
import { fadeInUp } from '@/utils/animations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'whatsapp':
        return <Phone className="w-5 h-5" />;
      default:
        return <div className="w-5 h-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-white border-t border-pastel-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🍪</span>
              <span className="font-bold text-xl gradient-text">
                Femes Kuki
              </span>
            </div>
            <p className="text-neutral-gray max-w-sm">
              Creating delicious, colorful homemade cookies with love.
              Fresh ingredients, unforgettable taste.
            </p>
            <div className="flex space-x-3">
              {socialLinks.slice(0, 3).map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === 'email' ? undefined : '_blank'}
                  rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 bg-accent-pink/10 rounded-full flex items-center justify-center text-accent-pink hover:bg-accent-pink hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(link.platform)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg text-neutral-charcoal">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-gray hover:text-accent-pink transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg text-neutral-charcoal">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:order@femeskuki.com"
                className="flex items-center space-x-3 text-neutral-gray hover:text-accent-pink transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>order@femeskuki.com</span>
              </a>
              <a
                href="https://wa.me/601133272447"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-neutral-gray hover:text-accent-pink transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+6011-3327 2447</span>
              </a>
            </div>
            <div className="pt-4">
              <Button
                size="sm"
                fullWidth
                href="https://wa.me/60123456789?text=Hi! I'd like to order some cookies!"
                target="_blank"
              >
                Order via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-pastel-cream flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-neutral-gray text-sm">
            © {currentYear} Femes Kuki. All rights reserved. Made with{' '}
            <span className="text-accent-coral">❤️</span> and cookies.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-neutral-gray hover:text-accent-pink transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-gray hover:text-accent-pink transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-coral text-white rounded-full shadow-medium hover:shadow-large flex items-center justify-center transition-all duration-300 hover:bg-accent-coral/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;