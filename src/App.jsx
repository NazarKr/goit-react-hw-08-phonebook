import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './components/AuthLayout/AuthLayout';
import { UserRoutes } from './components/UserRouters/UserRouters';

export const App = () => {
  return (
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
    </AuthLayout>
  );
};
