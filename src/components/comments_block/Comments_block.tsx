/* eslint-disable react/prop-types */
import React from 'react';

import './Comments_block.scss';

interface ICommentsObjs {
  id: number;
  name: string;
  icon: string;
  img: string;
  text: string;
  subtitle: string;
  title: string;
}

interface IPropsComments {
  props: ICommentsObjs;
}

const CommentsBlock = ({ props }: IPropsComments) => (
  <div
    className={`comments__block comments__block--${props.title}`}
    key={props.id}
  >
    <img
      src={props.img}
      alt={`Logo ${props.title}`}
      className="comments__block--logo"
    />
    <div className="comments__block--content comments__content">
      <div className="comments__content--quotes">
        <img
          src={props.icon}
          alt="Quotes"
          className="comments__content--icon"
        />
      </div>
      <div className="comments__content--block">
        <p className="comments__content--comment">{props.text}</p>
        <h4 className="comments__content--name">{props.name}</h4>
        <h5 className="comments__content--subtitle">{props.subtitle}</h5>
      </div>
    </div>
  </div>
);

export default CommentsBlock;
