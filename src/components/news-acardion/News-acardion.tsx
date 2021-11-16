/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import img from '../../assets/images';
import { OrangeLink } from '../orange-link';

import './News-acardion.scss';

interface IPosts {
  id: number;
  title: string;
  text: string;
}

interface IOrangeLink {
  link: string;
  img?: string;
}

const NewsAcardion = () => {
  const newsObjOrangeLink: IOrangeLink = {
    link: 'View all news',
    img: img.arrowLeanMore,
  };
  const installAcardionObjs: IPosts[] = [
    {
      id: Math.random(),
      title: 'News',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: Math.random(),
      title: 'Insights',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: Math.random(),
      title: 'Events',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ];
  const [activeElem, setActiveElem] = useState(0);
  return (
    <div className="news__acardion">
      {installAcardionObjs.map((elem, index) => (
        <div
          key={elem.id}
          className={`news__acardion--block news__acardion--${elem.title}`}
          onClick={() => {
            setActiveElem(index);
          }}
        >
          <div className="news__acardion--content">
            <div
              className={`news__acardion--title-block ${
                index === activeElem ? 'news__header--' + elem.title : ' '
              }`}
            >
              <h3
                className={`news__acardion--title  news__acardion--${index} news__before--${elem.title}`}
              >
                {elem.title}
              </h3>
            </div>
            <div
              className={`news__acardion--item ${
                index === activeElem ? 'news__acardion--show' : ' '
              }`}
            >
              <div
                className={`news__acardion--block-text news__acardion--${
                  index !== 2 ? index : ' '
                }`}
              >
                <p className="news__acardion--text ">{elem.text}</p>

                <div className="news__link--wrapper">
                  <OrangeLink props={newsObjOrangeLink} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsAcardion;
