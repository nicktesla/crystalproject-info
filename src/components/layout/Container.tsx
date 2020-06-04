import React, { FunctionComponent, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <div>{children}</div>
);
