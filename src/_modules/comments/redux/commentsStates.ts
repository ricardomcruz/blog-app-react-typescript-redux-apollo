import { Comment } from '../models/Comment';

export interface CommentsState {
  comments: Comment[];
}

const initialCommentsState: CommentsState = {
  comments: [],
};

export default initialCommentsState;
