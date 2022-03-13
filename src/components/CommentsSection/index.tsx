import classNamesBind from 'classnames/bind';
import { RawComment } from '../../_modules/comments/models/Comment';
import { createComment } from '../../_modules/comments/redux/commentsAsyncThunks';
import { useAppThunkDispatch } from '../../_shared/infra/redux/store';
import CommentCard from '../CommentCard';
import CommentForm from '../CommentForm';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface CommentsSectionProps {
  comments: RawComment[],
  postId: number
}

const CommentsSection = (
  {
    comments,
    postId
  }: CommentsSectionProps
) => {
  const dispatch = useAppThunkDispatch();

  const handleSubmitComment = async (data: RawComment) => {
    const submitted = await dispatch(createComment({postId: Number(data.postId), comment: data})).unwrap();
    console.log(submitted)
  }

  return (
    <div className={cx('comments-section', 'py-2')}> 
    {
      comments.length ?
        <div>
            <h5>
              Comments
            </h5>
            {
              comments?.map(comment =>
                <CommentCard key={comment.id} comment={comment} />
              )
            }
        </div>
        : 
        null
    }
      <div>
        <h5 className={cx('mb-3')}>
          Leave your comment
        </h5>
        <CommentForm postId={postId} onCommentSubmit={handleSubmitComment}/>
      </div>
    </div>
  );
}

export default CommentsSection;
