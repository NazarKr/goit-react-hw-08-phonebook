import { Link } from 'react-router-dom';
import { Conteiner } from './HomePage.styled';
import useLang from 'shared/hooks/useLang';
import locale from '../../components/NavBar/NavBarUser/UserLocale.json';

const HomePage = () => {
  const { lang } = useLang();
  const contacts = locale.contacts[lang];
  const breakfast = locale.breakfast[lang];
  const kidsmenu = locale.kidsmenu[lang];
  return (
    <Conteiner>
      <h1>Welcome to Cantina.</h1>
      <Link to="/contacts">{contacts}</Link>
      <Link to="/breakfast">{breakfast}</Link>
      <Link to="/kidsmenu">{kidsmenu}</Link>
    </Conteiner>
  );
};

export default HomePage;
