import React from 'react';
import { Wrapper, CommentsBlock } from '../../components';
import img from '../../assets/images';

import './Comments.scss';

interface ICommentsObjs {
  id: number;
  name: string;
  icon: string;
  img: string;
  text: string;
  subtitle: string;
  title: string;
}

const Comments = () => {
  const commentsObjs: ICommentsObjs[] = [
    {
      id: Math.random(),
      name: 'Floyd Miles',
      icon: img.commentsMiniQoutes,
      img: img.commentsHubspot,
      text: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
      subtitle: 'Vice President, GoPro',
      title: 'hubspot',
    },
    {
      id: Math.random(),
      name: 'Jane Cooper',
      icon: img.commentsMiniQoutes,
      img: img.commentsAirbnb,
      text: 'I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.',
      subtitle: 'CEO, Airbnb',
      title: 'airbnb',
    },
    {
      id: Math.random(),
      name: 'Kristin Watson',
      icon: img.commentsMiniQoutes,
      img: img.commetnsBookMyShow,
      text: 'Landify saved our time in designing my company page.',
      subtitle: 'Co-Founder, BookMyShow',
      title: 'bms',
    },
  ];
  return (
    <div className="comments">
      <Wrapper>
        <div className="comments__container">
          <img
            src={img.commentsBGQoutes}
            alt="Quotes"
            className="comments__bg--quotes"
          />
          <div className="comments__left">
            <h2 className="comments__title">
              Real Stories from Real Customers
            </h2>
            <h3 className="comments__subtitle">
              Get inspired by these stories.
            </h3>
            <CommentsBlock props={commentsObjs[0]} />
          </div>
          <div className="comments__right">
            <CommentsBlock props={commentsObjs[1]} />
            <CommentsBlock props={commentsObjs[2]} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Comments;
