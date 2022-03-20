import classNamesBind from 'classnames/bind';
import { useSelector } from 'react-redux';
import { selectAppDarkMode } from '../../_modules/app/redux/appSelectors';
import { Comment, CommentDTO } from '../../_modules/comments/models/Comment';
import { createComment } from '../../_modules/comments/redux/commentsAsyncThunks';
import { useAppThunkDispatch } from '../../_shared/infra/redux/store';
import CommentCard from '../CommentCard';
import CommentForm from '../CommentForm';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface CommentsSectionProps {
  comments: Comment[],
  postId: number
}

const CommentsSection = (
  {
    comments,
    postId
  }: CommentsSectionProps
) => {
  const dispatch = useAppThunkDispatch();

  const darkMode = useSelector(selectAppDarkMode);

  const handleSubmitComment = async (data: CommentDTO) => {
    const submitted = await dispatch(createComment({postId: Number(data.postId), comment: data})).unwrap();
    console.log(submitted)
  }

  return (
    <div className={cx('comments-section')}>
      <div >
        <h5 className={cx('mb-3')}>
          Leave your comment
        </h5>
        <CommentForm postId={postId} onCommentSubmit={handleSubmitComment} />
      </div>
    {
      comments.length ?
          <div className={cx('mt-4')} >
            <h5>
              Comments
            </h5>
         
              <div className={cx('comments-list')}>
                {
                  comments?.map(comment =>
                    <CommentCard key={comment.id} comment={comment} darkMode={darkMode} />
                  )
                }
              </div>
          
            
            
        </div>
        : 
        null
    }
      
    </div>
  );
}

export default CommentsSection;
