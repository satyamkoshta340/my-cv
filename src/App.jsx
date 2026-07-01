import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { pageVariants } from './components/motion';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PAGES = [About, Projects, Resume, Contact];

function App() {
  const [state, setState] = useState(0);
  const ActivePage = PAGES[state];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state]);

  return (
    <div className="app-shell">
      <AnimatedBackground />
      <div className="main">
        <Header state={state} setState={setState} />
        <div className="terminal-body">
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
        </div>
        <Footer setState={setState} />
      </div>
    </div>
  );
}

export default App;
