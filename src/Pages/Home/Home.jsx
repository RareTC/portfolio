import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import Profile from "../../assets/profile.jpeg";
import {Skills} from '../../helpers/Skills';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
      <div className='home'>
          <div className='bioContainer'>
              <div className='bioLinks'>
                  <Link to="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                  </Link>
                  <Link to="https://github.com/RareTC" target='_blank' rel='noopener noreferrer'>
                    <GitHubIcon />
                  </Link>
                  <Link to="/contact">
                    <EmailIcon />
                  </Link>
              </div>
              <div className='profilePhoto'>
                  <img src={Profile} />
              </div>
              <div className='about'>
                  <h2>Trevor Campbell</h2>
                  <div className='prompt'>
                      <p>I bring creative and colorful projects to life with surgical precision and organized code. As a full stack developer experienced in
                        several languages, I combine my passion for technology with my healthcare background to create seamless impactful solutions. 
                      </p>
                  </div>
              </div>
          </div>
          <h1 className='skills'>Skills</h1>
          <div class='list'>
              {Skills.map(skillCategory => (
                  <div className='item'>
                      <h2>{skillCategory.category}</h2>
                      <div className='group'>
                          {skillCategory.languages.map(language => (
                              <div className='icon-text'>
                                  <h5>{language.icon}</h5>
                                  <span>{language.name}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}
