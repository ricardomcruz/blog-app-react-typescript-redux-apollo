import { createSlice } from '@reduxjs/toolkit';
import initialPostsState from './postsStates';

const initialState = initialPostsState;

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        'posts/fetchPosts/fulfilled',
        (state, { meta, payload }: any) => {
          state.posts = payload.data.posts;
        }
      )
      .addCase(
        'posts/fetchPostById/fulfilled',
        (state, { meta, payload }: any) => {
          const postStored = !!state.posts.find(post => post.id === payload.id);
          if(!postStored) {
            state.posts.push(payload);
          }
        }
      );
  },
});

export default postsSlice.reducer;
