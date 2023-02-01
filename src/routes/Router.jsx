import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminSetting from '../pages/AdminSetting';
import FirstPage from '../pages/FirstPage';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import ParkSetting from '../pages/ParkSetting';
import SearchPage from '../pages/SearchPage';
import SignUpPage from '../pages/SignupPage';
import UserSetting from '../pages/UserSetting';
import VehicleSetting from '../pages/VehicleSetting';
import NavigatePage from '../reserve/NavigatePage';
import ReservePage from '../reserve/reservePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },

  {
    path: '/admin',
    element: <AdminSetting />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/user',
    element: <UserSetting />
  },
  {
    path: '/vehicle',
    element: <VehicleSetting />
  },
  {
    path: '/park',
    element: <ParkSetting />
  },
  {
    path: '/navigate',
    element: <NavigatePage />
  },
  {
    path: '/reserve',
    element: <ReservePage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
