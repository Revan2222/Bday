
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import siteConfig from '../config/siteConfig';
import '../styles/FinalePage.css';

export default function FinalePage() {

  const [celebrate, setCelebrate] = useState(false);

  const [dims, setDims] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {

    const resize = () => {
      setDims({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', resize);

    return () =>
      window.removeEventListener('resize', resize);

  }, []);

  return (
    <section
      className="finale-page"
      id="finale"
    >

      {celebrate && (
        <Confetti
          width={dims.width}
          height={dims.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.22}
        />
      )}

      <div className="finale-stars" />

      <motion.h1
        className="finale-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Grand Finale 🎂
      </motion.h1>

      <motion.div
        className="cake-section"
        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="cake-emoji">
          🎂
        </div>
      </motion.div>

      <motion.h2
        className="birthday-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        HAPPY BIRTHDAY
      </motion.h2>

      <motion.div
        className="birthday-name"
        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {siteConfig.name}
      </motion.div>

      <motion.div
        className="birthday-message-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <h3>💌 A Small Message</h3>

        <p>
          {siteConfig.birthdayMessage}
        </p>

      </motion.div>

      <motion.div
        className="final-button-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        {!celebrate && (
          <button
            className="celebrate-button"
            onClick={() => setCelebrate(true)}
          >
            One Last Click 🎉
          </button>
        )}

      </motion.div>

      <AnimatePresence>

        {celebrate && (

          <motion.div
            className="celebration-card"
            initial={{
              opacity: 0,
              scale: .7
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
          >

            <h2>
              🎉 SURPRISE 🎉
            </h2>

            <p>
              Another year older.
              Another year more awesome.
            </p>

            <p>
              Wishing you endless happiness,
              success, laughter and memories.
            </p>

            <div className="celebration-name">
              Happy Birthday {siteConfig.name} ❤️
            </div>

            <div className="the-end">
              The End 🌙
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

