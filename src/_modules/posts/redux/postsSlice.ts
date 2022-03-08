import { createSlice } from '@reduxjs/toolkit';
import Post from '../models/Post';

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice: any = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        'posts/fetchPosts/fulfilled',
        (state, { meta, payload }: any) => {
          state.posts = payload.data;
        }
      )
  },
});

export default postsSlice.reducer;
