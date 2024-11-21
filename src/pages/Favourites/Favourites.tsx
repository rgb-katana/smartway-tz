import { type FC } from 'react';
import styles from './Favourites.module.scss';
import { observer } from 'mobx-react-lite';
import { InstrumentsPanel } from 'components/InstrumentsPanel/InstrumentsPanel';
import { Result } from 'components/Result/Result';
import { DropdownList } from 'components/DropdownList/DropdownList';
import { BackToPage } from 'components/BackToPage/BackToPage';
import storeFavourites from 'src/stores/StoreFavourites/StoreFavourites';
import { ReposList } from 'components/ReposList/ReposList';

const FavouritesComponent: FC = observer(() => {
  const { totalFavourites, favourites } = storeFavourites;

  return (
    <div className={styles.favouritesContainerStyle}>
      <BackToPage />
      <InstrumentsPanel>
        <Result title="Favorites" totalRepos={totalFavourites} />
        <DropdownList />
      </InstrumentsPanel>
      <ReposList repos={favourites} />
    </div>
  );
});

export const Favourites = FavouritesComponent;
