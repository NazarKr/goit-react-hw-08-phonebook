import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';
import NavbarAuth  from './NavBarAuth/NavBarAuth';
import NavbarUser from './NavBarUser/NavBarUser';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { AiFillHome } from 'react-icons/ai';
import LanguageSwitcher from 'shared/LanguageSwitcher/LanguageSwitcher';
import { HeaderWraper } from './NavBarUser/NavBarUser.styled';

export const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
      <HeaderWraper>
      <NavLink to="/">
        <ButtonIcon
          icon={AiFillHome}
          iconSize={20}
        />
      </NavLink>
        {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
      
      <LanguageSwitcher/>
      </HeaderWraper>
  );
};
