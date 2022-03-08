import { gql } from '@apollo/client';

export const COMMENT = gql`
  fragment CommentCore on Comment {
    id
    postId
    parent_id
    user
    date
    content
  }
`;

export const queries = {
  FETCH_COMMENTS: () => gql`
    ${COMMENT}
    query fetchComments($id: String!) {
      comments(id: $id) @rest(type: "Comment", path: "/comments") {
        ...CommentCore
      }
    }
  `,
};


export default queries;
