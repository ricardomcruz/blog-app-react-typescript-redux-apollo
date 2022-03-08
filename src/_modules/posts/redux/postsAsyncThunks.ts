import { createAsyncThunk } from '@reduxjs/toolkit';
import ApolloClient from '../../../_shared/infra/apollo/apolloClient';
import { getQuery } from '../../../_shared/infra/queries/queries';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      return await ApolloClient.query({
        query: getQuery('FETCH_POSTS'),
      });

     
    } catch (error) {
      console.log(error)
      return rejectWithValue(error);
    }
  }
);