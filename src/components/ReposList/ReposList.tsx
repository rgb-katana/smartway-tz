import { type FC } from 'react';
import styles from './ReposList.module.scss';
import { observer } from 'mobx-react-lite';
import storeRepos from '../../stores/StoreRepos/StoreRepos';
import { RepoItem } from './RepoItem/RepoItem';

const ReposListComponent: FC = observer(() => {
  const { repos, isLoading, isError } = storeRepos;

  return (
    <div className={styles.repos_container}>
      {isLoading && <p>loading...</p>}
      {isError && (
        <p>
          Can&apos;t find anything. Either github api is down or nothing is
          found with your search query. Try another one or wait a little.
        </p>
      )}
      {!isLoading && (
        <ul className={styles.repos_list}>
          {repos.map((repo, i) => {
            return <RepoItem key={i} repo={repo} />;
          })}
        </ul>
      )}
    </div>
  );
});

export const ReposList = ReposListComponent;
