import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import siteConfig from '../config/siteConfig';
import '../styles/MusicToggle.css';

/**
 * MusicToggle — floating button to play/pause background music.
 * If siteConfig.musicSrc is empty, the button still renders (so the
 * UI doesn't shift) but simply has nothing to play — see README.
 */
export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!siteConfig.musicSrc) return;
    audioRef.current = new Audio(siteConfig.musicSrc);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      className="music-toggle"
      onClick={toggle}
      whileTap={{ scale: 0.85 }}
      animate={playing ? { rotate: [0, 360] } : { rotate: 0 }}
      transition={playing ? { duration: 3, repeat: Infinity, ease: 'linear' } : {}}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={siteConfig.musicSrc ? 'Toggle background music' : 'Add a music file in siteConfig.js to enable'}
    >
      {playing ? '🔊' : '🎵'}
    </motion.button>
  );
}
