import { sanitize } from 'dompurify';
import parse from 'html-react-parser';
import { PostWithComments } from '../../_modules/posts/models/Post';
import CommentsSection from '../CommentsSection';

interface ArticleProps {
  post: PostWithComments
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
    }
  }: ArticleProps
) => {

  return (
    <>
      <div className='mb-5'>
        <h2 className='text-center mt-5 mb-4'>
          {title}
        </h2>
        <h5>{description}</h5>
        <div>{parse(sanitize(content))}</div>
        <p>{publish_date}</p>
        <p>{author}</p>
      </div>
      <CommentsSection comments={comments} postId={id} />
    </>
  );
}

export default Article;
