import React from 'react';
import { TbBrandCpp } from "react-icons/tb";
import SkillBlock from '../components/SkillBlock';
import { RiFileExcel2Line } from "react-icons/ri";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaPython } from "react-icons/fa";

function Resume() {
  return (
    <div className='resume'>
      <div className='main-headline'>
        Resume
      </div>
      <div className='details'>
        <div className=' row detail-items'>
          <div className='detail-block'>
            <div className='heading-box'>
              <h2 className='underline-heading'>Experience</h2>
            </div>
            <div className='detail-item'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2023 – Current</span>
                  <span className='detail-item-caption'>TCS – India</span>
                </div>
              </div>
              <h4>System Engineer</h4>
              <ul style={{marginLeft: '1.2em'}}>
                <li>Developed and deployed scalable full-stack features for a healthcare web application using React, Node.js, and Express, improving system performance and user experience.</li>
                <li>Migrated infrastructure from Heroku to AWS (EC2, S3, RDS), improving scalability, reliability, and deployment efficiency by over 40%.</li>
                <li>Designed and maintained automated background jobs using AWS services (e.g., Lambda, SQS, CloudWatch) to ingest and process multiple third-party resource datasets, enhancing backend efficiency.</li>
                <li>Designed and implemented critical data integration and synchronization features for smooth interoperability with third-party systems.</li>
                <li>Implemented CI/CD pipelines using GitHub Actions, automating testing, build, and deployment processes to reduce delivery cycle time by 30%.</li>
                <li>Collaborated closely with cross-functional teams in an Agile environment, participating in sprint planning, reviews, and code reviews.</li>
                <li>Developed a scalable gRPC-enabled service layer for LLM integration, utilizing LangChain to orchestrate agentic workflows and enabling modular, distributed AI-driven applications.</li>
              </ul>
            </div>
            <div className='detail-item'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2022</span>
                  <span className='detail-item-caption'>Swarajya Magazine</span>
                </div>
              </div>
              <h4>Python Developer Intern</h4>
              <p>Worked on email template generation service using
                python, html, css, postgresql database also implemented the referral application with email integration for the newsletter which enhance the buisness demand by 7%.</p>
            </div>
            <div className='detail-item'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2022</span>
                  <span className='detail-item-caption'>Agriday</span>
                </div>
              </div>
              <h4>Full Stack Developer Intern</h4>
              <p>Developed frontend website of the company, using ReactJs,
                Developed backend services, APIs used for website and mobile app.
                Designed Admin portal to directly communicate to the server.
                Also wrote scripts for scraping the high level data from the online resources for the
                live data points service.</p>
            </div>
          </div>

          <div className='detail-block'>
            <div className='heading-box'>
              <h2 className='underline-heading'>Education</h2>
            </div>
            <div className='detail-item'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2023</span>
                  <span className='detail-item-caption'>FET GKDU Haridwar</span>
                </div>
              </div>
              <h4>Computer Science & Engineering</h4>
              <p>BTech in Computer Science successfully completed, equipped with in-depth knowledge and practical skills to thrive in the dynamic field of technology.</p>
            </div>
            <div className='detail-space'></div>
            <div className='detail-item'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2018</span>
                  <span className='detail-item-caption'>SRK I C Katra</span>
                </div>
              </div>
              <h4>Intermediate</h4>
              <p>Intermediate studies completed, demonstrating strong academic foundation and readiness for further educational pursuits or professional endeavors.</p>
            </div>
            <div className='detail-space'></div>
            <div className='detail-item detail-item-last'>
              <div className='detail-item-header'>
                <div className='detail-item-header-block'>
                  <span className='detail-item-year'>2016</span>
                  <span className='detail-item-caption'>SRK I C Katra</span>
                </div>
              </div>
              <h4>Highschool</h4>
              <p>High school education successfully completed, showcasing a solid academic background.</p>
            </div>
          </div>

        </div>

        <div className='certificates'>
          <div className='heading-box'>
            <h2 className='underline-heading'>Certificates</h2>
          </div>
          <div className='row certificate-container'>
            <div className='row cert-block'>
              <div className='tech-icon'>
                <FaPython/>
              </div>
              <div className='cert-detail'>
                <h4>PYTHON DATA STRUCTURES</h4>
                <span>UNIVERSITY OF MICHIGAN </span>
                <span>Sept 2021</span>
              </div>
            </div>

            <div className='row cert-block'>
              <div className='tech-icon'>
                <MdOutlineDeveloperMode/>
              </div>
              <div className='cert-detail'>
                <h4>HTML, CSS, AND JAVASCRIPTS</h4>
                <span>JOHNS HOPKINS UNIVERSITY</span>
                <span>Sept 2021</span>
              </div>
            </div>

            <div className='row cert-block'>
              <div className='tech-icon'>
                <RiFileExcel2Line/>
              </div>
              <div className='cert-detail'>
                <h4>EXCEL SKILLS FOR BUSINESS</h4>
                <span>MACQUARIE UNIVERSITY </span>
                <span>Sept 2021</span>
              </div>
            </div>

          </div>
        </div>

        <div className='skills-block'>
          <div className='heading-box'>
            <h2 className='underline-heading'>Skills</h2>
          </div>
          <div className='row skills-container'>
            <SkillBlock skillName={"C++"} skillPower={95}/>
            <SkillBlock skillName={"Python"} skillPower={95}/>
            <SkillBlock skillName={"HTML"} skillPower={92}/>
            <SkillBlock skillName={"CSS"} skillPower={90}/>
            <SkillBlock skillName={"Javascript"} skillPower={90}/>
            <SkillBlock skillName={"Typescript"} skillPower={80}/>
            <SkillBlock skillName={"React"} skillPower={90}/>
            <SkillBlock skillName={"Node"} skillPower={92}/>
            <SkillBlock skillName={"Express"} skillPower={93}/>
            <SkillBlock skillName={"MongoDB"} skillPower={92}/>
            <SkillBlock skillName={"MySQL"} skillPower={90}/>
            <SkillBlock skillName={"Java"} skillPower={80}/>
            <SkillBlock skillName={"Git"} skillPower={85}/>
            <SkillBlock skillName={"Excel"} skillPower={70}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Resume