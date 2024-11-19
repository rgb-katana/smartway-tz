import { type FC } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';

const AppLayoutComponent: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const AppLayout = AppLayoutComponent;
