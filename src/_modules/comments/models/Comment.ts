export interface RawComment {
    id: number;
    postId: number | string;  // json-server converts all POST payload to string values
    parent_id?: number;
    user: string;
    date: string;
    content: string
}

export interface Comment {
  postId: number;
  user: string;
  date: string;
  content: string;
}
