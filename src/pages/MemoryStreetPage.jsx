
import { motion } from 'framer-motion';
import GuideCharacter from '../components/GuideCharacter';
import siteConfig from '../config/siteConfig';
import '../styles/MemoryStreet.css';

export default function MemoryStreetPage() {
  return (
    <section className="memory-page" id="memories">

      <div className="memory-stars" />

      <motion.h1
        className="memory-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Memory Street 📸
      </motion.h1>

      <div className="memory-guide">
        <GuideCharacter
          text="These are some of the memories,Let's walk through!"
        />
      </div>

      <div className="timeline">

        {siteConfig.memories.map((memory, index) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            index={index}
          />
        ))}

      </div>

      <div className="memory-ending">
        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          🌟 End Of Memory Street 🌟
        </motion.div>
      </div>

    </section>
  );
}

function MemoryCard({ memory, index }) {

  const right = index % 2 === 1;

  return (
    <div className={`timeline-item ${right ? 'right' : 'left'}`}>

      <div className="timeline-dot" />

      <motion.div
        className="memory-card"
        initial={{
          opacity: 0,
          x: right ? 80 : -80
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true,
          amount: 0.2
        }}
        transition={{
          duration: .7
        }}
      >

        <div className="memory-number">
          Memory #{index + 1}
        </div>

        {memory.photo && (
  <img
    src={memory.photo}
    alt={memory.title}
    className="memory-photo"
  />
)}

        <h3>{memory.title}</h3>

        <p>{memory.text}</p>

      </motion.div>

    </div>
  );
}

