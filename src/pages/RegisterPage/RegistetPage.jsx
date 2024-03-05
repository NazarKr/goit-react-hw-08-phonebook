import {  useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (data) => {
        dispatch(register(data));
        navigate('/after-registration'); 
    }

    return (
        <div>
            <h1>Register page</h1>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
}

export default RegisterPage;