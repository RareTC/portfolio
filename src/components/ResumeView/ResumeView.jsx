import React from 'react';
import Resume from '../../assets/resume.jpg';
import './ResumeView.css';


export default function ResumeView() {
  return (
    <>
    <div className='resume-container'>
        <img className = "resume-image" src={Resume} alt='resume'/>
    </div>
    </>
  )
}
