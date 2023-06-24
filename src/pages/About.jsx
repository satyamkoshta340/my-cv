import React, {useRef, useEffect} from 'react';
import ApiIcon from '@mui/icons-material/Api';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import WordAnimation from '../components/WordAnimation';
import { TbBrandCpp, TbBrandJavascript } from "react-icons/tb";
import { FaPython, FaHtml5, FaCss3, FaSass, FaNode, FaReact, FaGit, FaAward, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql, SiPostman, SiRedux, SiLeetcode, SiHackerrank} from "react-icons/si";
import satyamBackground from '../assets/satyam.jpeg';

function About() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const containerRect = container.getBoundingClientRect();
      const mouseX = clientX - containerRect.left;
      const mouseY = clientY - containerRect.top;

      const offsetX = containerRect.width / 2 - mouseX;
      const offsetY = containerRect.height / 2 - mouseY;

      background.style.transform = `translate(${offsetX * 0.01}px, ${offsetY * 0.01}px)`;
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
        <div className='row align_center justify_center main_photo_container'>
          <div ref={containerRef} className="container">
            <div ref={backgroundRef} className="background" style={{ backgroundImage: `url(${satyamBackground})`}}></div>
          </div>
          <div className='about_info'>
              {/* <span className='about_title'>Web Designer</span> */}
              <WordAnimation />
              <h1>Satyam Koshta</h1>
              <p>A software engineer from India. Always curious to learn new things and work in the collavoration of team, and have aprecise ability to lead teams to give a productive output.</p>
              <div className='row button-row'>
                <a href="/src/assets/SatyamKoshtaResume.pdf" download="SatyamKoshtaResume"><button className='button-main'>Download CV</button></a>
                <a href='mailto:satyamkoshta340@gmail.com'><button>Contact</button></a>
              </div>
          </div>
        </div>
        <div className='wid-container'>
          <div className='heading-box'>
            <h2 className='underline-heading'>What I Do</h2>
          </div>
          <div className='row wid-blocks'>
            <div className='row wid-block'>
              <ApiIcon color='primary' sx ={{fontSize: 40}}/>
              <div className='wid-block-detail'>
                <h3>API</h3>
                <p>
                Passionate about building robust REST APIs, leveraging industry best practices and frameworks to deliver scalable and secure solutions for seamless client-server communication.
                </p>
              </div>
            </div>
            <div className='row wid-block'>
              <CodeIcon color='primary' sx ={{fontSize: 40}}/>
              <div className='wid-block-detail'>
                <h3>Problem Solving</h3>
                <p>
                Dedicated developer adept at leveraging Data Structures and Algorithms (DSA) to tackle complex problems, providing efficient and optimized solutions.
                </p>
              </div>
            </div>
            <div className='row wid-block'>
              <DeveloperModeIcon color='primary' sx ={{fontSize: 40}}/>
              <div className='wid-block-detail'>
                <h3>Development</h3>
                <p>
                Experienced in full-stack development using the MERN stack, employing modern tools and technologies to build responsive and feature-rich applications.
                </p>
              </div>
            </div>
            <div className='row wid-block'>
              <GitHubIcon color='primary' sx ={{fontSize: 40}}/>
              <div className='wid-block-detail'>
                <h3>Open Source Dev</h3>
                <p>
                Enthusiastic developer with a strong affinity for open-source projects, actively contributing and collaborating using Git for version control and code management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='wid-container'>
          <div className='heading-box'>
            <h2 className='underline-heading'>Key Skills</h2>
          </div>
          <div>
            <div className='row skil-row'> 
              <TbBrandCpp className='skill-icon'/>
              <FaPython className='skill-icon'/>
              <FaHtml5 className='skill-icon'/>
              <FaCss3 className='skill-icon'/>
              <TbBrandJavascript className='skill-icon'/>
              <SiMongodb className='skill-icon'/>
              <SiMysql className='skill-icon'/>
              <SiPostgresql className='skill-icon'/>
              <FaSass className='skill-icon'/>
              <FaNode className='skill-icon'/>
              <FaReact className='skill-icon'/>
              <SiRedux className='skill-icon'/>
              <SiPostman className='skill-icon'/>
              <FaGit className='skill-icon'/>
              
            </div>
          </div>
        </div>
        <div className='wid-container'>
          <div className='heading-box'>
            <h2 className='underline-heading'>Fun Facts</h2>
          </div>
          <div className='row ff-item-container'>
            <div className='ff-item'>
              <FaAward className='ff-icon'/>
              <h4>Hacktober Fest</h4>
              <span>3</span>
            </div>
            <div className='ff-item'>
              <SiLeetcode className='ff-icon'/>
              <h4>Solved Problems</h4>
              <span>400<sup>+</sup></span>
            </div>
            <div className='ff-item'>
              <SiHackerrank className='ff-icon'/>
              <h4>Gold Badges</h4>
              <span>4</span>
            </div>
            <div className='ff-item'>
              <FaLinkedin className='ff-icon'/>
              <h4>Connections</h4>
              <span>500<sup>+</sup></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About