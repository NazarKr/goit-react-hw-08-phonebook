import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';

import { Conteiner } from "./HomePage.styled";

const HomePage = () => {
    const isLogin = useSelector(isUserLogin);


    return (
        <Conteiner>
            <h1>Welcome to Phone book.</h1>
            {!isLogin  &&<h3>Please register</h3>}
        </Conteiner>
    )
}

export default HomePage;