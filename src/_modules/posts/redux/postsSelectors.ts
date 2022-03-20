import { RequestStatus } from '../../../_shared/infra/apollo/models/Request';
import type { RootState } from '../../../_shared/infra/redux/store';
import { Post } from '../models/Post';

export const selectPosts = ({ modules }: RootState): Post[] =>
  modules?.posts?.posts;

export const selectPostsStatus = ({ modules }: RootState): RequestStatus =>
  modules?.posts?.status;
