export interface Comment {
    id: number;
    postId: number | string;  // json-server converts all POST payload to string values
    parent_id?: number;
    user: string;
    date: string;
    content: string
}

export interface CommentDTO {
  postId: number;
  user: string;
  date: string;
  content: string;
}
