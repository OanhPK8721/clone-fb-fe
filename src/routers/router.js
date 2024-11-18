import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home/components/home';
import LoginPage from '../pages/Login/loginPage';
import RegisterPage from '../pages/Register/registerPage';
import ForgotPasswordPage from '../pages/Fogot-Password/forgotPasswordPage';
import checkAuth from '../middlewares/auth';


const ProtectedRouteHaveToken = ({ element, redirectTo }) => {
  return checkAuth() ? element : <Navigate to={redirectTo} /> ;
};


const ProtectedRouteNoToken = ({ element, redirectTo }) => {
  return !checkAuth() ? element : <Navigate to={redirectTo} />;
}


const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRouteHaveToken element={<Home />} redirectTo="/login" />,
  },
  {
    path: '/login',
    element: <ProtectedRouteNoToken element={<LoginPage />} redirectTo="/" />,
  },
  {
    path: '/register',
    element: <ProtectedRouteNoToken element={<RegisterPage />} redirectTo="/" />,

  },
  {
    path: "/forgot-password",
    element: <ProtectedRouteNoToken element={<ForgotPasswordPage />} redirectTo="/" />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default routes;