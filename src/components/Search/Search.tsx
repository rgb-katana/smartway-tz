import { FC, useEffect, useState } from 'react';
import styles from '../Search/Search.module.scss';
import storeRepos from '../../stores/StoreRepos/StoreRepos';

const SearchComponent: FC = () => {
  const { getReposAction } = storeRepos;
  const [searchValue, setSearchValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue) {
      void getReposAction(debouncedValue);
    }
  }, [debouncedValue, getReposAction]);

  return (
    <input
      placeholder="Search"
      className={styles.searchInputStyle}
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export const Search = SearchComponent;
