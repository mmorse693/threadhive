import axiosClient from '../api/axiosClient';
import { SUBREDDIT_API } from '../config/apiConfig';

export const fetchSubreddits = async () => {
  const res = await axiosClient.get(SUBREDDIT_API.GET_ALL);
  return res.data.data;
};

export const createSubreddit = async ({ name, description = '' }) => {
  const res = await axiosClient.post(SUBREDDIT_API.CREATE, { name, description });
  return res.data.data;
};

export const fetchSubredditWithThreads = async (subredditId) => {
  const res = await axiosClient.get(SUBREDDIT_API.GET_BY_ID(subredditId));
  return res.data.data;
};
