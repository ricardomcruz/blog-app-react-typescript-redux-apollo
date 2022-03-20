import { createAsyncThunk } from '@reduxjs/toolkit';
import ApolloClient from '../../../_shared/infra/apollo/apolloClient';
import { getQuery } from '../../../_shared/infra/queries/queries';
import { Comment, CommentDTO } from '../models/Comment';

type CommentQuery = {
  postId: number;
  comment: CommentDTO;
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      return await ApolloClient.query({
        query: getQuery('GET_COMMENTS'),
      });

    } catch (error) {
      console.error(error)
      return rejectWithValue(error);
    }
  }
);

export const fetchCommentsFromPost = createAsyncThunk<
  Comment[],
  number,
  { rejectValue: Error }
>(
  'posts/fetchPostById',
  async (id, { rejectWithValue }) => {
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
  CommentDTO,
  CommentQuery,
  { rejectValue: Error }
>(
  'comments/createComment',
  async ({ postId, comment }, { rejectWithValue }) => {
    try {
      const response = await ApolloClient.query({
        query: getQuery('POST_COMMENT_FOR_POST'),
        variables: { postId: postId, body: comment },
      });
      return response.data.comments;
    } catch (error) {
      console.error(error)
      return rejectWithValue(error as any);
    }
  }
);