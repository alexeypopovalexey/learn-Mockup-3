/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import img from '../../assets/images';

import './Install_acardion.scss';

interface IPosts {
  id: number;
  img: string;
  title: string;
  text: string;
}

const InstallAcardion = () => {
  const installAcardionObjs: IPosts[] = [
    {
      id: Math.random(),
      title: 'STEP 1',
      img: img.installSvgFirst,
      text: 'Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.  Download and install the app from play store or app store. The app will guide you through the configuration process. ',
    },
    {
      id: Math.random(),
      title: 'STEP 2',
      img: img.installSvgSecond,
      text: 'Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.  Download and install the app from play store or app store. The app will guide you through the configuration process. ',
    },
    {
      id: Math.random(),
      title: 'STEP 3',
      img: img.installSvgThird,
      text: 'Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.  Download and install the app from play store or app store. The app will guide you through the configuration process. ',
    },
  ];
  const [activeElem, setActiveElem] = useState(0);
  return (
    <div className="install__acardion">
      {installAcardionObjs.map((elem, index) => (
        <div
          key={elem.id}
          className={`install__acardion--block install__acardion--${index}`}
          onClick={() => {
            setActiveElem(index);
          }}
        >
          <div className="install__acardion--tool">
            <div className="install__acardion--circle">
              <img
                src={elem.img}
                alt="Icon"
                className="install__acardion--icon"
              />
            </div>
          </div>
          <div className="install__acardion--content">
            <h3 className="install__acardion--title">{elem.title}</h3>
            <div
              className={`install__acardion--item ${
                index === activeElem ? 'install__acardion--show' : ' '
              }`}
            >
              <p className="install__acardion--text">{elem.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallAcardion;
