import { type FC } from 'react';
import { type IRepoItemProps } from './RepoItem.types';
import styles from './RepoItem.module.scss';
import StarIcon from 'assets/icons/star.svg?react';
import BranchIcon from 'assets/icons/branch.svg?react';
import CopyIcon from 'assets/icons/copy.svg?react';
import OutlinedHeart from 'assets/icons/outlined_heart.svg?react';
import FilledHeart from 'assets/icons/filled_heart.svg?react';
import { formatNumberWithSpaces } from 'src/utils/formatNumberWithSpaces';
import { AvatarImage } from 'components/AvatarImage/AvatarImage';
import { Button } from 'components/Button/Button';
import { ButtonWithIcon } from 'components/ButtonWithIcon/ButtonWithIcon';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import storeFavourites from 'src/stores/StoreFavourites/StoreFavourites';
import { copyToClipboard } from 'src/utils/copy';

const RepoItemComponent: FC<IRepoItemProps> = observer(props => {
  const { repo } = props;
  const { isFavourite, toggleFavourite } = storeFavourites;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/repository/${repo.id}`);
  };

  const handleToggleFavourite = () => {
    toggleFavourite(repo);
  };

  const handleCopy = (url: string) => {
    void copyToClipboard(url);
  };

  const isFav = isFavourite(repo.id);

  return (
    <li className={styles.item}>
      <div className={styles.item_top}>
        <AvatarImage
          avatarUrl={repo.owner.avatar_url}
          alt={repo.owner.login}
          type="small"
        />
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
          <ButtonWithIcon type="small" onClick={handleToggleFavourite}>
            {isFav ? <FilledHeart /> : <OutlinedHeart />}
          </ButtonWithIcon>
          <ButtonWithIcon
            type="small"
            onClick={() => handleCopy(repo.html_url)}
          >
            <CopyIcon />
          </ButtonWithIcon>
        </div>
        <Button type="small" onClick={handleRedirect}>
          Подробнее
        </Button>
      </div>
    </li>
  );
});

export const RepoItem = RepoItemComponent;
