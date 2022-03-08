import type { RootState } from '../../../_shared/infra/redux/store';

export const selectComments = (state: RootState): any =>
  state?.modules.comments;

