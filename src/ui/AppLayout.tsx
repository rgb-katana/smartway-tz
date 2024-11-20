import { type FC } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.scss';

const AppLayoutComponent: FC = () => {
  return (
    <div className={styles.appLayoutStyle}>
      <Header />
      <main className={styles.mainStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export const AppLayout = AppLayoutComponent;
