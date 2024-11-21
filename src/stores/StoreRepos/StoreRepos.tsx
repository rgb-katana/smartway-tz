import { makeAutoObservable, runInAction } from 'mobx';
import { getRepos } from '../../api/getRepos';
import { IRepository } from '../../pages/Repositories/Repositories.types';

class StoreRepos {
  repos: IRepository[] = [];
  favourites: number[] = [];
  isError = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getReposAction = async (searchQuery: string) => {
    this.isLoading = true;
    this.isError = false;
    try {
      const res = await getRepos(searchQuery);

      runInAction(() => {
        this.repos = res.items;
        if (this.repos.length === 0) {
          throw new Error('Nothing found');
        }
        this.isLoading = false;
      });
    } catch (e) {
      console.log('e', e);
      this.isError = true;
      this.isLoading = false;
    }
  };

  resetRepos = () => {
    this.repos = [];
  };

  get totalRepos() {
    return this.repos.length;
  }
}

export default new StoreRepos();
