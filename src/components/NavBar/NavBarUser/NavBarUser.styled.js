import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
`

export const Link = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: bold;
  }
`;

export const LogoutWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    gap: 10px;
    margin-left: 20px;
`;