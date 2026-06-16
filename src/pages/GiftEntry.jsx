import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart } from '../components/Doodles';
import '../styles/GiftEntry.css';

/**
 * GiftEntry — the very first thing the user sees.
 * A floating gift box they click to "open", which triggers a shake,
 * lid pop, confetti flash, and zoom transition into the main site.
 */
export default function GiftEntry({ onOpen }) {
  const [stage, setStage] = useState('idle'); // idle -> shaking -> opened -> leaving

  const handleOpen = () => {
    if (stage !== 'idle') return;
    setStage('shaking');

    // shake for a bit, then pop the lid
    setTimeout(() => setStage('opened'), 700);
    // flash + confetti + zoom, then hand off to parent
    setTimeout(() => setStage('leaving'), 1700);
    setTimeout(() => onOpen(), 2500);
  };

  // sprinkle of floating stars/hearts in the background
  const floaters = Array.from({ length: 16 });

  return (
    <AnimatePresence>
      {stage !== 'leaving' || true ? (
        <motion.div
          className="gift-entry"
          exit={{ opacity: 0 }}
          animate={
            stage === 'leaving'
              ? { scale: 18, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: stage === 'leaving' ? 0.8 : 0.3, ease: 'easeInOut' }}
        >
          {/* Flash overlay */}
          <AnimatePresence>
            {(stage === 'opened' || stage === 'leaving') && (
              <motion.div
                className="gift-flash"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>

          {/* Floating background doodles */}
          <div className="gift-bg-floaters">
            {floaters.map((_, i) => {
              const isStar = i % 2 === 0;
              const left = Math.random() * 100;
              const delay = Math.random() * 4;
              const duration = 6 + Math.random() * 6;
              const size = 12 + Math.random() * 16;
              return (
                <motion.div
                  key={i}
                  className="gift-floater"
                  style={{ left: `${left}%` }}
                  initial={{ y: '110vh', opacity: 0 }}
                  animate={{ y: '-10vh', opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {isStar ? (
                    <Star size={size} color="var(--sunny-yellow)" />
                  ) : (
                    <Heart size={size} color="var(--pink)" />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="gift-tagline"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Someone has a surprise waiting for you...
          </motion.p>

          <motion.div
            className={`gift-box-wrap ${stage}`}
            animate={
              stage === 'shaking'
                ? { rotate: [0, -6, 6, -6, 6, -3, 3, 0], y: [0, -4, 0, -4, 0, -2, 0] }
                : { y: [0, -14, 0] }
            }
            transition={
              stage === 'shaking'
                ? { duration: 0.7 }
                : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <svg
              className="gift-shadow"
              width="220"
              height="30"
              viewBox="0 0 220 30"
            >
              <ellipse cx="110" cy="15" rx="100" ry="14" fill="rgba(58,46,44,0.15)" />
            </svg>

            <div className="gift-box">
              {/* Lid */}
              <motion.div
                className="gift-lid"
                animate={
                  stage === 'opened' || stage === 'leaving'
                    ? { y: -60, rotate: -18, opacity: 1 }
                    : { y: 0, rotate: 0 }
                }
                transition={{ duration: 0.5, ease: 'backOut' }}
              >
                <div className="gift-ribbon-v lid-ribbon" />
                <motion.div
                  className="gift-bow"
                  animate={{ rotate: [-4, 4, -4] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🎀
                </motion.div>
              </motion.div>

              {/* Box body */}
              <div className="gift-body">
                <div className="gift-ribbon-v" />
                <div className="gift-ribbon-h" />
                {(stage === 'opened' || stage === 'leaving') && (
                  <motion.div
                    className="gift-glow"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.4 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            </div>
          </motion.div>

          {stage === 'idle' && (
            <motion.button
              className="gift-open-btn"
              onClick={handleOpen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Open Gift 🎁
            </motion.button>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
