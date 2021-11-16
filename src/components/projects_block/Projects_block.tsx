/* eslint-disable react/prop-types */
import React from 'react';

import './Projects_block.scss';

interface IPosts {
  id: number;
  img: string;
  title: string;
  text: string;
}
interface IObjPosts {
  props: IPosts;
}
const ProcetsBlock = ({ props }: IObjPosts) => {
  const shortTextOnIntroPost = `${props.text.split('.')[0]}. ${
    props.text.split('.')[1]
  }.`;
  return (
    <div className="projects__block">
      <div className="projects__block--img">
        <img src={props.img} alt="Post" className="projects__img" />
        <div className="projects__block--content">
          <h3 className="projects__block--title">{props.title}</h3>
          <p className="projects__block--text">{props.text}</p>
        </div>
      </div>
      <div className="projects__post">
        <h3 className="projects__post--title">{props.title}</h3>
        <span className="projects__post--text">{shortTextOnIntroPost}</span>
      </div>
    </div>
  );
};

export default ProcetsBlock;
