import { Action, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import app from '../../../_modules/app/redux/appSlice';
import comments from '../../../_modules/comments/redux/commentsSlice';
import posts from '../../../_modules/posts/redux/postsSlice';
import history from '../router/history';

const middleware = [routerMiddleware(history), thunk];

const modulesReducer = combineReducers({
  app,
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

export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
