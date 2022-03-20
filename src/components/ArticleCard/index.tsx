import classNamesBind from 'classnames/bind';
import { sanitize } from 'dompurify';
import parse from 'html-react-parser';
import Card from 'react-bootstrap/Card';
import { PostWithComments } from '../../_modules/posts/models/Post';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

export interface ArticleCardProps {
  post: PostWithComments
  darkMode: boolean
}

const ArticleCard = (
  {
    post: {
      title,
      publish_date,
      content,
      author,
    },
    darkMode
  }: ArticleCardProps
) => {

  return (
    <Card className={cx('p-4', 'mb-4', { "bg-dark": darkMode })}>
      <h2>
        {title}
      </h2>
      <h5 className='mt-2 text-secondary'>{author}</h5>
      <div>
        <div>{parse(sanitize(content))}</div>
        <div className={cx('mt-4')}>
          <small>{publish_date}</small>
        </div>
      </div>
    </Card>
  );
}

export default ArticleCard;
