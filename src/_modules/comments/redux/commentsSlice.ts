import { createSlice } from '@reduxjs/toolkit';
import initialCommentsState from './commentsStates';

const initialState = initialCommentsState;

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        'comments/fetchComments/fulfilled',
        (state, { meta, payload }: any) => {
          state.comments = payload.data.comments;
        }
      )
      .addCase(
        'comments/fetchCommentsFromPost/fulfilled',
        (state, { meta, payload }: any) => {
          state.comments.push(payload);
        }
      );
  },
});

export default commentsSlice.reducer;
