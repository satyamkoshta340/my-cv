import { FiGithub, FiLinkedin, FiInstagram, FiGitBranch } from 'react-icons/fi';

const LINKS = [
  { Icon: FiGithub, label: 'github', href: 'https://github.com/satyamkoshta340' },
  { Icon: FiLinkedin, label: 'linkedin', href: 'https://www.linkedin.com/in/satyamkoshta340/' },
  { Icon: FiInstagram, label: 'instagram', href: 'https://www.instagram.com/windtalker340/' },
];

function Footer() {
  return (
    <footer className="statusbar">
      <div className="sb-left">
        <span className="sb-branch">
          <FiGitBranch /> main
        </span>
        <span className="sb-ok">● available for hire</span>
      </div>
      <div className="sb-right">
        {LINKS.map(({ Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            <Icon /> <span>{label}</span>
          </a>
        ))}
        <span className="sb-copy">UTF-8</span>
      </div>
    </footer>
  );
}

export default Footer;
