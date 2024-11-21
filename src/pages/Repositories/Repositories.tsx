import { type FC } from 'react';
import styles from './Repositories.module.scss';
import { Search } from '../../components/Search/Search';
import { InstrumentsPanel } from '../../components/InstrumentsPanel/InstrumentsPanel';
import { Result } from '../../components/Result/Result';
import { DropdownList } from '../../components/DropdownList/DropdownList';
import { ReposList } from '../../components/ReposList/ReposList';

const RepositoriesComponent: FC = () => {
  return (
    <div className={styles.repositoriesContainerStyle}>
      <Search />
      <InstrumentsPanel>
        <Result />
        <DropdownList />
      </InstrumentsPanel>
      <ReposList />
    </div>
  );
};

export const Repositories = RepositoriesComponent;
