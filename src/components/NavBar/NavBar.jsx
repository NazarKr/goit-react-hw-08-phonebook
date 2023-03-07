import { NavLink } from 'react-router-dom';
import { NavbarAuth } from './NavBarAuth/NavBarAuth';
import { Header, Section, Title } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Header>
      <Section>
        <Title>Contacts</Title>
        <Title>todo</Title>
        <NavLink to="/">LoGo</NavLink>
        <NavbarAuth/>
      </Section>
    </Header>
  );
};
