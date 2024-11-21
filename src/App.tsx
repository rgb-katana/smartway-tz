import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';
import { FC } from 'react';
import { AppLayout } from './ui/AppLayout';
import { Repositories } from './pages/Repositories/Repositories';
import { Favourites } from './pages/Favourites/Favourites';
import { Profile } from './pages/Profile/Profile';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Repositories />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/repository/:id" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
