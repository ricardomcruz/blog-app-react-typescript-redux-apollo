import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import { fetchComments } from '../../_modules/comments/redux/commentsAsyncThunks';
import { selectComments } from '../../_modules/comments/redux/commentsSelectors';
import { PostWithComments } from '../../_modules/posts/models/Post';
import { fetchPosts } from '../../_modules/posts/redux/postsAsyncThunks';
import { selectPosts } from '../../_modules/posts/redux/postsSelectors';

const Home = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);

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

  return (
    <Container>
      <h2 className='text-center mt-5 mb-4'>
        Articles
      </h2>
      {
        postsByPublishDateWithComments?.length ?
          <Row xs={1} md={3} lg={4} className="g-4">
            {
              postsByPublishDateWithComments.map((post: any) =>
                <Col key={post.id}>
                  <PostCard post={post} />
                </Col>
              )
            }
          </Row>
          :
          <div>loading</div>
      }
    </Container>
  );
}

export default Home;
