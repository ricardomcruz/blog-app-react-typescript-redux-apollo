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
  GET_COMMENTS: () => gql`
    ${COMMENT}
    query fetchComments($id: String!) {
      comments(id: $id) @rest(type: "Comment", path: "/comments") {
        ...CommentCore
      }
    }
  `,
  GET_COMMENTS_FROM_POST: () => gql`
    ${COMMENT}
    query fetchComments($id: String!) {
      comments(id: $id)
        @rest(type: "Comment", path: "/posts/{args.id}/comments") {
        ...CommentCore
      }
    }
  `,
  POST_COMMENT_FOR_POST: () => gql`
    ${COMMENT}
    query fetchComments($id: String!) {
      comments(id: $postId, body: $body)
        @rest(
          type: "Comment",
          path: "/posts/{args.id}/comments",
          method: "POST",
          bodyKey: "body"
          ) {
        ...CommentCore
      }
    }
  `,
};


export default queries;
