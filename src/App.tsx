import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import { fetchComments } from './_modules/comments/redux/commentsAsyncThunks';
import { fetchPosts } from './_modules/posts/redux/postsAsyncThunks';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  });
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
