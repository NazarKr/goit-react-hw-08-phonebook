import styled from 'styled-components';
import theme from 'theme';

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
`
export const TackTitle= styled.p`
  text-align: left;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  margin-bottom: 6px;
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.m};
    
  }
`;

export const TackText = styled.p`
  text-align: left;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.m};
  }
`;
