import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    errorMessage: '',
    post: null,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getAllPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
    },
    getSinglePost: (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.isLoading = false;
      state.errorMessage = '';
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.isLoading = false;
      state.errorMessage = '';
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.isLoading = false;
      state.errorMessage = '';
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const {
  addPost,
  editPost,
  deletePost,
  getAllPosts,
  setLoading,
  setError,
  getSinglePost,
} = postsSlice.actions;

// -------------------------------------------------------------------------
// --------------------------- Actions -------------------------------------
// -------------------------------------------------------------------------

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get('http://localhost:3003/posts');
    dispatch(getAllPosts(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getSinglePostAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(`http://localhost:3003/posts/${id}`);
    dispatch(getSinglePost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addPostAction = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.post(`http://localhost:3003/posts`, data);
    dispatch(addPost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deletePostAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.delete(`http://localhost:3003/posts/${id}`);
    dispatch(deletePost(id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const editPostAction = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.put(`http://localhost:3003/posts/${data.id}`, data);
    dispatch(editPost(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default postsSlice.reducer;

// dispatch(action(id))
// child(parent(id))

// const parent = (id) => (child) => {}
// const action = (id) => (dispatch) => {}
