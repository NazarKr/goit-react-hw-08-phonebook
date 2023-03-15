import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { getUser } from "redux/auth/authSelector";
import ButtonTxt from "shared/Buttons/ButtonText";

const NavbarUser = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }
    return (
        <>
            {name} <ButtonTxt onClick={onLogout} text="Logout"/>
        </>
    )
}

export default NavbarUser;