import styled from 'styled-components';
import theme from 'theme';

export const Wraper = styled.div`
  display: grid;
  /* grid-template-columns: 120px 1fr; */
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Field = styled.input`
  width: 240px;
  padding: 10px;
  padding-left: 30px;
  font-size: ${theme.fontSizes.xs};
  border-radius: ${theme.radii.normal};
  border: 1px solid #ccc;
  box-shadow: 0px 0px 20px -20px;

  :focus {
    outline-color: #1976d2;
  }

  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;
