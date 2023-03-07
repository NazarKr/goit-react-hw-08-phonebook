import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("components/Layouy/Layout"));
const HomePage = lazy(() => import("pages/homePage/HomePage"));
const ContactPage = lazy(() => import("pages/contactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("pages/registerPage/RegistetPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("pages/notFoundPage/NotFoundPage"));

export const UserRoutes = () => {
    return (
        <Suspense fallback={<p>......Loading</p>}>
            <Routes>
                <Route patch="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route patch="/register" element={<RegisterPage />} />
                    {/* <Route patch="/login" element={<LoginPage />} /> */}
                    <Route patch="/contacts" element={<ContactPage />} />
                    <Route patch="*" element={<NotFoundPage />} />
                </Route>

            </Routes>
     </Suspense>
)

}