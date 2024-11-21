import { type FC } from 'react';
import styles from './Favourites.module.scss';

const FavouritesComponent: FC = () => {
  return (
    <div className={styles.favouritesContainerStyle}>
      Favourites page is working
    </div>
  );
};

export const Favourites = FavouritesComponent;
