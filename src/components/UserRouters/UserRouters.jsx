// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import ReactSpinner from 'components/ReactSpinner/ReactSpinner';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const BreakfastPage = lazy(() => import('pages/Breakfast/BreakfastPage'));
const KidsMenuPage = lazy(() => import('pages/KidsMenuPage/KidsMenuPage'));
// const AfterRegistrationPage = lazy(() =>
//   import('pages/AfterRegistrationPage/AfterRegistrationPage')
// );
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={ReactSpinner}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          {/* <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="after-registration"
                element={<AfterRegistrationPage />}
              />
              <Route path="login" element={<LoginPage />} />
            </Route> */}

          <Route element={<PublicRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="breakfast" element={<BreakfastPage />} />
            <Route path="kidsmenu" element={<KidsMenuPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
