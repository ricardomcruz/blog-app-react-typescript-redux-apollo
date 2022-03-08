import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import comments from '../../../_modules/comments/redux/commentsSlice';
import posts from '../../../_modules/posts/redux/postsSlice';
import history from './history';

const middleware = [routerMiddleware(history), thunk];

const modulesReducer = combineReducers({
  posts,
  comments
});

const rootReducer = combineReducers({
  router: connectRouter(history),
  modules: modulesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
