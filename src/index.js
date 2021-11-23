// Import React & ReactDOM libraries from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { useRef, forwardRef, useEffect, useState } from 'react';
import Scrolling from './Scrolling';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
// Create a react component
const App = function () {
  const [update, setUpdate] = useState(0);
  const [heightMap, setHeightMap] = useState({
    first: {
      start: 0,
      end: 0,
      passed: 0, // percentage
    },
    second: {
      start: 0,
      end: 0,
      passed: 0,
    },
    third: {
      start: 0,
      end: 0,
      passed: 0,
    },
  });

  const heightMapRef = useRef(heightMap);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const updateHeightProgress = (currentPos) => {
    for (let key in heightMapRef.current) {
      let currentSection = heightMapRef.current[key];
      if (currentPos >= currentSection.end) {
        currentSection.passed = 100;
      } else if (
        currentPos > currentSection.start &&
        currentPos < currentSection.end
      ) {
        let sectionLength = currentSection.end - currentSection.start;
        let passed = currentPos - currentSection.start;
        let percentage = (passed / sectionLength) * 100;

        currentSection.passed = percentage;
      } else {
        currentSection.passed = 0;
      }

      console.log('update height map');
      setHeightMap(JSON.parse(JSON.stringify(heightMapRef.current)));
    }
  };

  const getPosY = (currentTop) => currentTop + window.scrollY;

  useEffect(() => {
    if (!firstRef.current || !secondRef.current || !thirdRef.current) {
      return;
    }

    const firstPos = firstRef.current.getBoundingClientRect();
    const secondPos = secondRef.current.getBoundingClientRect();
    const thirdPos = thirdRef.current.getBoundingClientRect();

    heightMapRef.current.first.start = getPosY(firstPos.top);
    heightMapRef.current.first.end = getPosY(firstPos.top) + firstPos.height;

    heightMapRef.current.second.start = getPosY(secondPos.top);
    heightMapRef.current.second.end = getPosY(secondPos.top) + secondPos.height;

    heightMapRef.current.third.start = getPosY(thirdPos.top);
    heightMapRef.current.third.end = getPosY(thirdPos.top) + thirdPos.height;

    console.log('init set height map');
    setHeightMap(JSON.parse(JSON.stringify(heightMapRef.current)));
  }, [firstRef, secondRef, thirdRef]);

  useEffect(() => {
    window.addEventListener('scroll', (evt) => {
      updateHeightProgress(document.documentElement.scrollTop);

      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.getBoundingClientRect().height
      ) {
        heightMapRef.current.third.passed = 100;
        setHeightMap(JSON.parse(JSON.stringify(heightMapRef.current)));
      }
    });
  }, []);

  return (
    <div>
      <ProgressBar heightMap={heightMapRef.current} update={update} />
      <ShortFrame ref={firstRef} />
      <Scrolling ref={secondRef} />
      <LongFrame ref={thirdRef} />
    </div>
  );
};

const ShortFrame = forwardRef((props, ref) => {
  return <StyledShortFrame ref={ref} />;
});

const LongFrame = forwardRef((props, ref) => {
  return <StyledLongFrame ref={ref} />;
});

const StyledShortFrame = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightgrey;
`;

const StyledLongFrame = styled.div`
  width: 100%;
  height: 1500px;
  background-color: lightcyan;
`;
ReactDOM.render(<App></App>, document.querySelector('#root'));
