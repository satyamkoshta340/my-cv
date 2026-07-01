/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Prompt from '../components/Prompt';
import { fadeUp, stagger, viewportOnce } from '../components/motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    name: 'url-shortner',
    tagline: 'FastAPI URL shortener with PostgreSQL, Redis caching & click analytics',
    lang: 'Python',
    langColor: '#3572A5',
    repo: 'https://github.com/satyamkoshta340/url-shortner',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Alembic', 'Docker', 'Locust'],
    highlights: [
      'Deterministic short codes via MD5 + Base62 encoding, persisted in PostgreSQL.',
      'Redis-backed redirect caching with dynamic TTL that adapts to request volume.',
      'Per-IP rate limiting (10/min shorten · 100/min redirect) with graceful fallback when Redis is down.',
      'Click analytics endpoint with 7-day breakdown; Alembic migrations for schema management.',
      'Fully containerized via Docker Compose (API + Postgres + Redis) with Locust load tests.',
    ],
    endpoints: [
      ['POST', '/shorten', 'create short code'],
      ['GET', '/{short_code}', 'redirect + log click'],
      ['GET', '/stats/{short_code}', 'click analytics'],
    ],
  },
  {
    name: 'realtime-collab-platform',
    tagline: 'Event-driven multiplayer collaboration platform with live Canvas rendering',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    repo: 'https://github.com/satyamkoshta340',
    stack: ['React', 'Node.js', 'Socket.io', 'Canvas', 'SASS'],
    highlights: [
      'Event-driven multiplayer engine on Socket.io + Node.js supporting concurrent users at low latency.',
      'Scalable frontend state synchronization with interactive Canvas-based collaborative rendering.',
      'Modular SASS architecture and reusable components for maintainable, responsive UI.',
    ],
    endpoints: null,
  },
];

function ProjectCard({ p }) {
  return (
    <motion.div className="proj-card" variants={fadeUp}>
      <div className="proj-head">
        <div className="proj-title">
          <span className="proj-repo-ic"><FiGithub /></span>
          <span className="proj-name">{p.name}</span>
        </div>
        <div className="proj-links">
          <a href={p.repo} target="_blank" rel="noreferrer">
            code <FiExternalLink />
          </a>
        </div>
      </div>

      <p className="proj-tagline">{p.tagline}</p>

      <div className="proj-stack">
        {p.stack.map((s) => (
          <span className="proj-tag" key={s}>{s}</span>
        ))}
      </div>

      <ul className="proj-highlights">
        {p.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {p.endpoints && (
        <div className="proj-endpoints">
          <span className="proj-ep-label"># api surface</span>
          {p.endpoints.map(([method, path, note]) => (
            <div className="proj-ep-row" key={path}>
              <span className={`ep-method ep-${method.toLowerCase()}`}>{method}</span>
              <span className="ep-path">{path}</span>
              <span className="ep-note">— {note}</span>
            </div>
          ))}
        </div>
      )}

      <div className="proj-foot">
        <span className="proj-lang">
          <span className="lang-dot" style={{ background: p.langColor }} />
          {p.lang}
        </span>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="page-projects">
      <Prompt path="~/projects" command="git log" flags="--oneline --stat" />
      <p className="term-out">
        <span className="ls-count">{PROJECTS.length}</span> repositories · sorted by
        recency. Full source on{' '}
        <a href="https://github.com/satyamkoshta340" target="_blank" rel="noreferrer">
          github.com/satyamkoshta340
        </a>
      </p>

      <motion.div
        className="proj-grid"
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {PROJECTS.map((p) => (
          <ProjectCard p={p} key={p.name} />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
