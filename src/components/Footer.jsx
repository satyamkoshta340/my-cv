import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const LINKS = [
  { Icon: FiGithub, label: 'GitHub', href: 'https://github.com/satyamkoshta340' },
  { Icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyamkoshta340/' },
  { Icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/windtalker340/' },
];

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        {LINKS.map(({ Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            <Icon /> <span>{label}</span>
          </a>
        ))}
      </div>
      <span className="footer-copy">© {new Date().getFullYear()} Satyam Koshta</span>
    </footer>
  );
}

export default Footer;
