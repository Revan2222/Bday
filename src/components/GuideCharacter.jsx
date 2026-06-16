import { motion } from 'framer-motion';
import '../styles/GuideCharacter.css';

/**
 * GuideCharacter — a cute cartoon guide (Shinchan-inspired, but original
 * design to avoid copyright issues: a cheeky round-headed kid with a
 * single eyebrow tuft and a big grin) paired with a comic speech bubble.
 *
 * variant: 'normal' | 'astronaut' (for the space page)
 */
export default function GuideCharacter({ text, variant = 'normal', bubblePosition = 'right', className = '' }) {
  return (
    <div className={`guide-wrap ${className}`}>
      <motion.div
        className="guide-character"
        animate={{ y: [0, -8, 0], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {variant === 'astronaut' ? <AstronautSVG /> : <GuideSVG />}
      </motion.div>

      {text && (
        <motion.div
          className={`speech-bubble bubble-${bubblePosition}`}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}

function GuideSVG() {
  return (
    <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
      {/* head */}
      <ellipse cx="55" cy="55" rx="42" ry="40" fill="#FFE0C2" />
      {/* hair tuft */}
      <path d="M30 28 Q40 5 55 15 Q70 5 80 28 Q60 18 55 22 Q50 18 30 28Z" fill="#2B2B2B" />
      {/* single eyebrow */}
      <rect x="38" y="46" width="34" height="5" rx="2" fill="#2B2B2B" />
      {/* eyes */}
      <circle cx="42" cy="58" r="4" fill="#2B2B2B" />
      <circle cx="68" cy="58" r="4" fill="#2B2B2B" />
      {/* blush */}
      <circle cx="30" cy="68" r="6" fill="#FF9CEE" opacity="0.6" />
      <circle cx="80" cy="68" r="6" fill="#FF9CEE" opacity="0.6" />
      {/* big grin */}
      <path d="M38 72 Q55 90 72 72" stroke="#2B2B2B" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* body / shirt */}
      <rect x="25" y="92" width="60" height="26" rx="10" fill="#FF4D4D" />
      <rect x="40" y="92" width="30" height="10" rx="4" fill="#FFD93D" />
    </svg>
  );
}

function AstronautSVG() {
  return (
    <svg width="120" height="130" viewBox="0 0 120 130" fill="none">
      {/* helmet */}
      <circle cx="60" cy="55" r="42" fill="#E8F4FF" stroke="#6BCBFF" strokeWidth="4" />
      <circle cx="60" cy="55" r="34" fill="#0B0E2E" opacity="0.85" />
      {/* face inside helmet */}
      <ellipse cx="60" cy="58" rx="22" ry="20" fill="#FFE0C2" />
      <rect x="46" y="50" width="28" height="4" rx="2" fill="#2B2B2B" />
      <circle cx="50" cy="60" r="3" fill="#2B2B2B" />
      <circle cx="70" cy="60" r="3" fill="#2B2B2B" />
      <path d="M48 68 Q60 78 72 68" stroke="#2B2B2B" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* helmet shine */}
      <ellipse cx="42" cy="35" rx="8" ry="12" fill="white" opacity="0.4" />
      {/* suit body */}
      <rect x="30" y="95" width="60" height="30" rx="14" fill="#FFF8E7" stroke="#6BCBFF" strokeWidth="3" />
      <circle cx="60" cy="108" r="7" fill="#FF9CEE" />
    </svg>
  );
}
