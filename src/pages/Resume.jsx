/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import SkillBlock from '../components/SkillBlock';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../components/motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

const EXPERIENCE = [
  {
    year: 'Sep 2023 – Present',
    org: 'TCS — Delhi',
    role: 'System Engineer',
    points: [
      'Architected and deployed a custom OpenID Connect provider with full OAuth 2.0 authorization-server support, enabling enterprise SSO for 600K+ users at 98.9% authentication uptime.',
      'Led end-to-end cloud migration from Heroku to AWS (ECS, CloudFormation, CloudWatch) with a high-availability, auto-scaling architecture; GitHub Actions CI/CD cut deployment time by 60% (20 → 8 min).',
      'Built and optimized enterprise-grade healthcare microservices with Node.js, React.js, Python, Redis, PostgreSQL and AWS, improving response times by 25%.',
      'Engineered a DynamoDB-backed reprocessing pipeline with a 3-attempt retry mechanism and automated incident escalation, reducing registration backlog by 89%.',
      'Established a test-engineering culture with comprehensive Jest unit/integration suites, reaching 85%+ coverage on authentication flows and core APIs.',
    ],
  },
  {
    year: 'Oct 2022 – Dec 2022',
    org: 'Swarajya — Remote',
    role: 'Full Stack Intern',
    points: [
      'Developed dynamic, reusable, responsive email templates (HTML/CSS) with cross-client compatibility.',
      'Built a referral system with automated email integration, increasing newsletter subscriptions by 21%.',
      'Created a Handlebars.js email-generation system integrated with backend newsletter services for automated, personalized daily communications.',
    ],
  },
  {
    year: 'Apr 2022 – Oct 2022',
    org: 'Agriday — Remote',
    role: 'Full Stack Intern',
    points: [
      'Built a React.js platform using React Router and Context API with RESTful backend integration.',
      'Created scraping scripts that continuously collected data from online sources, enabling near real-time streaming at 90% availability.',
      'Integrated real-time in-app messaging via Firebase Cloud Messaging for instant user notifications.',
    ],
  },
];

const EDUCATION = [
  {
    year: 'Jul 2019 – Jul 2023',
    org: 'FET GKV Haridwar',
    role: 'B.Tech, Computer Science',
    text: 'Bachelor of Technology in Computer Science & Engineering. CGPA: 8.8 / 10.0.',
  },
];

const PROJECTS = [
  {
    title: 'Real-Time Multiplayer Collaboration Platform',
    stack: 'React · Node · Socket.io · Canvas',
    points: [
      'Event-driven multiplayer platform on Socket.io and Node.js supporting concurrent users with low latency.',
      'Scalable frontend state synchronization with interactive Canvas-based rendering for collaborative sessions.',
      'Improved UI maintainability and responsiveness with a modular SASS architecture and reusable components.',
    ],
  },
];

const SKILLS = [
  ['Python', 95], ['C++', 88], ['JavaScript', 92], ['TypeScript', 85],
  ['React.js', 93], ['Next.js', 82], ['Node.js', 92], ['Express', 90],
  ['FastAPI', 85], ['PostgreSQL', 88], ['MongoDB', 86], ['Redis', 82],
  ['AWS', 88], ['Docker', 84], ['Git & CI/CD', 90],
];

function TimelineItem({ item, isLast }) {
  return (
    <motion.div className={`tl-item ${isLast ? 'tl-item-last' : ''}`} variants={fadeUp}>
      <div className="tl-marker" />
      <div className="tl-header">
        <span className="tl-year">{item.year}</span>
        <span className="tl-org">{item.org}</span>
      </div>
      <h4 className="tl-role">{item.role}</h4>
      {item.points ? (
        <ul className="tl-points">
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : (
        <p className="tl-text">{item.text}</p>
      )}
    </motion.div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <motion.div
        className="main-headline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Resume
      </motion.div>

      <div className="details">
        <div className="detail-items">
          {/* Experience */}
          <div className="detail-block">
            <div className="heading-box">
              <h2 className="underline-heading">
                <FiBriefcase className="head-ic" /> Experience
              </h2>
            </div>
            <motion.div
              className="timeline"
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {EXPERIENCE.map((item, i) => (
                <TimelineItem key={item.org} item={item} isLast={i === EXPERIENCE.length - 1} />
              ))}
            </motion.div>
          </div>

          {/* Education + Projects */}
          <div className="detail-block">
            <div className="heading-box">
              <h2 className="underline-heading">
                <FiBookOpen className="head-ic" /> Education
              </h2>
            </div>
            <motion.div
              className="timeline"
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {EDUCATION.map((item, i) => (
                <TimelineItem key={item.org} item={item} isLast={i === EDUCATION.length - 1} />
              ))}
            </motion.div>

            <div className="heading-box" style={{ marginTop: '2.5rem' }}>
              <h2 className="underline-heading">
                <HiOutlineSparkles className="head-ic" /> Projects
              </h2>
            </div>
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {PROJECTS.map((p) => (
                <motion.div className="project-card" variants={fadeUp} whileHover={{ y: -5 }} key={p.title}>
                  <h4>{p.title}</h4>
                  <span className="project-stack">{p.stack}</span>
                  <ul className="tl-points">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-block">
          <div className="heading-box">
            <h2 className="underline-heading">Skills</h2>
          </div>
          <motion.div
            className="skills-container"
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {SKILLS.map(([name, power]) => (
              <motion.div variants={scaleIn} key={name} style={{ width: '100%' }}>
                <SkillBlock skillName={name} skillPower={power} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
