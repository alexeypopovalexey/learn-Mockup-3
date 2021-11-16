import React from 'react';
import img from '../../assets/images';
import { OrangeLink, Wrapper } from '../../components';

import './intro.scss';

interface IOrangeLink {
  link: string;
  img?: string;
}

const Intro = () => {
  const introLink: IOrangeLink = {
    link: 'Learn more',
    img: img.arrowLeanMore,
  };
  return (
    <section>
      <div className="intro">
        <Wrapper>
          <div className="intro__container">
            <div className="intro__content">
              <h1 className="intro__title">
                Organise projects. Get more done.
              </h1>
              <OrangeLink props={introLink} />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default Intro;
