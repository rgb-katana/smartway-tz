import { type FC } from 'react';
import styles from './Profile.module.scss';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';

const ProfileComponent: FC = () => {
  // const url https://api.github.com/repositories/18749335
  return (
    <div className={styles.profileContainerStyle}>
      <ProfileCard />
    </div>
  );
};

export const Profile = ProfileComponent;
