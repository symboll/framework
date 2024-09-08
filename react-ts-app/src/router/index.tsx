import { createBrowserRouter } from "react-router-dom";

import Root from '@/pages/root';
import LoginPage from '@/pages/login-page';
import ErrorPage from '@/pages/error-page';
import RegisterPage from '@/pages/register-page';


export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  }
]);