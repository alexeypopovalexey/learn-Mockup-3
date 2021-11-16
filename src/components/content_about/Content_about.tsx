import React from 'react';
import img from '../../assets/images';

import './Content_about.scss';

const ContentAbout = () => (
  <div className="about__content">
    <h2 className="about__content--title">About</h2>
    <p className="about__content--text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis
      amet, faucibus lorem. Lectus amet odio quis sed adipiscing adipiscing
      magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit
      suspendisse curabitur eu congue dui ut.
    </p>
    <div className="about__content--links">
      <a href="#" className="about__content--link">
        Learn more
      </a>
      <a href="#" className="about__content--link">
        <img src={img.path} alt="Path" className="about__content--link-img" />
        Watch video
      </a>
    </div>
  </div>
);

export default ContentAbout;
