import { type FC } from 'react';
import { type IRepoItemProps } from './RepoItem.types';
import styles from './RepoItem.module.scss';
import StarIcon from 'assets/icons/star.svg?react';
import BranchIcon from 'assets/icons/branch.svg?react';
import CopyIcon from 'assets/icons/copy.svg?react';
import OutlinedHeart from 'assets/icons/outlined_heart.svg?react';
import { formatNumberWithSpaces } from 'src/utils/formatNumberWithSpaces';

const RepoItemComponent: FC<IRepoItemProps> = props => {
  const { repo } = props;

  return (
    <li className={styles.item}>
      <div className={styles.item_top}>
        <div className={styles.item_image_container}>
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className={styles.item_image}
          />
        </div>
        <div className={styles.item_stats}>
          <div className={styles.item_stars}>
            <StarIcon />
            <span>{formatNumberWithSpaces(repo.stargazers_count)}</span>
          </div>
          <div className={styles.item_forks}>
            <BranchIcon />
            <span>{formatNumberWithSpaces(repo.forks_count)}</span>
          </div>
        </div>
      </div>
      <div className={styles.item_center}>
        <p className={styles.item_username}>{`@${repo.id}`}</p>
        <p className={styles.item_link}>{repo.full_name}</p>
      </div>
      <div className={styles.item_bottom}>
        <div className={styles.item_utils}>
          <button className={styles.item_favourite}>
            <OutlinedHeart />
          </button>
          <button className={styles.item_copy}>
            <CopyIcon />
          </button>
        </div>
        <button className={styles.item_detailed}>Подробнее</button>
      </div>
    </li>
  );
};

export const RepoItem = RepoItemComponent;
