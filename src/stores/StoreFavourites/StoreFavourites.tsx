import { makeAutoObservable } from 'mobx';
import { IRepository } from 'src/pages/Repositories/Repositories.types';

class StoreFavourites {
  favourites: IRepository[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addToFavourites(repo: IRepository) {
    if (!this.isFavourite(repo.id)) {
      this.favourites.push(repo);
    }
  }

  isFavourite = (repoId: number) => {
    return this.favourites.some(repo => repo.id === repoId);
  };

  removeFromFavourites(repoId: number) {
    this.favourites = this.favourites.filter(repo => repo.id !== repoId);
  }

  toggleFavourite = (repo: IRepository) => {
    if (this.isFavourite(repo.id)) {
      this.removeFromFavourites(repo.id);
    } else {
      this.addToFavourites(repo);
    }
  };

  get totalFavourites() {
    return this.favourites.length;
  }
}

export default new StoreFavourites();
