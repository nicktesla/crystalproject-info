import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div.attrs({
  className: "container w-screen h-screen mx-auto px-4 py-5",
})``;

type ContainerProps = {
  children: ReactNode;
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
