import React from 'react';
import './Projects.css';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';

export default function Projects() {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
        {ProjectList.map((project, idx) => {
            return <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} desc={project.desc}/>
        })}
        </div>
    </div>
  )
}
