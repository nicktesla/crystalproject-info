import React, { FunctionComponent } from "react";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  variant?: string;
  icon?: string;
  className?: string;
};

const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))``;

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  ...btnProps
}) => <StyledButton {...btnProps}>{label}</StyledButton>;
