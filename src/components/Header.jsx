/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TABS = [
  { label: 'about', file: 'about.sh' },
  { label: 'projects', file: 'projects.json' },
  { label: 'resume', file: 'resume.log' },
  { label: 'contact', file: 'contact.md' },
];

function Header({ state, setState }) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [state]);

  return (
    <header className="term-chrome">
      {/* Title bar with traffic lights */}
      <div className="titlebar">
        <div className="lights">
          <span className="light light--red" />
          <span className="light light--yellow" />
          <span className="light light--green" />
        </div>
        <div className="titlebar-title">
          satyam@portfolio: <span className="tb-path">~/{TABS[state].label}</span>
        </div>
        <div className="titlebar-shell">zsh</div>
        <button
          className={`nav-toggle ${nav ? 'active' : ''}`}
          onClick={() => setNav(!nav)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Editor-style tab bar */}
      <nav className={`tabbar ${nav ? 'active' : ''}`}>
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            className={`tab ${state === i ? 'active' : ''}`}
            onClick={() => setState(i)}
          >
            <span className="tab-dot" />
            {tab.file}
            {state === i && (
              <motion.span layoutId="tab-underline" className="tab-underline" />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
