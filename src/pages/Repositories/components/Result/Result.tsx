import { type FC } from 'react';
import styles from './Result.module.scss';
import plural from '../../../../utils/plural';

const ResultComponent: FC = () => {
  const repositoriesCount = 0; // пока захардкодил

  return (
    <p className={styles.resultParagraphStyle}>
      Result: {`${repositoriesCount} `}
      {plural(repositoriesCount, {
        one: 'repository',
        other: 'repositories',
      })}
    </p>
  );
};

export const Result = ResultComponent;
