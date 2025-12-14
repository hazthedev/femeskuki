import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui';
import { fadeInDown, staggerContainer } from '@/utils/animations';
import { socialLinks } from '@/data/social';
import GoogleTranslate from '@/components/features/GoogleTranslate';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#social-proof' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1);
    // Easter egg trigger after 5 clicks
    if (logoClicks === 4) {
      window.dispatchEvent(new CustomEvent('triggerEasterEgg'));
      setLogoClicks(0);
    }
  };

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">🍪</span>
              <span className="font-bold text-xl md:text-2xl gradient-text">
                Femes Kuki
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-gray hover:text-accent-pink font-medium transition-colors duration-200 relative group"
                  onClick={() => handleSmoothScroll(item.href)}
                  variants={fadeInDown}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-pink transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Google Translate */}
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-neutral-gray" />
                <GoogleTranslate />
              </div>

              {/* CTA Button */}
              <Button
                size="sm"
                onClick={() => handleSmoothScroll('#contact')}
                pulse
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-gray hover:text-accent-pink transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4 py-4 border-t border-white/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="text-neutral-gray hover:text-accent-pink font-medium transition-colors duration-200"
                      onClick={() => handleSmoothScroll(item.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="flex items-center justify-center space-x-2 pt-4">
                    <Languages className="w-4 h-4 text-neutral-gray" />
                    <span className="text-neutral-gray">Translate:</span>
                    <GoogleTranslate />
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      fullWidth
                      onClick={() => handleSmoothScroll('#contact')}
                    >
                      Order Now
                    </Button>
                  </div>
                  <div className="flex justify-center space-x-4 pt-4">
                    {socialLinks.slice(0, 3).map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-gray hover:text-accent-pink transition-colors"
                      >
                        {link.platform === 'instagram' && '📷'}
                        {link.platform === 'tiktok' && '🎵'}
                        {link.platform === 'whatsapp' && '💬'}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;