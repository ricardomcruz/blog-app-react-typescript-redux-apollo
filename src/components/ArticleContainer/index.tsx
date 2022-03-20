import classNamesBind from 'classnames/bind';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostWithComments } from '../../_modules/posts/models/Post';
import ArticleCard from '../ArticleCard';
import CommentsSection from '../CommentsSection';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface ArticleContainerProps {
  post: PostWithComments
  darkMode: boolean
}

const ArticleContainer = (
  {
    post,
    darkMode
  }: ArticleContainerProps
) => {
  return (
    <div className={cx('my-5')}>
      <Row>
        <Col xl={8}>
          <ArticleCard darkMode={darkMode} post={post}/>
        </Col>
        <Col xl={4}>
          <CommentsSection comments={post.comments} postId={post.id} />
        </Col>
      </Row>
    </div>
  );
}

export default ArticleContainer;