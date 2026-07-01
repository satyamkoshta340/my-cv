import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { fadeUp, stagger, viewportOnce } from '../components/motion';

const INFO = [
  { Icon: FiPhone, label: 'Call', value: '+91 89798 36655', href: 'tel:+918979836655' },
  { Icon: FiMail, label: 'Email', value: 'satyamkoshta340@gmail.com', href: 'mailto:satyamkoshta340@gmail.com' },
  { Icon: FiMapPin, label: 'Location', value: 'Delhi, India', href: null },
];

const SOCIAL = [
  { Icon: FiGithub, href: 'https://github.com/satyamkoshta340' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/satyamkoshta340/' },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, email, subject, message] = [...e.target].map((el) => el.value);
    const mailto = `mailto:satyamkoshta340@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="resume">
      <motion.div
        className="main-headline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Contact
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p className="contact-intro" variants={fadeUp}>
            Have a role, a project, or an idea? I&apos;m open to
            opportunities and always happy to talk shop.
          </motion.p>

          {INFO.map(({ Icon, label, value, href }) => (
            <motion.a
              key={label}
              className="contact-card"
              href={href || undefined}
              variants={fadeUp}
              whileHover={{ x: 6 }}
            >
              <div className="contact-ic">
                <Icon />
              </div>
              <div>
                <span className="contact-label">{label}</span>
                <h3>{value}</h3>
              </div>
            </motion.a>
          ))}

          <motion.div className="contact-social" variants={fadeUp}>
            {SOCIAL.map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="heading-box">
            <h2 className="underline-heading">How can I help?</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows={5} placeholder="Your message" required />
            <button type="submit" className="submit">
              {sent ? 'Opening your mail app…' : 'Send message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
