import styled from 'styled-components';
import emojiHandDark from '../../assets/images/unity_hand_dark.png';
import emojiHandLight from '../../assets/images/unity_hand_light.png';
import marker from '../../assets/images/marker.svg';

export const Header = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 80px;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const H3 = styled.h3`
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  padding: 48px 0px;
`;

export const BLMBanner = styled.div`
  width: 76px;
  height: 88px;
  align-self: top;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 160px;
  border: 1px solid red;
`;

export const Splash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SplashColumn = styled.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnityHands = styled.div`
  width: 160px;
  height: 160px;
  background-image: url(${emojiHandDark}), url(${emojiHandLight});
  background-position: center left, center right;
  background-size: 80px;
  background-repeat: no-repeat;
`;

export const H1 = styled.h1`
  font-size: 64px;
  line-height: 78px;
  font-weight: 600;
  text-align: center;
`;

export const Underline = styled.span`
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    width: 105%;
    height: 32px;
    bottom: -12px;
    left: -2.5%;
    z-index: -1;
    background-image: url(${marker});
  }
`;

export const Footer = styled.footer``;
