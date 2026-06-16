import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GiftEntry from './pages/GiftEntry';
import MissionPage from './pages/MissionPage';
import MemoryStreetPage from './pages/MemoryStreetPage';
import SpacePage from './pages/SpacePage';
import FinalePage from './pages/FinalePage';
import MusicToggle from './components/MusicToggle';
import './styles/variables.css';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!entered && <GiftEntry key="gift" onOpen={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <MissionPage />
          <MemoryStreetPage />
          <SpacePage />
          <FinalePage />
          <MusicToggle />
        </motion.main>
      )}
    </>
  );
}

export default App;
