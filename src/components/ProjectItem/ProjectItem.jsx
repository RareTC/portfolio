import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({ image, name, desc, skills }) {


    return (
        <div className='projectItem'>
            <div style={{backgroundImage: `url(${image})`}}
            className='bgImage'
            >
            </div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <p>{skills}</p>
            <button>
                View Code
            </button>
            <button>
                Live Site
            </button>
        </div>
  )
}
