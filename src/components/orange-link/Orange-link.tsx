/* eslint-disable react/prop-types */
import React from 'react';
import img from '../../assets/images';

import './Orange-link.scss';

interface IOrangeLink {
  link: string;
  img?: string;
}

interface IPropsOrangeLink {
  props: IOrangeLink;
}
const OrangeLink = ({ props }: IPropsOrangeLink) => (
  <div className="orange-link">
    <a href="#" className="orange-link__link">
      {props.link}
      <img
        src={props.img}
        alt="Arrow"
        className={`orange-link__img ${
          props.img ? ' ' : 'orange-link__img--hidden'
        }`}
      />
    </a>
  </div>
);

export default OrangeLink;
