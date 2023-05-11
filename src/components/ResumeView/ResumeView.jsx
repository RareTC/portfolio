import React from 'react';
import Resume from '../../assets/resume.jpg';
import './ResumeView.css';
import DownloadIcon from '@mui/icons-material/Download';


export default function ResumeView() {
  return (
    <>
      <div className='resume-container'>
        <img className="resume-image" src={Resume} alt='resume' />
        <button className='resume-download' onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:3fad41d3-0300-40e6-b837-a00dae418ae1')}>
          <DownloadIcon /> Download CV
        </button>
      </div>
    </>
  )
}
