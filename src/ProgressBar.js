import styled from 'styled-components';

const p = {
  first: 10,
  second: 0,
  third: 0,
};

const ProgressBar = (props) => {
  const { heightMap } = props;

  return (
    <Bar {...props}>
      <div id='button-1'>
        button one
        <div
          className='progress'
          style={{ width: `${heightMap.first.passed}%` }}
        ></div>
      </div>
      <div id='button-2'>
        button two
        <div
          className='progress'
          style={{ width: `${heightMap.second.passed}%` }}
        ></div>
      </div>
      <div id='button-3'>
        button threeeee
        <div
          className='progress'
          style={{ width: `${heightMap.third.passed}%` }}
        ></div>
      </div>
    </Bar>
  );
};

const Bar = styled.div`
  height: 80px;
  width: 500px;
  border: 1px solid black;
  background-color: #fff;
  display: flex;
  position: fixed;
  top: 70px;
  right: 30px;

  .progress {
    height: 100%;
    background: lightgreen;
  }

  > div {
    flex-grow: 2;
  }
`;

export default ProgressBar;
