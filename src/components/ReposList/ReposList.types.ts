import { IRepository } from 'src/pages/Repositories/Repositories.types';

export interface IReposListProps {
  isLoading?: boolean;
  isError?: boolean;
  repos: IRepository[];
}
