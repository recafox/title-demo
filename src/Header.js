import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
const color = '#CBFF79';

const desktopSetting = {
  width: 740,
  zhFontW: 24,
  enUpperFontW: 30,
  enLowerFontW: 13,
  lineHeight: 38, // before & after is 16
};

const mobileSetting = {
  width: 310,
  zhFontW: 24,
};

const Header = ({ text }) => {
  const [spans, setSpans] = useState([]);
  useEffect(() => {
    let settings;
    if (window.innerWidth < 414) {
      settings = mobileSetting;
    } else {
      settings = desktopSetting;
    }
    let textArr = text.split('');
    let currentWidth = 0;

    let currentSpan = '';
    let i = 0;
    let totalWords = textArr.length;
    if (text.length * settings.zhFontW < settings.width) {
      setSpans([...spans, text]);
    } else {
      while (i < totalWords) {
        if (currentWidth + settings.zhFontW > settings.width) {
          console.log('cut off', currentSpan);
          setSpans([...spans, currentSpan]);
          currentWidth = 0;
          totalWords -= currentSpan.length;
          currentSpan = '';
        } else {
          console.log('add word');
          currentWidth += settings.zhFontW;
          currentSpan += textArr[i];
        }
        i++;
      }
      console.log(spans);
      if (totalWords > 0) {
        let rest = textArr.slice(i - 1);
        setSpans([...spans, rest.join('')]);
      }
    }
  }, [window.innerWidth]);

  return (
    <div>
      {spans.map((span, index) => (
        <StyledSpan key={index}>{span}</StyledSpan>
      ))}
    </div>
  );
};

const StyledSpan = styled.span`
  display: block;
  width: fit-content;
  position: relative;
  background-color: ${color};
  padding: 0 10px;
  font-size: ${desktopSetting.zhFontW}px;
  height: ${desktopSetting.lineHeight}px;
  line-height: ${desktopSetting.lineHeight}px;
  margin-bottom: 16px;

  &:before {
    content: '';
    position: absolute;
    height: 10px;
    left: 0;
    right: 0;
    top: -10px;
    background: radial-gradient(
      20px 10px ellipse at bottom,
      ${color} 10px,
      transparent 11px
    );
    background-repeat: round no-repeat;
    background-size: 20px 10px;
  }

  &:after {
    content: '';
    position: absolute;
    height: 10px;
    left: 0;
    right: 0;
    bottom: -10px;
    background: radial-gradient(
      20px 10px ellipse at top,
      ${color} 10px,
      transparent 11px
    );
    background-repeat: round no-repeat;
    background-size: 20px 10px;
  }
`;

export default Header;
