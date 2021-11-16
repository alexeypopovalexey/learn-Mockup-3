import React, { useState, useEffect } from 'react';
import { PostsBlock } from '../posts-block';

import './Posts-content.scss';

interface IPostsObjs {
  title: string;
  text: string;
  linkVideo: string;
}

const PostsContent: React.FC = () => {
  const [posts, setPosts] = useState<IPostsObjs[]>([]);

  useEffect(() => {
    fetch('/server-json/posts-server.json')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="posts__content">
      {posts.map((elem) => (
        <PostsBlock
          key={Math.random()}
          title={elem.title}
          text={elem.text}
          linkVideo={elem.linkVideo}
        />
      ))}{' '}
    </div>
  );
};

export default PostsContent;
