import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';
import postsSlice from './slices/posts';

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
  },
});
