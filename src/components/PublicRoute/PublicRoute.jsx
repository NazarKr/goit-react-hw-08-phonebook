import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuth } from "../../redux/auth/authSelector";
import ReactSpinner from "components/ReactSpinner/ReactSpinner";

const PublicRoute = () => {
    const { isLogin, token } = useSelector(getAuth);

    if (!isLogin && token) {
        return ReactSpinner
    }

    if (isLogin) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PublicRoute;