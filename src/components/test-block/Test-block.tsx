/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Interface } from 'readline';
import { OrangeLink } from '../orange-link';

import './Test-block.scss';

interface IOrangeLink {
  link: string;
  img?: string;
}

interface ITestObjs {
  title: string;
  img: string;
  text: string;
  textfb: string;
  textsb: string;
}

const TestBlock = (props: ITestObjs) => {
  const testOrangeLink: IOrangeLink = {
    link: 'pass the test →',
  };
  const { img, title, text, textfb, textsb } = props;
  return (
    <div className="test__block">
      <img src={img} alt="Image description" className="test__block--img" />
      <div className="test__block--content">
        <h3 className="test__block--title">{title}</h3>
        <p className="test__block--text">{text}</p>
        <div className="test__block--btns">
          <button className="test__block--btn" type="button">
            {textfb}
          </button>
          <button className="test__block--btn" type="button">
            {textsb}
          </button>
        </div>
        <OrangeLink props={testOrangeLink} />
      </div>
    </div>
  );
};

export default TestBlock;
