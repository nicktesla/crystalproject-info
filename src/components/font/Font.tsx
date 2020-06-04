import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const StyledH1 = styled.h1.attrs((props) => ({
  className: props.className,
}))``;

export const H1: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <StyledH1 {...props}>{children}</StyledH1>
);

const StyledH2 = styled.h1.attrs((props) => ({
  className: props.className,
}))``;

export const H2: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <StyledH2 {...props}>{children}</StyledH2>
);

const StyledParagraph = styled.p.attrs((props) => ({
  className: props.className,
}))``;

export const Paragraph: FunctionComponent<TextProps> = ({
  children,
  ...props
}) => <StyledParagraph {...props}>{children}</StyledParagraph>;
