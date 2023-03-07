import { BrowserRouter } from 'react-router-dom';
// import { Layout } from './Layouy/Layout';
// import { NavBar } from 'components/NavBar/NavBar';
import { UserRoutes } from './UserRouters/UserRouters';


import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Layout> */}
          {/* <NavBar /> */}
            <UserRoutes />

      {/* </Layout> */}
       <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        transition={Zoom}
        draggable
        Transition="zoom"
       />
      </BrowserRouter>
    </>
  );
};
