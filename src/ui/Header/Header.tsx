import { type FC } from 'react';
import styles from './Header.module.scss';
import SearchGlassIcon from 'assets/icons/search_glass.svg?react';
import HeartSimpleIcon from 'assets/icons/heart_simple.svg?react';
import AccountIcon from 'assets/icons/account.svg?react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import storeFavourites from 'src/stores/StoreFavourites/StoreFavourites';

const HeaderComponent: FC = observer(() => {
  const { totalFavourites } = storeFavourites;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/">
          <div className={styles.leftHeader}>
            <SearchGlassIcon />
            <div className={styles.mainLogoStyle}>GitHubSearch</div>
          </div>
        </NavLink>
        <div className={styles.rightHeader}>
          <NavLink to="/favourites">
            <div className={styles.favouritesContainer}>
              {totalFavourites > 0 && (
                <div className={styles.favouritesCounter}>
                  {totalFavourites}
                </div>
              )}
              <HeartSimpleIcon />
            </div>
          </NavLink>
          <div className={styles.accountOuterWrapper}>
            <div className={styles.accountInnerWrapper}>
              <AccountIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export const Header = HeaderComponent;
