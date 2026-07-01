/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import ApiIcon from '@mui/icons-material/Api';
import HubIcon from '@mui/icons-material/Hub';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WordAnimation from '../components/WordAnimation';
import Counter from '../components/Counter';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../components/motion';
import { TbBrandCpp, TbBrandTypescript } from 'react-icons/tb';
import { FaPython, FaNode, FaReact, FaGit, FaAws, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiRedux, SiExpress, SiNextdotjs, SiFastapi, SiJest,
} from 'react-icons/si';
import satyamBackground from '../assets/satyam.jpeg';
import satyamKoshtaResume from '../assets/SatyamKoshtaResume.pdf';

const WHAT_I_DO = [
  {
    Icon: VerifiedUserIcon,
    title: 'Auth & Identity',
    text: 'Architected an enterprise OIDC/SSO provider with full OAuth 2.0 authorization-server support, serving 600K+ users at 98.9% uptime.',
  },
  {
    Icon: CloudSyncIcon,
    title: 'Cloud & DevOps',
    text: 'Led cloud migration to AWS (ECS, CloudFormation, CloudWatch) and built GitHub Actions CI/CD pipelines that cut deployment time by 60%.',
  },
  {
    Icon: HubIcon,
    title: 'Distributed Systems',
    text: 'Design resilient microservices and retry pipelines with Node.js, Python, Redis, PostgreSQL and DynamoDB — cutting registration backlog by 89%.',
  },
  {
    Icon: ApiIcon,
    title: 'Frontend Craft',
    text: 'Deliver polished, accessible React.js interfaces with clean state management and modular SASS architecture for maintainable UIs.',
  },
];

const SKILLS = [
  { Icon: FaPython, name: 'Python' },
  { Icon: TbBrandCpp, name: 'C++' },
  { Icon: SiJavascript, name: 'JavaScript' },
  { Icon: TbBrandTypescript, name: 'TypeScript' },
  { Icon: FaReact, name: 'React' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiRedux, name: 'Redux' },
  { Icon: FaNode, name: 'Node.js' },
  { Icon: SiExpress, name: 'Express' },
  { Icon: SiFastapi, name: 'FastAPI' },
  { Icon: SiJest, name: 'Jest' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiMysql, name: 'MySQL' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiRedis, name: 'Redis' },
  { Icon: FaAws, name: 'AWS' },
  { Icon: FaDocker, name: 'Docker' },
  { Icon: FaGit, name: 'Git' },
];

const STATS = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 600, suffix: 'K+', label: 'Users Served' },
  { value: 98.9, suffix: '%', label: 'Auth Uptime', decimals: 1 },
  { value: 85, suffix: '%+', label: 'Test Coverage' },
];

function About({ setState }) {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero row align_center justify_center">
        <motion.div
          className="hero-copy"
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.span className="hero-hi" variants={fadeUp}>
            👋 Hi, I&apos;m
          </motion.span>
          <motion.h1 className="hero-name" variants={fadeUp}>
            Satyam Koshta
          </motion.h1>
          <motion.div variants={fadeUp}>
            <WordAnimation />
          </motion.div>
          <motion.p className="hero-summary" variants={fadeUp}>
            Full-Stack Engineer with 3+ years owning end-to-end product
            development across distributed backend systems and high-performance
            frontend interfaces — including a production OIDC/SSO provider
            serving 600K+ users.
          </motion.p>
          <motion.div className="row button-row" variants={fadeUp}>
            <a href={satyamKoshtaResume} download="SatyamKoshta_CV.pdf">
              <button className="button-main">Download CV</button>
            </a>
            <button className="button-ghost" onClick={() => setState(2)}>
              Get in touch
            </button>
          </motion.div>
          <motion.div className="row hero-socials" variants={fadeUp}>
            <a href="https://github.com/satyamkoshta340" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/satyamkoshta340/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            className="hero-photo-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <div
            className="hero-photo-img"
            style={{ backgroundImage: `url(${satyamBackground})` }}
          />
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <motion.div
        className="stats-row"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {STATS.map((s) => (
          <motion.div className="stat-card" variants={scaleIn} key={s.label}>
            <div className="stat-value">
              <Counter value={s.value} decimals={s.decimals || 0} />
              <span className="stat-suffix">{s.suffix}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── What I Do ────────────────────────────────── */}
      <section className="wid-container">
        <div className="heading-box">
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="underline-heading">What I Do</h2>
        </div>
        <motion.div
          className="wid-blocks"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {WHAT_I_DO.map(({ Icon, title, text }) => (
            <motion.div
              className="wid-block"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              key={title}
            >
              <div className="wid-icon">
                <Icon sx={{ fontSize: 30 }} />
              </div>
              <div className="wid-block-detail">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section className="wid-container">
        <div className="heading-box">
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="underline-heading">Key Skills</h2>
        </div>
        <motion.div
          className="skill-grid"
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {SKILLS.map(({ Icon, name }) => (
            <motion.div
              className="skill-chip"
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.05 }}
              key={name}
            >
              <Icon className="skill-icon" />
              <span>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default About;
