import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { HeaderContainer, MainContainer } from "./Layout.styled";

const SharedLayout = () => {
  return (
    <>
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>

      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default SharedLayout;