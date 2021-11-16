import React from 'react';
import { Wrapper, InstallAcardion } from '../../components';
import img from '../../assets/images';

import './Install_steps.scss';

const InstallSteps = () => (
  <div className="install">
    <Wrapper>
      <div className="install__container">
        <div className="install__intro">
          <h2 className="install__title">Install the device few easy steps.</h2>
          <img
            src={img.installMobile}
            alt="App on Mobile"
            className="install__img"
          />
        </div>
        <div className="install__acardion--wrapper">
          <InstallAcardion />
        </div>
      </div>
    </Wrapper>
  </div>
);

export default InstallSteps;
