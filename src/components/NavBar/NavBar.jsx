import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';
import NavbarAuth  from './NavBarAuth/NavBarAuth';
import NavbarUser from './NavBarUser/NavBarUser';
import { FaRegAddressBook } from 'react-icons/fa';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { Link } from "./NavBarAuth/NavBarAuth.styled";


export const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
      <>
      <NavLink to="/">
        <ButtonIcon
          icon={FaRegAddressBook}
          iconSize={20}
        />
      </NavLink>
        {isLogin && <Link to="/contacts">Contacts</Link>}

        {!isLogin && <NavbarAuth />}
        {isLogin &&<NavbarUser />}
      </>
  );
};
