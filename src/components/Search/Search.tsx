import { FC, useEffect, useState } from 'react';
import styles from '../Search/Search.module.scss';
import storeRepos from '../../stores/StoreRepos/StoreRepos';
import { observer } from 'mobx-react-lite';

const SearchComponent: FC = observer(() => {
  const { getReposAction, resetRepos, searchValue, setSearchValue } =
    storeRepos;
  const [debouncedValue, setDebouncedValue] = useState(searchValue);

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
    if (debouncedValue !== '') {
      void getReposAction(debouncedValue);
    }

    resetRepos();
  }, [debouncedValue, getReposAction, resetRepos]);

  return (
    <input
      placeholder="Search"
      className={styles.searchInputStyle}
      value={searchValue}
      onChange={handleChange}
    />
  );
});

export const Search = SearchComponent;
