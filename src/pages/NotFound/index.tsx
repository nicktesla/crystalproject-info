import React from "react";
import loadable from "@loadable/component";
import { Loading } from "../../components/loading";

const NotFoundPageLoadable = loadable(() => import("./NotFoundPage"), {
  fallback: <Loading />,
});

export const NotFoundPage = () => <NotFoundPageLoadable />;
