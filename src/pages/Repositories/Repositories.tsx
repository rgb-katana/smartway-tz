import { type FC } from 'react';
import styles from './Repositories.module.scss';
import { Search } from '../../components/Search/Search';
import { InstrumentsPanel } from '../../components/InstrumentsPanel/InstrumentsPanel';
import { Result } from '../../components/Result/Result';
import { DropdownList } from '../../components/DropdownList/DropdownList';
import { observer } from 'mobx-react-lite';
import storeRepos from '../../stores/StoreRepos/StoreRepos';
import { ReposList } from '../../components/ReposList/ReposList';

const RepositoriesComponent: FC = observer(() => {
  const { repos } = storeRepos;

  console.log('repos', repos);

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
});

export const Repositories = RepositoriesComponent;
