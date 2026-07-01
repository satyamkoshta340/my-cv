import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { pageVariants } from './components/motion';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PAGES = [About, Resume, Contact];

function App() {
  const [state, setState] = useState(0);
  const ActivePage = PAGES[state];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state]);

  return (
    <div className="app-shell">
      <AnimatedBackground />
      <div className="main page">
        <Header state={state} setState={setState} />
        <AnimatePresence mode="wait">
          <motion.main
            key={state}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ActivePage setState={setState} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
