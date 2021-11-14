import styled from 'styled-components';

const BGHeader = ({ text }) => {
  return (
    <>
      <StyledBG>
        <p>{text}</p>
      </StyledBG>
    </>
  );
};

const StyledBG = styled.div`
  background-image: url('/bg.JPG');
  background-position: left bottom;

  p {
    line-height: 58px;
    font-size: 40px;
    margin: 0;
  }
`;

export default BGHeader;
