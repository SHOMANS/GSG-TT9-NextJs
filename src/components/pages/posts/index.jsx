'use client';
import { posts } from '@/mock/posts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useTheme } from 'styled-components';

const PostsPage = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <div>
      {posts.map((post) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
