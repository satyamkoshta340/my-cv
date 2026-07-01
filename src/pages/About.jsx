import { motion } from 'framer-motion';
import Prompt from '../components/Prompt';
import Typewriter from '../components/Typewriter';
import Counter from '../components/Counter';
import { fadeUp, stagger, viewportOnce } from '../components/motion';
import satyamKoshtaResume from '../assets/SatyamKoshtaResume.pdf';

const ROLES = ['Full-Stack Engineer', 'Backend Systems', 'React Specialist', 'Cloud & DevOps'];

const WHOAMI = [
  ['name', '"Satyam Koshta"', 'string'],
  ['experience', '"3+ years"', 'string'],
  ['focus', '["distributed-systems", "auth", "cloud"]', 'array'],
  ['scale', '"600K+ users @ 98.9% uptime"', 'string'],
  ['location', '"Delhi, India"', 'string'],
  ['status', '"open to opportunities"', 'string'],
];

const SKILLS = {
  languages: ['Python', 'C++', 'JavaScript', 'TypeScript'],
  frameworks: ['FastAPI', 'Node.js', 'Express', 'React.js', 'Next.js', 'Redux', 'Jest'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  cloud_devops: ['AWS', 'ECS', 'Lambda', 'CloudFormation', 'Docker', 'GitHub Actions', 'CI/CD'],
};

const STATS = [
  { value: 3, suffix: '+', label: 'years_exp' },
  { value: 600, suffix: 'K+', label: 'users_served' },
  { value: 98.9, suffix: '%', label: 'auth_uptime', decimals: 1 },
  { value: 85, suffix: '%+', label: 'test_coverage' },
];

function About() {
  return (
    <div className="page-about">
      {/* whoami */}
      <Prompt path="~" command="whoami" />
      <motion.div
        className="hero-block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-name">Satyam Koshta</h1>
        <div className="hero-role">
          <span className="hero-arrow">$</span>
          <Typewriter words={ROLES} />
        </div>
      </motion.div>

      {/* cat about.json */}
      <div className="term-section">
        <Prompt path="~" command="cat" flags="about.json" />
        <motion.div
          className="code-block"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="code-brace">{'{'}</div>
          {WHOAMI.map(([key, val]) => (
            <motion.div className="code-row" variants={fadeUp} key={key}>
              <span className="code-key">&quot;{key}&quot;</span>
              <span className="code-colon">:</span>
              <span className="code-val">{val}</span>
              <span className="code-comma">,</span>
            </motion.div>
          ))}
          <div className="code-brace">{'}'}</div>
        </motion.div>
      </div>

      {/* summary */}
      <div className="term-section">
        <Prompt path="~" command="cat" flags="summary.txt" />
        <p className="term-out summary-out">
          Full-Stack Engineer with 3+ years owning end-to-end product development
          across distributed backend systems and high-performance frontend
          interfaces. Built a production OIDC/SSO provider serving 600K+ users,
          led cloud migrations to AWS, and drives measurable reliability and
          performance gains through CI/CD automation and rigorous testing.
        </p>
      </div>

      {/* stats */}
      <div className="term-section">
        <Prompt path="~" command="./stats.sh" comment="career metrics" />
        <motion.div
          className="stats-row"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {STATS.map((s) => (
            <motion.div className="stat-card" variants={fadeUp} key={s.label}>
              <div className="stat-value">
                <Counter value={s.value} decimals={s.decimals || 0} />
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* skills */}
      <div className="term-section">
        <Prompt path="~/skills" command="ls" flags="-la" />
        <motion.div
          className="skill-tree"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {Object.entries(SKILLS).map(([group, items]) => (
            <motion.div className="skill-group" variants={fadeUp} key={group}>
              <div className="skill-group-name">
                <span className="dir-icon">drwx</span> {group}/
              </div>
              <div className="skill-chips">
                {items.map((it) => (
                  <span className="skill-chip" key={it}>{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* download */}
      <div className="term-section">
        <Prompt path="~" command="curl -O" flags="resume.pdf" />
        <a href={satyamKoshtaResume} download="SatyamKoshta_CV.pdf" className="dl-btn">
          <span className="dl-progress">100%</span> ⬇ download résumé
        </a>
      </div>
    </div>
  );
}

export default About;
