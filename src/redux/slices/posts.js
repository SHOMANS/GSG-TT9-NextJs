import { posts } from '@/mock/posts';
import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: posts,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [
        ...state.posts,
        { ...action.payload, id: Math.round(Math.random() * 1000) },
      ];
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
