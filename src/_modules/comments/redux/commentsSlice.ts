import { createSlice } from '@reduxjs/toolkit';
import Comment from '../models/Comment';

export interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

export const commentsSlice: any = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        'comments/fetchComments/fulfilled',
        (state, { meta, payload }: any) => {
          state.comments = payload.data;
        }
      )
  },
});

export default commentsSlice.reducer;
