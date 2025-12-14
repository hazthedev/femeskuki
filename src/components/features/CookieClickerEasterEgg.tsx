import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Cookie } from 'lucide-react';
import { easterEggRewards } from '@/data/social';

const CookieClickerEasterEgg: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentReward, setCurrentReward] = useState<typeof easterEggRewards[0] | null>(null);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const handleTriggerEasterEgg = () => {
      setShowCookie(true);
    };

    const handleCookieClick = () => {
      setClicks(prev => prev + 1);
    };

    window.addEventListener('triggerEasterEgg', handleTriggerEasterEgg);
    window.addEventListener('secretCookieClick', handleCookieClick);

    return () => {
      window.removeEventListener('triggerEasterEgg', handleTriggerEasterEgg);
      window.removeEventListener('secretCookieClick', handleCookieClick);
    };
  }, []);

  useEffect(() => {
    const reward = easterEggRewards.find(r => r.clicksRequired === clicks);
    if (reward) {
      setCurrentReward(reward);
      setShowEasterEgg(true);
    }
  }, [clicks]);

  const handleClose = () => {
    setShowEasterEgg(false);
  };

  const copyDiscountCode = (code: string) => {
    navigator.clipboard.writeText(code);
    handleClose();
  };

  return (
    <>
      {/* Hidden Cookie Button */}
      <AnimatePresence>
        {showCookie && (
          <motion.button
            className="fixed bottom-4 right-4 w-12 h-12 bg-accent-mint rounded-full shadow-medium flex items-center justify-center text-2xl cursor-pointer z-40 hover:scale-110 transition-transform"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.dispatchEvent(new CustomEvent('secretCookieClick'))}
          >
            🍪
          </motion.button>
        )}
      </AnimatePresence>

      {/* Reward Modal */}
      <AnimatePresence>
        {showEasterEgg && currentReward && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-neutral-gray hover:text-neutral-charcoal"
                onClick={handleClose}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 bg-accent-mint rounded-full flex items-center justify-center mx-auto"
                >
                  {currentReward.type === 'discount' ? (
                    <Gift className="w-10 h-10 text-white" />
                  ) : currentReward.type === 'secret' ? (
                    <Cookie className="w-10 h-10 text-white" />
                  ) : (
                    <span className="text-4xl">🎉</span>
                  )}
                </motion.div>

                <h3 className="text-2xl font-bold text-neutral-charcoal">
                  {currentReward.title}
                </h3>

                <p className="text-neutral-gray">
                  {currentReward.message}
                </p>

                {currentReward.discountCode && (
                  <div className="bg-accent-pink/10 rounded-xl p-4">
                    <p className="text-sm text-neutral-gray mb-2">Kod diskaun anda:</p>
                    <button
                      className="font-mono font-bold text-lg text-accent-pink hover:text-accent-coral transition-colors"
                      onClick={() => copyDiscountCode(currentReward.discountCode!)}
                    >
                      {currentReward.discountCode}
                    </button>
                    <p className="text-xs text-neutral-gray mt-2">(Klik untuk salin)</p>
                  </div>
                )}

                <p className="text-sm text-neutral-gray">
                  Jumlah klik: {clicks}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieClickerEasterEgg;