import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Article from '../../components/Article';
import { selectAppDarkMode } from '../../_modules/app/redux/appSelectors';
import { fetchCommentsFromPost } from '../../_modules/comments/redux/commentsAsyncThunks';
import { selectComments } from '../../_modules/comments/redux/commentsSelectors';
import { PostWithComments } from '../../_modules/posts/models/Post';
import { fetchPostById } from '../../_modules/posts/redux/postsAsyncThunks';
import { selectPosts } from '../../_modules/posts/redux/postsSelectors';
import { useAppThunkDispatch } from '../../_shared/infra/redux/store';

const Post = () => {

  const dispatch = useAppThunkDispatch();
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const darkMode = useSelector(selectAppDarkMode);

  const [postWithComments, setPostWithComments] = useState<PostWithComments | null>(null);

  let { id } = useParams();
  const postId = id && parseInt(id);

  

  useEffect(() => {
    const fetchAndSetPost = async (postId: number) => {
      try {
        const post = await dispatch(fetchPostById(postId)).unwrap();
        const comments = await dispatch(fetchCommentsFromPost(postId)).unwrap()
        console.log({ ...post, comments })
        setPostWithComments({ ...post, comments });
      } catch (rejectedValueOrSerializedError) {
      }
    }

    if (postId) {
      const post = posts.find(post => id && post.id === postId);
      if(post) {
        const postComments = comments.filter((comment: any) => Number(comment.postId) === post?.id);
        
        
        setPostWithComments({ ...post, comments: postComments });
      } else {
        fetchAndSetPost(postId)
      }
    }
  }, [comments]);

/*   useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      let post;
      
      post = posts.find(post => id && post.id === postId);

      if(!post) {
        dispatch(fetchPostById(postId))
      }

      if (post) {
        const postComments = comments.filter((comment: any) => Number(comment.postId) === post?.id);
        setPostWithComments({ ...post, comments: postComments })
      }
    }

  }, [dispatch, posts, comments, id]); */

  return (
    postWithComments && id ?

      <Article post={postWithComments} darkMode={darkMode} />
      :
      <div>
        nothing
      </div>
  );
}

export default Post;
