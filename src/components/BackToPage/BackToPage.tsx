import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BackToPage.module.scss';
import LeftArrowIcon from 'assets/icons/left-arrow.svg?react';

const BackToPageComponent: FC = () => {
  return (
    <NavLink to="/">
      <div className={styles.back_container}>
        <LeftArrowIcon /> Back
      </div>
    </NavLink>
  );
};

export const BackToPage = BackToPageComponent;
