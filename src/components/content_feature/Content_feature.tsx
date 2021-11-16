import React from 'react';
import img from '../../assets/images';
import { OrangeLink } from '../orange-link';

import './content_feature.scss';

interface IObjsContentFeture {
  id: number;
  icon?: string;
  title: string;
  content: string;
}

interface IOrangeLink {
  link: string;
  img?: string;
}

const ContentFeature: React.FC = () => {
  const featureObjOrangeLink: IOrangeLink = {
    link: 'Know more',
    img: img.arrowLeanMore,
  };
  const objsContentFeture: IObjsContentFeture[] = [
    {
      id: Math.random(),
      icon: img.leftIconOfFeature,
      title: 'Multiple links',
      content: 'Add multiple links in Instagram instead of just one.',
    },
    {
      id: Math.random(),
      icon: img.midleIconOfFeature,
      title: 'Online messaging',
      content: 'Allow your clients to connect with you with one click.',
    },
    {
      id: Math.random(),
      icon: img.rightIconOfFeature,
      title: 'Application forms',
      content: 'Capture leads and grow your business with them.',
    },
  ];
  return (
    <div className="feature__content">
      <div className="feature__content--block">
        <img
          src={img.leftIconOfFeature}
          alt="Icon "
          className="feature__content--icon"
        />
        <h3 className="feature__content--title">Multiple links</h3>
        <span className="feature__content--text">
          Add multiple links in Instagram instead of just one.
        </span>
        <OrangeLink props={featureObjOrangeLink} />
      </div>
      <div className="feature__content--block">
        <img
          src={img.midleIconOfFeature}
          alt="Icon "
          className="feature__content--icon"
        />
        <h3 className="feature__content--title">Online messaging</h3>
        <span className="feature__content--text">
          Allow your clients to connect with you with one click.
        </span>
        <OrangeLink props={featureObjOrangeLink} />
      </div>
      <div className="feature__content--block">
        <img
          src={img.rightIconOfFeature}
          alt="Icon "
          className="feature__content--icon"
        />
        <h3 className="feature__content--title">Application forms</h3>
        <span className="feature__content--text">
          Capture leads and grow your business with them.
        </span>
        <OrangeLink props={featureObjOrangeLink} />
      </div>
    </div>
  );
};

export default ContentFeature;
