import React from "react";
import styled from "styled-components";
import { Navigation } from "../navigation";

const StyledApp = styled.div.attrs({
  className:
    "max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full",
})`
  background-color: #f8f3ed;
`;

export const App = () => (
  <StyledApp>
    <Navigation />
  </StyledApp>
);
