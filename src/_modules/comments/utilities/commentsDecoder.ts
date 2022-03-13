import { Comment, RawComment } from "../models/Comment";

export const CommentDecoder = (rawComment: RawComment): Comment => {

  const { postId } = rawComment;

  return {
    user: rawComment.user,
    date: rawComment.date,
    content: rawComment.content,
    postId: Number(postId),
  };
}
