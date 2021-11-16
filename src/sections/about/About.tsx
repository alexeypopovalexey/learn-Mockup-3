import React from 'react';
import { ContentAbout, Wrapper } from '../../components';

import './About.scss';

export const About = () => (
  <section className="about">
    <div className="about__container">
      <Wrapper>
        <ContentAbout />
      </Wrapper>
    </div>
  </section>
);
