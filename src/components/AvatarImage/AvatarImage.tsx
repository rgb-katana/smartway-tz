import { type FC } from 'react';
import { type IAvatarImageProps } from './AvatarImage.types';
import styles from './AvatarImage.module.scss';
import clsx from 'clsx';

const AvatarImageComponent: FC<IAvatarImageProps> = props => {
  const { avatarUrl, alt, type = 'big' } = props;

  const isBig = type === 'big';

  return (
    <div className={styles.container}>
      <img
        src={avatarUrl}
        alt={alt}
        className={clsx([
          styles.avatar,
          isBig ? styles.avatar_big : styles.avatar_small,
        ])}
      />
    </div>
  );
};

export const AvatarImage = AvatarImageComponent;
