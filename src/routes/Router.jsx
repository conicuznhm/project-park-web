import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import RedirectIfAuth from "../features/auth/RedirectIfAuth";
import AuthLayout from "../layouts/AuthLayout";
import FirstPage from "../pages/FirstPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import SignUpPage from "../pages/SignUpPage";
import SlipPage from "../pages/SlipPage";
import UserSetting from "../pages/UserSetting";
// import VehicleSetting from "../pages/VehicleSetting";
import NavigatePage from "../reserve/NavigatePage";
import ReservePage from "../reserve/ReservePage";
import TransactionPage from "../pages/TransactionPage";
import VehiclePage from "../pages/VehiclePage";
import ParkPage from "../pages/ParkPage";
import AdminRoute from "../features/auth/AdminRoute";
import AdminPage from "../pages/AdminPage";
import ParkProfile from "../pages/ParkProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuth>
        <FirstPage />
      </RedirectIfAuth>
    )
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuth>
        <LoginPage />
      </RedirectIfAuth>
    )
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },

  {
    element: (
      <AdminRoute>
        <AuthLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminPage />
      },
      {
        path: "/:parkId/profile",
        element: <ParkProfile />
      }
    ]
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      // {
      //   path: "/admin",
      //   element: <AdminSetting />
      // },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/user",
        element: <UserSetting />
      },
      {
        path: "/vehicle",
        element: <VehiclePage />
      },
      // {
      //   path: '/vehicle',
      //   element: <VehicleSetting />
      // },
      {
        path: "/park",
        element: <ParkPage />
      },
      {
        path: "/navigate",
        element: <NavigatePage />
      },
      {
        path: "/:parkId/reserve",
        element: <ReservePage />
      },
      {
        path: "/slip",
        element: <SlipPage />
      },
      {
        path: "/transaction",
        element: <TransactionPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
