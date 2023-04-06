import React from 'react';
import { Link } from 'react-router-dom';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AboutMe from '../../assets/aboutme.jpeg';


export default function About() {
  return (
<div className='bioContainer'>
              <div className='bioLinks'>
                  <Link to="/contact">
                    <AttachFileIcon />
                  </Link>
              </div>
              <div className='profilePhoto'>
                  <img src={AboutMe} />
              </div>
              <div className='about'>
                  <h2>About Me</h2>
                  <div className='prompt'>
                      <p>I bring creative and colorful projects to life with surgical precision and organized code. As a full stack developer experienced in
                        several languages, I combine my passion for technology with my healthcare bakground to create seamless impactful solutions. 
                      </p>
                  </div>
              </div>
          </div>
  )
}

