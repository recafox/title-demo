import styled from 'styled-components';
import { forwardRef } from 'react';
const Cards = ['card a', 'card b', 'card c'];

const Scrolling = forwardRef((props, ref) => {
  return (
    <StyledContainer ref={ref}>
      <Card>Scroll me</Card>
    </StyledContainer>
  );
});

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 100vh;
  overflow-y: scroll;
  border: 1px solid black;
`;

const Card = styled.div`
  height: 500px;
  width: 1000px;
  border: 1px solid purple;
`;

export default Scrolling;
