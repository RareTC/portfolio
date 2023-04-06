import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#2d2826'>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='January 2023-April 2023'
            iconStyle={{background: "#b2acab", color: "#2d2826"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    General Assembly: Software Engineering Immersive (Remote)
                </h3>
                <p>Certificate</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='January 2023-April 2023'
            iconStyle={{background: "#b2acab", color: "#2d2826"}}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    General Assembly: Software Engineering Immersive (Remote)
                </h3>
                <p>Certificate</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='January 2023-April 2023'
            iconStyle={{background: "#2d2826", color: "#c75b5c"}}
            icon={<WorkIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    General Assembly: Software Engineering Immersive (Remote)
                </h3>
                <p>Certificate</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='January 2023-April 2023'
            iconStyle={{background: "#2d2826", color: "#c75b5c"}}
            icon={<WorkIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    General Assembly: Software Engineering Immersive (Remote)
                </h3>
                <p>Certificate</p>

            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience