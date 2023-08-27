'use client';
import {
  addPostAction,
  deletePostAction,
  editPostAction,
  getPosts,
} from '@/redux/slices/posts';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

const PostsPage = () => {
  const router = useRouter();
  const theme = useTheme();

  const [postData, setPostData] = useState({});

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();
    dispatch(editPostAction(postData));
    setPostData(null);
  };

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, []);

  const handleCreatePost = (e) => {
    e.preventDefault();
    dispatch(addPostAction(postData));
    setPostData({
      title: '',
      body: '',
    });
  };

  // child(parent());

  // child = () => {
  //   return parent() => {
  //   }
  // }

  const handleDeletePost = (id) => dispatch(deletePostAction(id));
  return (
    <div>
      {postData?.id ? (
        <></>
      ) : (
        <form onSubmit={handleCreatePost}>
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
      )}
      {posts.map((post) => {
        if (post.id === postData?.id)
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
                handleDeletePost(post.id);
              }}
            >
              Delete Post
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
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
