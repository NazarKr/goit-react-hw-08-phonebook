import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';
import NavbarAuth  from './NavBarAuth/NavBarAuth';
import NavbarUser from './NavBarUser/NavBarUser';

export const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
      <>
        <NavLink to="/">LoGo</NavLink>
        {isLogin && <NavLink to="/contacts">Contact</NavLink>}

        {!isLogin && <NavbarAuth />}
        {isLogin &&<NavbarUser />}
      </>
  );
};
