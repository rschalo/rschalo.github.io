import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ project, demoIcon, code, codeURL, demoURL }) => (
  <div className='project-card'>
    <div className='project-card-top'>big box of video</div>
    <h2>{project.name}</h2>
    <div className='project-description'>{project.description}</div>
    <ul>
      {project.technologies.map((project) => (
        <li key={project}>{project}</li>
      ))}
    </ul>
    <ul className='project-discovery'>
      <li>
        <div>
          <a href={demoURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={demoIcon}
              style={{ color: 'grey' }}
              size='2x'
            />
            See the code
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href={codeURL} className='project-demos'>
            <FontAwesomeIcon
              className='project-interact'
              icon={code}
              style={{ color: 'grey' }}
              size='2x'
            />
            See a demo
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default Project;
