import { makeAutoObservable, runInAction } from 'mobx';
import { getRepos } from '../../api/getRepos';
import { IRepository } from '../../pages/Repositories/Repositories.types';

class StoreRepos {
  repos: IRepository[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getReposAction = async (searchQuery: string) => {
    this.isLoading = true;
    try {
      const res = await getRepos(searchQuery);

      runInAction(() => {
        this.repos = res.items;
        this.isLoading = false;
      });
    } catch (e) {
      console.log('e', e);
    }
    this.isLoading = false;
  };

  get totalRepos() {
    return this.repos.length;
  }
}

export default new StoreRepos();
