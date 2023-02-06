import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuth from '../features/auth/RedirectIfAuth';
import AuthLayout from '../layouts/AuthLayout';
import AdminSetting from '../pages/AdminSetting';
import FirstPage from '../pages/FirstPage';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import ParkSetting from '../pages/ParkSetting';
import SearchPage from '../pages/SearchPage';
import SignUpPage from '../pages/SignUpPage';
import UserSetting from '../pages/UserSetting';
import VehicleSetting from '../pages/VehicleSetting';
import NavigatePage from '../reserve/NavigatePage';
import ReservePage from '../reserve/reservePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RedirectIfAuth>
        <FirstPage />
      </RedirectIfAuth>
    )
  },
  {
    path: '/login',
    element: (
      <RedirectIfAuth>
        <LoginPage />
      </RedirectIfAuth>
    )
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },

  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
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
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
