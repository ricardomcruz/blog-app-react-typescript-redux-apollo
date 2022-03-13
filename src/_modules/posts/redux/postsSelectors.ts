import type { RootState } from '../../../_shared/infra/redux/store';
import { Post } from '../models/Post';

export const selectPosts = ({ modules }: RootState): Post[] =>
  modules?.posts?.posts;
  