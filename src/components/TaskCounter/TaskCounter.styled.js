import styled from 'styled-components';
import theme from 'theme';

export const TaskCounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

export const TaskCounterText = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.secondary};
  margin-bottom: 12px;

  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;
