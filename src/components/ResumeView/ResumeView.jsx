import React from 'react';
import Resume from '../../assets/resume.jpg';
import './ResumeView.css';


export default function ResumeView() {
  return (
    <>
    <div className='resume-container'>
      <img className = "resume-image" src={Resume} alt='resume'/>
      {/* <button className='resume-download'><a 
      href='https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:3818cf8f-bf23-48ad-a0c4-d69d8d44c308' 
      target='_blank'
      download>
        Download Resume</a></button> */}
        <button className='resume-download' onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:3818cf8f-bf23-48ad-a0c4-d69d8d44c308')}>
  Download Resume
</button>
    </div>
    </>
  )
}
