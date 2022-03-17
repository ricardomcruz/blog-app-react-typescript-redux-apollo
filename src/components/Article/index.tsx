import classNamesBind from 'classnames/bind';
import { sanitize } from 'dompurify';
import parse from 'html-react-parser';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostWithComments } from '../../_modules/posts/models/Post';
import CommentsSection from '../CommentsSection';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface ArticleProps {
  post: PostWithComments
  darkMode: boolean
}

const Article = (
  {
    post: {
      id,
      title,
      description,
      publish_date,
      content,
      author,
      comments
    },
    darkMode
  }: ArticleProps
) => {

  return (
    <div className={cx('my-5', 'article-container')}>

      <Row>
        <Col xl={8}>
          <Card className={cx('p-4', 'mb-4', { "bg-dark": darkMode })}>
            <h2>
          {title}
        </h2>
        <h5 className='mt-2 text-secondary'>{author}</h5>
          <div>
            <h5 className='mt-3'>{description}</h5>
            <div>{parse(sanitize(content))}</div>
            <div className={cx('mt-4', 'article-info')}>
              <small>{publish_date}</small>
            </div>
          </div>
          </Card>
        </Col>
        <Col xl={4}>
          <CommentsSection comments={comments} postId={id} />
        </Col>
      </Row>
    </div>
  );
}

export default Article;
