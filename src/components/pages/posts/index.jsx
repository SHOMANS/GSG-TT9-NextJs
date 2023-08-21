'use client';
import { posts } from '@/mock/posts';
import { useRouter } from 'next/navigation';
import React from 'react';

const PostsPage = () => {
  const router = useRouter();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            onClick={() => router.push(`/posts/${post.id}`)}
            key={post.id}
            style={{ margin: '16px 0', cursor: 'pointer' }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostsPage;
