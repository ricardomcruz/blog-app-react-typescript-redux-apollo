import { createAsyncThunk } from '@reduxjs/toolkit';
import ApolloClient from '../../../_shared/infra/apollo/apolloClient';
import { getQuery } from '../../../_shared/infra/queries/queries';
import { RawComment } from '../models/Comment';

type CommentQuery = {
  postId: number,
  comment: RawComment
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      return await ApolloClient.query({
        query: getQuery('GET_COMMENTS'),
      });

     
    } catch (error) {
      console.log(error)
      return rejectWithValue(error);
    }
  }
);

export const fetchCommentsFromPost = createAsyncThunk<
  RawComment[],
  number,
  { rejectValue: Error }
>(
  'posts/fetchPostById',
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await ApolloClient.query({
        query: getQuery('GET_COMMENTS_FROM_POST'),
        variables: { id },
      });
      return response.data.comments;
    } catch (error) {
      return rejectWithValue(error as any);
    }
  }
);

export const createComment = createAsyncThunk<
  Comment,
  CommentQuery,
  { rejectValue: Error }
>(
  'comments/createComment',
  async ({ postId, comment }, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await ApolloClient.query({
        query: getQuery('POST_COMMENT_FOR_POST'),
        variables: { postId: postId, body: comment },
      });
      return response.data.comments;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error as any);
    }
  }
);