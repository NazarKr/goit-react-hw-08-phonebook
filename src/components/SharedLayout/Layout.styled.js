import styled from 'styled-components';
import theme from 'theme';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  gap: 16px;
  margin: 0 auto;
  padding: 10px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: ${theme.shadow.high};
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 16px;
  margin: 0 auto;
  padding: 10px;
  background: white;
  border: 1px solid lightgray;
  box-shadow: ${theme.shadow.high};
`;