import styled from 'styled-components';
import emojiHandDark from '../../assets/images/unity_hand_dark.png';
import emojiHandLight from '../../assets/images/unity_hand_light.png';
import marker from '../../assets/images/marker.svg';
import { H3 } from '../../components/Typography';

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const HeaderH3 = styled(H3)`
  padding: 48px 0 0 0;
  margin-bottom: 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const BLMBanner = styled.div`
  width: 64px;
  height: 74px;
  align-self: top;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: 96px;

  @media (max-width: 600px) {
    margin-bottom: 48px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const Splash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0px;
  padding: 200px 0;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;

export const SplashColumn = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnityHands = styled.div`
  width: 160px;
  height: 160px;
  margin-top: 32px;
  background-image: url(${emojiHandDark}), url(${emojiHandLight});
  background-position: center left, center right;
  background-size: 80px;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    height: 120px;
  }
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

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 180px;
  background-color: var(--color-background-secondary);
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: 600;
  color: var(--color-text-secondary);
  cursor: pointer;
  text-decoration: none;

  margin-bottom: 48px;

  &:hover {
    background-color: var(--color-background-primary);
    color: var(--color-text-primary);
    border: 2px solid var(--color-text-primary);
    padding: 0 22px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-column-gap: 112px;
  grid-row-gap: 0px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentColumn = styled.article`
  font-size: 28px;
  line-height: 50px;
  margin-bottom: 48px;
`;

export const ContentColumnSubgrid = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    flex: 1;
    max-width: 480px;
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 96px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const FooterColumn = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    max-width: 320px;
  }

  @media (max-width: 600px) {
    max-width: 280px;
  }

  @media (max-width: 480px) {
    max-width: 240px;
  }
`;

export const LinkIcon = styled.img`
  width: 40px;
  height: 40px;

  &:hover {
    opacity: 0.6;
  }
`;
