import React from 'react';
import { GiSmartphone } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <div className='resume'>
      <div className='main-headline'>
        Contact
      </div>
      <div className='details'>
        <div className='row contact-container'>
          <div className='col contact-detail-block'>

            <div className='row'>
              <GiSmartphone className='contact-icon'/>
              <div className='wid-block-detail'>
                <h3>+91 8979836655</h3>
                <p>
                  Contact Me
                </p>
              </div>
            </div>

            <div className='row'>
              <ImLocation className='contact-icon'/>
              <div className='wid-block-detail'>
                <h3>Uttar Pradesh, India</h3>
                <p>
                  Contact Me
                </p>
              </div>
            </div>

            <div className='row'>
              <BiLogoGmail className='contact-icon'/>
              <div className='wid-block-detail'>
                <h3>satyamkoshta340@gmail.com</h3>
                <p>
                  Contact Me
                </p>
              </div>
            </div>

          </div>
          <div className='col contact-detail-block-2'>
            <div className='heading-box'>
              <h2 className='underline-heading'>How Can I Help You?</h2>
            </div>
            <form>
              <div className='row contact-mail-box'>
                <div className='col input-container'>
                  <input type='text' placeholder='Full Name' required/>
                  <input type='email' placeholder='Email Address' required/>
                  <input type='text' placeholder='Subject' required/>
                </div>
                <div className='contact-detail-block-3'>
                  <textarea rows={7} placeholder='Message' required/>
                </div>
              </div>
              <input type='submit' value='Send Message' className='submit'></input>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact