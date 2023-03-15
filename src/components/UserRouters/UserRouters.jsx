import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() => import("components/SharedLayout/SharedLayout"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegistetPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

export const UserRoutes = () => {
    return (
        <Suspense fallback={<p>......Loading</p>}>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    
                    <Route element={<PublicRoute />}>
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route path="contacts" element={<ContactsPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}