/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV = ['About', 'Resume', 'Contact'];

function Header({ state, setState }) {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [state]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      id="main_header"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`header ${nav ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="logo" onClick={() => setState(0)}>
        <a>
          <div className="logo_symbol">S</div>
          <div className="logo_text">
            Satyam <span>Koshta</span>
          </div>
        </a>
      </div>

      <div className="nav-button" onClick={() => setNav(!nav)}>
        <div className={`first ${nav ? 'active' : ''}`}></div>
        <div className={`second ${nav ? 'active' : ''}`}></div>
        <div className={`third ${nav ? 'active' : ''}`}></div>
      </div>

      <nav className={`main_nav ${nav ? 'active' : ''}`}>
        {NAV.map((label, i) => (
          <div
            key={label}
            className={`main_nav_item ${state === i ? 'current_item' : ''}`}
            onClick={() => setState(i)}
          >
            {label}
            {state === i && (
              <motion.span layoutId="nav-underline" className="nav-underline" />
            )}
          </div>
        ))}
      </nav>
    </motion.header>
  );
}

export default Header;
