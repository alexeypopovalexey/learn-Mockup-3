import React from 'react';
import { Wrapper, TestContent } from '../../components';

import './Test.scss';

const Test = () => (
  <div className="test">
    <Wrapper>
      <div className="test__container">
        <h2 className="test__title">Grid Dynamics Inrenship test 2021</h2>
        <TestContent />
      </div>
    </Wrapper>
  </div>
);

export default Test;
