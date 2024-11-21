export interface IReposApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IRepository[];
}

export interface IRepository {
  id: number;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  node_id: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  archived: boolean;
  created_at: string;
  updated_at: string;
  isFavourite: boolean;
  owner: IOwner;
}

export type IRepoPoints = Pick<
  IRepository,
  | 'language'
  | 'archived'
  | 'created_at'
  | 'updated_at'
  | 'stargazers_count'
  | 'forks_count'
>;

export interface IOwner {
  login: string;
  avatar_url: string;
  id: number;
}
