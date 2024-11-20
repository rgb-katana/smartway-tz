import axios from 'axios';
import { IApiResponse } from '../pages/Repositories/Repositories.types';

export const getRepos = async (searchQuery: string) => {
  const response = await axios.get<IApiResponse>(
    `https://api.github.com/search/repositories?q=${searchQuery}`
  );

  return response.data;
};
