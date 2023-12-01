import styled from 'styled-components';
import theme from 'theme';

export const HeaderContainer = styled.header`
  min-width: 320px;
  /* gap: 10px; */
  margin: 0 auto;
  padding: 10px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: ${theme.shadow.high};

  @media screen and (min-width: 321px) {
    width: 100%;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  gap: 16px;
  margin: 0 auto;
  padding: 10px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: ${theme.shadow.high};

  @media screen and (min-width: 321px) {
    width: 100%;
  }
`;