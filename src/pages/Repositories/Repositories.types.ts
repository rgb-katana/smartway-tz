export interface IApiResponse {
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
  owner: IOwner;
}

export interface IOwner {
  login: string;
  avatar_url: string;
  id: number;
}
