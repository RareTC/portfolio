import React from 'react'

export default function ProjectItem({ image, name, desc, skills, git, site }) {

    return (
        <div className='projectItem'>
            <div style={{backgroundImage: `url(${image})`}}
            className='bgImage'
            >
            </div>
            <h1 className='project-title'>{name}</h1>
            <p className='project-desc'>{desc}</p>
            <h3>Tech:</h3>
            <p className='project-skills'>{skills}</p>
            <div className='project-btn-wrap'>
                    {/* <a href={git} target='_blank' rel='noopener noreferrer'> */}
                        <button className='project-btn' onClick={() => window.open(git)}>
                            Code
                        </button>
                    {/* </a> */}
                    {/* <a href={site} target='_blank' rel='noopener noreferrer'> */}
                        <button className='project-btn' onClick={() => window.open(site)}>
                            Site
                        </button>
                    {/* </a> */}
            </div>
        </div>
  )
}
