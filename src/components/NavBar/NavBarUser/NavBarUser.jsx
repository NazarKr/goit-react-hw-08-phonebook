import { useSelector, useDispatch } from 'react-redux';
// import { logout } from 'redux/auth/authOperations';
// import { getUser } from 'redux/auth/authSelector';
// import ButtonTxt from 'shared/Buttons/ButtonText';
import { Link, LogoutWrapper, HeaderWraper, NameP } from './NavBarUser.styled';
import useLang from 'shared/hooks/useLang';
import locale from './UserLocale.json';

const NavbarUser = () => {
  const { lang } = useLang();
  const contacts = locale.contacts[lang];
  // const tasks = locale.tasks[lang];
  // const logout_text = locale.logout_text[lang];

  // const { name, avatarURL } = useSelector(getUser);
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <HeaderWraper>
      {/* <Link to="/contacts">{contacts}</Link> */}
      {/* <Link to="/tasks">{tasks}</Link> */}
      <LogoutWrapper>
        {/* <img src={`https:${avatarURL}`}
            alt="avatar"
            height="30px"/>
          <NameP>{name}</NameP> */}

        {/* <ButtonTxt onClick={onLogout} text={logout_text} /> */}
      </LogoutWrapper>
    </HeaderWraper>
  );
};

export default NavbarUser;
