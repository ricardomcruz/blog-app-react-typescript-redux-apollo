import classNamesBind from 'classnames/bind';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PostWithComments } from '../../_modules/posts/models/Post';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface PostCardProps {
  post: PostWithComments,
  darkMode: boolean
}

const PostCard = (
  {
    post: {
      id,
      title,
      description,
      publish_date,
      author,
      comments
    },
    darkMode
  }: PostCardProps
) => {
  return (
    <Link to={`/post/${id}`}>
      <Card 
        className={cx("post-card", "shadow-sm rounded", { "bg-dark": darkMode })}>
        <Card.Body className={cx("post-card-body")}>
          <div>
            <Card.Title className={cx("post-card-title", { "text-light": darkMode })}>
              {title}
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              {author}
            </Card.Subtitle>
            <Card.Text className={cx("my-2")}>
              {description}
            </Card.Text>
          </div>
          <Card.Text className={cx("mt-2 post-card-publication")}>
            <small>{publish_date}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer className={cx({ "bg-secondary": darkMode }, { "text-light": darkMode })}>
          <small>{`${comments.length} comments`}</small>
        </Card.Footer>
      </Card >
    </Link >
  );
}

export default PostCard;
