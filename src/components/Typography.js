import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 64px;
  line-height: 78px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 600px) {
    font-size: 36px;
    line-height: 52px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 44px;
  }
`;

export const H2 = styled.div`
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const H3 = styled.h3`
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const H4 = styled.h3`
  font-size: 26px;
  line-height: 32px;
  margin: 0;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const P = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PLarge = styled.p`
  font-size: 28px;
  line-height: 48px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 42px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Ul = styled.ul`
  padding-left: 28px;
  list-style-type: disc;

  @media (max-width: 480px) {
    padding-left: 16px;
  }
`;

export const Li = styled.li`
  margin-bottom: 32px;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 42px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 32px;
    margin-left: -20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;

export const ButtonLink = styled.a`
  display: block;
  width: max-content;
  height: 48px;
  padding: 0 24px;
  background-color: var(--color-background-secondary);
  border: 2px solid var(--color-text-secondary);
  font-size: 16px;
  line-height: 46px;
  text-align: center;
  font-weight: 600;
  color: var(--color-text-secondary);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--color-background-primary);
    color: var(--color-text-primary);
    border: 2px solid var(--color-text-primary);
    padding: 0 24px;
  }
`;
