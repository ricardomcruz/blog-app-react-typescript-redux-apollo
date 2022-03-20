import { createAsyncThunk } from '@reduxjs/toolkit';
import ApolloClient from '../../../_shared/infra/apollo/apolloClient';
import { getQuery } from '../../../_shared/infra/queries/queries';
import { Post } from '../models/Post';

export type PostQuery = number

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await ApolloClient.query({
        query: getQuery('FETCH_POSTS'),
      });

      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPostById = createAsyncThunk<Post, PostQuery, { rejectValue: Error }>(
  'posts/fetchPostById',
  async (id , { rejectWithValue }) => {
    try {
      const response = await ApolloClient.query({
        query: getQuery('FETCH_POST_BY_ID'),
        variables: { id },
      });
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error as any);
    }
  }
);