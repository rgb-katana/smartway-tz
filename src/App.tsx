import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';
import { FC } from 'react';
import { AppLayout } from './ui/AppLayout';
import { Repositories } from './pages/Repositories/Repositories';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Repositories />} />
          {/* <Route /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
