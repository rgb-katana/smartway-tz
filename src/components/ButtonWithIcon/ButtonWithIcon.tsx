import { PropsWithChildren, type FC } from 'react';
import { type IButtonWithIconProps } from './ButtonWithIcon.types';
import styles from './ButtonWithIcon.module.scss';
import clsx from 'clsx';

const ButtonWithIconComponent: FC<
  PropsWithChildren<IButtonWithIconProps>
> = props => {
  const { type = 'big' } = props;

  const isBig = type === 'big';

  return (
    <button
      className={clsx([
        styles.button,
        isBig ? styles.button_big : styles.button_small,
      ])}
    >
      {props.children}
    </button>
  );
};

export const ButtonWithIcon = ButtonWithIconComponent;
