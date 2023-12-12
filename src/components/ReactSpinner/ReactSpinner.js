import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* вище за інші елементи */
`;

const ReactSpinner = (
  <SpinnerWrapper>
    <Oval
      height={60}
      width={60}
      color="black"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="lightgray"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </SpinnerWrapper>
);

export default ReactSpinner;
