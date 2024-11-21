import { type FC } from 'react';
import styles from './Result.module.scss';
import plural from '../../utils/plural';
import { IResultProps } from './Result.types';

const ResultComponent: FC<IResultProps> = props => {
  const { title, totalRepos } = props;

  return (
    <p className={styles.resultParagraphStyle}>
      {title}: {`${totalRepos} `}
      {plural(totalRepos, {
        one: 'repository',
        other: 'repositories',
      })}
    </p>
  );
};

export const Result = ResultComponent;
