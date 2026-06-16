
import { motion } from 'framer-motion';
import GuideCharacter from '../components/GuideCharacter';
import '../styles/SpacePage.css';

export default function SpacePage() {
  return (
    <section className="space-page" id="space">

      <div className="space-stars" />

      <div className="space-content">

        <motion.div
          className="space-guide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GuideCharacter
            variant="astronaut"
            bubblePosition="right"
            text="Psst... I intercepted a secret transmission from outer space."
          />
        </motion.div>

        <motion.h1
          className="space-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Secret Space Transmission 🚀
        </motion.h1>

        <motion.p
          className="space-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I've hidden one last surprise among the stars.
          Scan the signal below to unlock it.
        </motion.p>

        <motion.div
          className="qr-card"
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >

          <div className="qr-glow" />

          <img
            src="public/Images/NASA Image.png"
            alt="Birthday Surprise QR"
            className="qr-image"
          />

          <div className="scan-text">
            Scan Here ✨
          </div>

        </motion.div>

        <motion.div
          className="cosmic-note"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h3>✨ Cosmic Message ✨</h3>

          <p>
            Some people receive birthday wishes.
          </p>

          <p>
            Some people receive birthday gifts.
          </p>

          <p>
            But only truly special people get
            their own signal broadcast across
            the universe. (U can see ur name from the sky🌌)
          </p>

          <p>
            This one is just for you 🌙
          </p>

        </motion.div>

      </div>

    </section>
  );
}

