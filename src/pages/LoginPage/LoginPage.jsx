import {  useDispatch } from "react-redux";
// import { isUserLogin } from "redux/auth/authSelector";
import { login } from "redux/auth/authOperations";
// import { Navigate } from "react-router-dom";
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    }

    return (
        <div>
            <h1>Register page</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage;