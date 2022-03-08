import { gql } from '@apollo/client';

export const POST = gql`
  fragment PostCore on Post {
    id
    title
    author
    publish_date
    slug
    description
    content
  }
`;

export const queries = {
  FETCH_POSTS: () => gql`
    ${POST}
    query fetchPosts($id: String!) {
      posts(id: $id) @rest(type: "Post", path: "/posts") {
        ...PostCore
      }
    }
  `,
};


export default queries;
