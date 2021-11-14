// Import React & ReactDOM libraries from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './Header';

const title = '我們與「可能」的距離，大學大學大學';

// Create a react component
const App = function () {
  return (
    <Container>
      <Header text={title} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  width: 330px;
  border: 1px solid black;
`;

ReactDOM.render(<App></App>, document.querySelector('#root'));
