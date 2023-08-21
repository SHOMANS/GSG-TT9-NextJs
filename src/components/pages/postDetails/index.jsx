import { posts } from '@/mock/posts';
import React from 'react';

const PostDetailsPage = ({ params }) => {
  const myPost = posts?.find((item) => item.id === +params.id);

  // const arr = null;
  // console.log(arr.map());

  return (
    <div>
      <h1>id: {params.id}</h1>
      <h2>{myPost?.title}</h2>
      <p>{myPost?.body}</p>
    </div>
  );
};

export default PostDetailsPage;
