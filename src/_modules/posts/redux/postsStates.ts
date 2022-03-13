import { Post } from '../models/Post';

export interface PostsState {
  posts: Post[];
}

const initialPostsState: PostsState = {
  posts: [],
};

export default initialPostsState;
