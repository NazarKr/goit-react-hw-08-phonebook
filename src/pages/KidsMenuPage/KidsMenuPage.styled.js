import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const Heading1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Heading2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const WraperMenu = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-weight: 500;
  /* margin-bottom: 4px; */
`;

export const PriceLabel = styled.p`
  /* font-style: italic; */
  font-weight: 400;
`;

export const PriceValue = styled.p`
  font-weight: bold;
  font-size: 18px;
  /* margin-top: 4px; */
  margin-left: 10px;
`;
