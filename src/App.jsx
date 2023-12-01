import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LangContext from "shared/hooks/langContext";
import AuthLayout from './components/AuthLayout/AuthLayout';
import { UserRoutes } from './components/UserRouters/UserRouters';
import { Analytics } from '@vercel/analytics/react';

export const App = () => {
  return (
    <LangContext>
      <AuthLayout>
        <UserRoutes />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          transition={Zoom}
          draggable
          Transition="zoom"
        />
        <Analytics />
      </AuthLayout>
    </LangContext>
  );
};
