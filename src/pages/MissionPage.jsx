
import { useRef } from 'react';
import { motion } from 'framer-motion';
import GuideCharacter from '../components/GuideCharacter';
import siteConfig from '../config/siteConfig';
import '../styles/MissionPage.css';

export default function MissionPage() {
  const profileRef = useRef(null);

  return (
    <section className="mission-page" id="mission">

      {/* Background */}
      <div className="mission-bg">
        <div className="stars" />
        <div className="moon" />
      </div>

      {/* Hero Section */}
      <div className="mission-hero">

        <motion.h1
          className="mission-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Shinchan's Secret Birthday Mission 🌙
        </motion.h1>

        <GuideCharacter
          text="Hey! Today is a very important day! I heard a super special birthday girl is hiding somewhere around here. Help me investigate!"
        />

        <div className="clue-grid">

          <motion.div
            className="clue-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="clue-number">Clue #1</span>
            <p>{siteConfig.clues?.[0]?.text || "Always makes people smile."}</p>
          </motion.div>

          <motion.div
            className="clue-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="clue-number">Clue #2</span>
            <p>{siteConfig.clues?.[1]?.text || "Known for being adorable."}</p>
          </motion.div>

          <motion.div
            className="clue-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="clue-number">Clue #3</span>
            <p>{siteConfig.clues?.[2]?.text || "Today's main character."}</p>
          </motion.div>

        </div>

        <motion.div
          className="mission-complete"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="complete-tag">MISSION COMPLETE</p>

          <h2 className="complete-title">
            We Found Her! 🎉
          </h2>

          <p className="complete-subtitle">
            Keep scrolling to view the classified birthday file...
          </p>
        </motion.div>

      </div>

      {/* PROFILE SECTION */}

      <div
        ref={profileRef}
        className="profile-section"
      >

        <motion.div
          className="profile-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="profile-header">
            CLASSIFIED BIRTHDAY FILE
          </div>

          <div className="profile-content">

            {/* LEFT SIDE */}

            <div className="profile-info">

              <div className="info-row">
                <span>Name</span>
                <strong>Roshini - STN</strong>
              </div>

              <div className="info-row">
                <span>Date of Birth</span>
                <strong>16 / June / 2004</strong>
              </div>

              <div className="info-row">
                <span>Height</span>
                <strong>Same Height as Shinchan😂</strong>
              </div>

              <div className="info-row">
                <span>Works At</span>
                <strong>Infosys</strong>
              </div>

              <div className="info-row">
                <span>Attitude Level</span>
                <strong>⭐⭐⭐</strong>
              </div>

              <div className="info-row">
                <span>Angry Level</span>
                <strong>⭐⭐⭐⭐⭐⭐</strong>
              </div>

              <div className="info-row">
                <span>Talent</span>
                <strong>Lazy and Always have a reason for excuses</strong>
              </div>

              <div className="fun-note">
                <h4>Investigation Notes</h4>

                <p>
                  Usually found spreading smiles.
                  Often fight with her friends.
                  May become slightly dangerous when hungry.
                  Approach with cake, gifts and compliments. 
                  
                  Unga peru Revan illama irutha sari nega safe uh😂
                </p>
              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="profile-image">

              <img
                src="src/Images/birthday-girl.png"
                alt="Birthday Girl"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

