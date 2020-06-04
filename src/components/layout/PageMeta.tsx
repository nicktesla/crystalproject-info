import React, { FunctionComponent, ReactNode } from "react";
import { Helmet } from "react-helmet";

type PageMetaProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const PageMeta: FunctionComponent<PageMetaProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </Helmet>
  );
};
