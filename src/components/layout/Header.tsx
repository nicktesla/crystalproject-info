import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { JoinSlack } from "../button";

const StyledHeader = styled.nav.attrs({
  className: "flex flex-row w-screen h-16 p-5 border-b border-gray-500",
})`
  & {
    .word-mark {
      ${tw`flex items-center flex-shrink-0 mr-auto`}
    }
    .word-mark span {
      ${tw`font-semibold text-xl tracking-tight`}
    }
  }
`;

export const Header = () => (
  <StyledHeader>
    <div className=".word-mark">
      <span>Crystal</span>
    </div>
    <div className="flex-grow flex" />
    <JoinSlack />
  </StyledHeader>
);
