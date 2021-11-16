import React from 'react';
import { Wrapper, ContentFeature } from '../../components';

import './feature.scss';

const Feature = () => (
  <div className="feature">
    <Wrapper>
      <h2 className="feature__title">Discover the key features</h2>
      <ContentFeature />
    </Wrapper>
  </div>
);

export default Feature;
