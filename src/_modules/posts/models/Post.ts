import { Comment } from '../../comments/models/Comment';

export interface Post {
    id: number;
    title: string;
    author: string;
    publish_date: string;
    slug: string;
    description: string,
    content: string
}

export interface PostWithComments extends Post {
  comments: Comment[];
}
