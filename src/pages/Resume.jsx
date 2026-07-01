/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Prompt from '../components/Prompt';
import SkillBlock from '../components/SkillBlock';
import { fadeUp, stagger, viewportOnce } from '../components/motion';

const EXPERIENCE = [
  {
    hash: 'a1f9c2e',
    date: 'Sep 2023 – Present',
    role: 'System Engineer',
    org: 'TCS — Delhi',
    tag: 'current',
    points: [
      'Architected a custom OpenID Connect provider with full OAuth 2.0 authorization-server support — enterprise SSO for 600K+ users at 98.9% uptime.',
      'Led cloud migration Heroku → AWS (ECS, CloudFormation, CloudWatch); GitHub Actions CI/CD cut deploy time 60% (20 → 8 min).',
      'Optimized healthcare microservices (Node.js, React, Python, Redis, PostgreSQL, AWS) — 25% faster responses.',
      'Built a DynamoDB retry pipeline (3-attempt + auto-escalation) — 89% cut in registration backlog.',
      'Authored Jest unit/integration suites reaching 85%+ coverage on auth flows and core APIs.',
    ],
  },
  {
    hash: 'b7d4e10',
    date: 'Oct 2022 – Dec 2022',
    role: 'Full Stack Intern',
    org: 'Swarajya — Remote',
    tag: null,
    points: [
      'Built responsive, reusable email templates (HTML/CSS) with cross-client compatibility.',
      'Shipped a referral system with automated email integration — +21% newsletter subscriptions.',
      'Created a Handlebars.js email-generation system wired to backend newsletter services.',
    ],
  },
  {
    hash: 'c3a8f56',
    date: 'Apr 2022 – Oct 2022',
    role: 'Full Stack Intern',
    org: 'Agriday — Remote',
    tag: null,
    points: [
      'Built a React platform (React Router + Context API) with RESTful backend integration.',
      'Wrote scraping scripts for near real-time data streaming at 90% availability.',
      'Integrated real-time in-app messaging via Firebase Cloud Messaging.',
    ],
  },
];

const EDUCATION = {
  hash: 'e0b1a99',
  date: 'Jul 2019 – Jul 2023',
  role: 'B.Tech, Computer Science & Engineering',
  org: 'FET GKV Haridwar',
  detail: 'CGPA: 8.8 / 10.0',
};

const SKILLS = [
  ['python', 95], ['javascript', 92], ['react.js', 93], ['node.js', 92],
  ['typescript', 85], ['fastapi', 85], ['postgresql', 88], ['redis', 82],
  ['aws', 88], ['docker', 84], ['c++', 88], ['git / ci-cd', 90],
];

function CommitEntry({ item }) {
  return (
    <motion.div className="commit" variants={fadeUp}>
      <div className="commit-line">
        <span className="commit-hash">{item.hash}</span>
        <span className="commit-role">{item.role}</span>
        {item.tag && <span className="commit-tag">({item.tag})</span>}
      </div>
      <div className="commit-meta">
        <span className="commit-org">{item.org}</span>
        <span className="commit-sep">·</span>
        <span className="commit-date">{item.date}</span>
      </div>
      {item.points && (
        <ul className="commit-points">
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
      {item.detail && <div className="commit-detail">{item.detail}</div>}
    </motion.div>
  );
}

function Resume() {
  return (
    <div className="page-resume">
      {/* Experience */}
      <Prompt path="~/resume" command="git log" flags="--author=satyam" comment="work history" />
      <motion.div
        className="commit-list"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {EXPERIENCE.map((item) => (
          <CommitEntry item={item} key={item.hash} />
        ))}
      </motion.div>

      {/* Education */}
      <div className="term-section">
        <Prompt path="~/resume" command="cat" flags="education.log" />
        <motion.div
          className="commit-list"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <CommitEntry item={EDUCATION} />
        </motion.div>
      </div>

      {/* Skills */}
      <div className="term-section">
        <Prompt path="~/resume" command="./skills.sh" flags="--proficiency" />
        <motion.div
          className="skills-container"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {SKILLS.map(([name, power]) => (
            <motion.div variants={fadeUp} key={name} style={{ width: '100%' }}>
              <SkillBlock skillName={name} skillPower={power} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
