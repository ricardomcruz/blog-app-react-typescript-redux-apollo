
import { Comment, CommentDTO } from '../../_modules/comments/models/Comment';
import { Post } from '../../_modules/posts/models/Post';

export const postMock: Post = {
  id: 1,
  title: 'title',
  author: 'author',
  publish_date: 'publish_date',
  description: 'description',
  content: 'content'
}

export const commentMockDTO: CommentDTO = {
  postId: 2,
  user: 'user',
  date: 'date',
  content: 'content',
};

export const commentMock: Comment = {
  ...commentMockDTO,
  id: 1,
  parent_id: 2,
};

export const postWithCommentsMock: Post = {
 ...postMock,
 comments: commentMock
};