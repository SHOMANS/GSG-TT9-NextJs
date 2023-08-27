'use client';
import { getSinglePostAction } from '@/redux/slices/posts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostDetailsPage = ({ params }) => {
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    if (+params.id !== +post?.id) {
      dispatch(getSinglePostAction(+params.id));
    }
  }, [dispatch, params.id, post?.id]);

  return (
    <div>
      <h1>id: {params.id}</h1>
      {isLoading ? (
        <>Loading....</>
      ) : (
        <>
          <h2>{post?.title}</h2>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetailsPage;
