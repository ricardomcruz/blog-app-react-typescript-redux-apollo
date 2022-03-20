import get from 'lodash/get';
import commentsQueries from '../../../_modules/comments/queries/commentsQueries';
import postsQueries from '../../../_modules/posts/queries/postsQueries';

export const queries = {
  ...postsQueries,
  ...commentsQueries,
};

export const getQuery = (query: string) => {

  return get(
    queries,
    query
  )();
};

export default queries;
