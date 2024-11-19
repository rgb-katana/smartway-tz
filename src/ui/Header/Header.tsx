import { type FC } from 'react';
import styles from './Header.module.scss';
import SearchGlassIcon from '../../assets/icons/search_glass.svg?react';
import HeartSimpleIcon from '../../assets/icons/heart_simple.svg?react';
import AccountIcon from '../../assets/icons/account.svg?react';

const HeaderComponent: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftHeader}>
          <SearchGlassIcon />
          <div className={styles.mainLogoStyle}>GitHubSearch</div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.favouritesContainer}>
            <HeartSimpleIcon />
          </div>
          <div className={styles.accountOuterWrapper}>
            <div className={styles.accountInnerWrapper}>
              <AccountIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
