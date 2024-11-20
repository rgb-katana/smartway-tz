import { type FC } from 'react';
import styles from '../Search/Search.module.scss';

const SearchComponent: FC = () => {
  return (
    <input placeholder="Search" className={styles.searchInputStyle}></input>
  );
};

export const Search = SearchComponent;
