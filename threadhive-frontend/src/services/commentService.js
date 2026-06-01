import axiosClient from '../api/axiosClient';
import { COMMENT_API } from '../config/apiConfig';

export async function fetchCommentsForThread(threadId) {
  const res = await axiosClient.get(COMMENT_API.GET_BY_THREAD(threadId));
  return res.data.data;
}

export async function postComment({ threadId, content }) {
  const res = await axiosClient.post(COMMENT_API.CREATE, {
    thread: threadId,
    content,
  });
  return res.data.data;
}

export const upvoteComment = async (commentId) => {
  const res = await axiosClient.post(COMMENT_API.UPVOTE(commentId));
  return res.data.data;
};

export const downvoteComment = async (commentId) => {
  const res = await axiosClient.post(COMMENT_API.DOWNVOTE(commentId));
  return res.data.data;
};
