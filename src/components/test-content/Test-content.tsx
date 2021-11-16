import React from 'react';
import img from '../../assets/images';
import { TestBlock } from '../test-block';

import './Test-content.scss';

interface ITestObjs {
  id: number;
  title: string;
  img: string;
  text: string;
  textfb: string;
  textsb: string;
}

const TestContent = () => {
  const testObjs: ITestObjs[] = [
    {
      id: Math.random(),
      title: 'Quality Engineer Automation',
      img: img.testFirst,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus euismod aliquam mi suspendisse sit id. Nec, pretium proin amet, nisi vehicula vel integer egestas massa.',
      textfb: 'Quality Engineer',
      textsb: 'Automation QA',
    },
    {
      id: Math.random(),
      title: 'Quality Engineer Automation',
      img: img.testSecond,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus euismod aliquam mi suspendisse sit id. Nec, pretium proin amet, nisi vehicula vel integer egestas massa.',
      textfb: 'Quality Engineer',
      textsb: 'Automation QA',
    },
    {
      id: Math.random(),
      title: 'Quality Engineer Automation',
      img: img.testThird,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus euismod aliquam mi suspendisse sit id. Nec, pretium proin amet, nisi vehicula vel integer egestas massa.',
      textfb: 'Quality Engineer',
      textsb: 'Automation QA',
    },
    {
      id: Math.random(),
      title: 'Quality Engineer Automation',
      img: img.testFourth,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus euismod aliquam mi suspendisse sit id. Nec, pretium proin amet, nisi vehicula vel integer egestas massa.',
      textfb: 'Quality Engineer',
      textsb: 'Automation QA',
    },
  ];
  return (
    <div className="test__content">
      {testObjs.map((elem) => (
        <div className="test__block--wrapper" key={elem.id}>
          <TestBlock
            title={elem.title}
            img={elem.img}
            text={elem.text}
            textfb={elem.textfb}
            textsb={elem.textsb}
          />
        </div>
      ))}
    </div>
  );
};

export default TestContent;
