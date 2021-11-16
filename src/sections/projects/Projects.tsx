import React from 'react';
import {
  Wrapper,
  ProjectsLeftColom,
  ProjectsRightColom,
} from '../../components';

import './Projects.scss';

const Projects = () => (
  <div className="projects">
    <Wrapper>
      <div className="projects__container">
        <ProjectsLeftColom />
        <ProjectsRightColom />
      </div>
    </Wrapper>
  </div>
);

export default Projects;
