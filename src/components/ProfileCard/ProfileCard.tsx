import { useEffect, useState, type FC } from 'react';
import styles from './ProfileCard.module.scss';
import { useParams } from 'react-router-dom';
import { getRepo } from 'src/api/getRepo';
import {
  IRepoPoints,
  IRepository,
} from 'src/pages/Repositories/Repositories.types';
import { getPointsConfig } from './ProfileCard.utils';
import CopyIcon from 'assets/icons/copy.svg?react';
import OutlinedHeart from 'assets/icons/outlined_heart.svg?react';
import FilledHeart from 'assets/icons/filled_heart.svg?react';
import { AvatarImage } from 'components/AvatarImage/AvatarImage';
import { Button } from 'components/Button/Button';
import { ButtonWithIcon } from 'components/ButtonWithIcon/ButtonWithIcon';
import { observer } from 'mobx-react-lite';
import storeFavourites from 'src/stores/StoreFavourites/StoreFavourites';
import { copyToClipboard } from 'src/utils/copy';

const ProfileCardComponent: FC = observer(() => {
  const { id } = useParams();
  const [repoData, setRepoData] = useState<IRepository>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { isFavourite, toggleFavourite } = storeFavourites;

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const repo = await getRepo(String(id));
        setRepoData(repo);
      } catch {
        setError('Error getting a repo');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      void fetchRepository();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!repoData) {
    return <div>No data found for the repository</div>;
  }

  const points: IRepoPoints = {
    language: repoData.language,
    archived: repoData.archived,
    created_at: repoData.created_at,
    updated_at: repoData.updated_at,
    forks_count: repoData.forks_count,
    stargazers_count: repoData.stargazers_count,
  };

  const pointsConfig = getPointsConfig(points);
  const isFav = isFavourite(repoData.id);

  const handleCopy = (url: string) => {
    void copyToClipboard(url);
  };

  return (
    <div className={styles.profile}>
      <h2 className={styles.profile_title}>Профиль</h2>
      <div className={styles.profile_top}>
        <AvatarImage
          avatarUrl={repoData.owner.avatar_url}
          alt={repoData.owner.login}
        />
        <div className={styles.profile_info}>
          <h3 className={styles.profile_name}>{repoData.full_name}</h3>
          <p className={styles.profile_description}>{repoData.description}</p>
        </div>
      </div>
      <div className={styles.profile_main}>
        <ul className={styles.profile_points}>
          {pointsConfig.map((point, index) => (
            <li className={styles.profile_point} key={index}>
              <div className={styles.profile_point_icon}>{point.icon}</div>
              <div className={styles.profile_point_info}>
                <span className={styles.profile_point_upper}>
                  {point.upperText}
                </span>
                <span className={styles.profile_point_bottom}>
                  {point.bottomText}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.profile_bottom}>
        <div className={styles.profile_utils}>
          <ButtonWithIcon onClick={() => handleCopy(repoData.html_url)}>
            <CopyIcon />
          </ButtonWithIcon>
          <ButtonWithIcon onClick={() => toggleFavourite(repoData)}>
            {isFav ? <FilledHeart /> : <OutlinedHeart />}
          </ButtonWithIcon>
        </div>
        <Button type="big" isExternal={true} href={repoData.html_url}>
          Открыть репозиторий
        </Button>
      </div>
    </div>
  );
});

export const ProfileCard = ProfileCardComponent;
