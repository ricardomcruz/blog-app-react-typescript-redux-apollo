import { RequestStatus } from '../../../_shared/infra/apollo/models/Request';
import { Post } from '../models/Post';

export interface PostsState {
  posts: Post[];
  status: RequestStatus
}

const initialPostsState: PostsState = {
  posts: [],
  status: RequestStatus.IDLE
};

export default initialPostsState;
