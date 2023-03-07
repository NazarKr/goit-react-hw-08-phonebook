import { Outlet } from "react-router-dom";
import { NavBar } from 'components/NavBar/NavBar';

import { MainContainer } from "./Layout.styled";

export const Layout = () => {
  return <MainContainer>
    <NavBar/>
    <Outlet/>
    {/* {children} */}
  </MainContainer>;
};
