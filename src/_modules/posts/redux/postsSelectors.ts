import type { RootState } from '../../../_shared/infra/redux/store';

export const selectPosts = (state: RootState): any =>
  state?.modules.posts;

