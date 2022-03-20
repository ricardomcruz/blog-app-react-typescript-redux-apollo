import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import { selectAppDarkMode } from '../../_modules/app/redux/appSelectors';
import { fetchComments } from '../../_modules/comments/redux/commentsAsyncThunks';
import { selectComments } from '../../_modules/comments/redux/commentsSelectors';
import { PostWithComments } from '../../_modules/posts/models/Post';
import { fetchPosts } from '../../_modules/posts/redux/postsAsyncThunks';
import { selectPosts, selectPostsStatus } from '../../_modules/posts/redux/postsSelectors';
import { RequestStatus } from '../../_shared/infra/apollo/models/Request';
import { useAppThunkDispatch } from '../../_shared/infra/redux/store';

const Home = () => {

  const dispatch = useAppThunkDispatch();
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const comments = useSelector(selectComments);
  const darkMode = useSelector(selectAppDarkMode);

  const [postsByPublishDateWithComments, setPostsByPublishDateWithComments] = useState<PostWithComments[]>([]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());

    const postsByPublishDate = [...posts].sort((a, b) => {
      const postAPublishDate = new Date(a.publish_date).getTime();
      const postBPublishDate = new Date(b.publish_date).getTime();
      return postBPublishDate - postAPublishDate
    });

    const sortedPostsWithComments = postsByPublishDate.map(post => {
      const postComments = comments.filter((comment: any) => {
        return Number(comment.postId) === post.id
      });
      return {
        ...post, comments: postComments
      }
    })

    setPostsByPublishDateWithComments(sortedPostsWithComments)

  }, [dispatch, posts, comments]);

  if (postsStatus === RequestStatus.LOADING) {
    return (
      <div>loading</div>
    )

  } else if (postsByPublishDateWithComments?.length && postsStatus === RequestStatus.FULFILLED) {
    return (
      <>
        <h2 className='text-center mt-5 mb-4' >
          Articles
        </h2>
        <Row xs={1} md={3} lg={4} className="g-4">
          {
            postsByPublishDateWithComments.map((post: any) =>
              <Col key={post.id}>
                <PostCard post={post} darkMode={darkMode} />
              </Col>
            )
          }
        </Row>
      </>
    )
  } else {
    return (
      <div>Some error happened</div>
    )
  }
}

export default Home;
