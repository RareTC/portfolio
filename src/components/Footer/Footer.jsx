import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div>
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 CHANGE THIS TO YOUR URL!!!! </p>
    </div>
  )
}
