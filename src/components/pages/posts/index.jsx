'use client';
import { deletePost, editPost as editPostAction } from '@/redux/slices/posts';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

const PostsPage = () => {
  const router = useRouter();
  const theme = useTheme();

  const [editPost, setEditPost] = useState('');
  const [postData, setPostData] = useState({});

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleEditPost = () => {
    dispatch(editPostAction(postData));
    setEditPost('');
    setPostData(null);
  };

  return (
    <div>
      {posts.map((post) => {
        if (post.id === editPost)
          return (
            <form onSubmit={handleEditPost}>
              <input
                type='text'
                value={postData?.title}
                onChange={(e) =>
                  setPostData({ ...postData, [e.target.name]: e.target.value })
                }
                name='title'
              />
              <input
                type='text'
                value={postData?.body}
                onChange={(e) => {
                  setPostData({ ...postData, [e.target.name]: e.target.value });
                }}
                name='body'
              />
              <button type='submit'>Save</button>
            </form>
          );
        return (
          <div
            onClick={() => router.push(`/posts/${post.id}`)}
            key={post.id}
            style={{ margin: '16px 0', cursor: 'pointer' }}
          >
            <h2
              style={{
                color: theme.colors.secondary,
              }}
            >
              {post.title}
            </h2>
            <p>{post.body}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deletePost(post.id));
              }}
            >
              Delete Post
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditPost(post.id);
                setPostData(post);
              }}
            >
              Edit Post
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
