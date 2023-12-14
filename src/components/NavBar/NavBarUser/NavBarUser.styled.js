import styled from 'styled-components';
import theme from 'theme';
import { NavLink } from 'react-router-dom';

export const HeaderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

export const NameP = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;