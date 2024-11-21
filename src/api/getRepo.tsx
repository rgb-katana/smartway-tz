import axios from 'axios';
import { IRepository } from '../pages/Repositories/Repositories.types';

export const getRepo = async (id: string) => {
  const response = await axios.get<IRepository>(
    `https://api.github.com/repositories/${id}`
  );

  return response.data;
};
