import axios from 'axios';
import { IReposApiResponse } from '../pages/Repositories/Repositories.types';

export const getRepos = async (searchQuery: string) => {
  const response = await axios.get<IReposApiResponse>(
    `https://api.github.com/search/repositories?q=${searchQuery}`
  );

  return response.data;
};
