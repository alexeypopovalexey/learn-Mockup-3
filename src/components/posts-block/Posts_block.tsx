import React from 'react';
import ReactPlayer from 'react-player';

import './Posts-block.scss';

interface IPostsObjs {
  title: string;
  text: string;
  linkVideo: string;
}

const PostsBlock = (props: IPostsObjs) => {
  const { title, text, linkVideo } = props;
  return (
    <div className="posts__block">
      <div className="posts__video--wrapper">
        <ReactPlayer url={linkVideo} width="100%" height="auto" controls />
      </div>
      <div className="posts__block--content">
        <h4 className="posts__block--title">{title}</h4>
        <p className="posts__block--text">{text}</p>
      </div>
    </div>
  );
};

export default PostsBlock;
