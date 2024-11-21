import { PropsWithChildren, type FC } from 'react';
import { type IButtonProps } from './Button.types';
import styles from './Button.module.scss';
import clsx from 'clsx';

const ButtonComponent: FC<PropsWithChildren<IButtonProps>> = props => {
  const { type, onClick, isExternal = false, href = '' } = props;

  const isBig = type === 'big';

  const sharedClasses = clsx([
    styles.button,
    isBig ? styles.button_big : styles.button_small,
  ]);

  if (isExternal) {
    return (
      <a
        className={sharedClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={sharedClasses}
      onClick={e => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {props.children}
    </button>
  );
};

export const Button = ButtonComponent;
