import { type FC } from 'react';
import styles from './Result.module.scss';
import plural from '../../utils/plural';
import { observer } from 'mobx-react-lite';
import storeRepos from '../../stores/StoreRepos/StoreRepos';

const ResultComponent: FC = observer(() => {
  const { totalRepos } = storeRepos;

  return (
    <p className={styles.resultParagraphStyle}>
      Result: {`${totalRepos} `}
      {plural(totalRepos, {
        one: 'repository',
        other: 'repositories',
      })}
    </p>
  );
});

export const Result = ResultComponent;
