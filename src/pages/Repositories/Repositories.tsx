import { type FC } from 'react';
import styles from './Repositories.module.scss';
import { Search } from '../../components/Search/Search';
import { InstrumentsPanel } from '../../components/InstrumentsPanel/InstrumentsPanel';
import { Result } from '../../components/Result/Result';
import { DropdownList } from '../../components/DropdownList/DropdownList';
import { ReposList } from '../../components/ReposList/ReposList';
import storeRepos from 'src/stores/StoreRepos/StoreRepos';
import { observer } from 'mobx-react-lite';

const RepositoriesComponent: FC = observer(() => {
  const { repos, isLoading, isError, totalRepos } = storeRepos;

  return (
    <div className={styles.repositoriesContainerStyle}>
      <Search />
      <InstrumentsPanel>
        <Result title="Result" totalRepos={totalRepos} />
        <DropdownList />
      </InstrumentsPanel>
      <ReposList repos={repos} isLoading={isLoading} isError={isError} />
    </div>
  );
});

export const Repositories = RepositoriesComponent;
