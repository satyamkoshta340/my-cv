import { useState } from 'react';
import { motion } from 'framer-motion';
import Prompt from '../components/Prompt';
import { fadeUp, stagger, viewportOnce } from '../components/motion';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const INFO = [
  { Icon: FiMail, key: 'email', value: 'satyamkoshta340@gmail.com', href: 'mailto:satyamkoshta340@gmail.com' },
  { Icon: FiPhone, key: 'phone', value: '+91 89798 36655', href: 'tel:+918979836655' },
  { Icon: FiMapPin, key: 'location', value: 'Delhi, India', href: null },
  { Icon: FiGithub, key: 'github', value: 'github.com/satyamkoshta340', href: 'https://github.com/satyamkoshta340' },
  { Icon: FiLinkedin, key: 'linkedin', value: 'linkedin.com/in/satyamkoshta340', href: 'https://www.linkedin.com/in/satyamkoshta340/' },
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
    <div className="page-contact">
      <Prompt path="~/contact" command="cat" flags="contact.md" />
      <motion.div
        className="contact-info code-block"
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {INFO.map(({ Icon, key, value, href }) => (
          <motion.div className="contact-row" variants={fadeUp} key={key}>
            <span className="contact-ic"><Icon /></span>
            <span className="contact-key">{key}</span>
            <span className="code-colon">=</span>
            {href ? (
              <a className="contact-val" href={href} target="_blank" rel="noreferrer">
                {value}
              </a>
            ) : (
              <span className="contact-val plain">{value}</span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="term-section">
        <Prompt path="~/contact" command="./send-message.sh" comment="drop me a line" />
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <label className="field">
            <span className="field-label">$ name:</span>
            <input type="text" placeholder="your name" required />
          </label>
          <label className="field">
            <span className="field-label">$ email:</span>
            <input type="email" placeholder="you@domain.com" required />
          </label>
          <label className="field">
            <span className="field-label">$ subject:</span>
            <input type="text" placeholder="subject line" required />
          </label>
          <label className="field field--area">
            <span className="field-label">$ message:</span>
            <textarea rows={5} placeholder="type your message..." required />
          </label>
          <button type="submit" className="send-btn">
            {sent ? '✓ opening mail client...' : '▸ execute send'}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
