import React from "react";
import loadable from "@loadable/component";
import { Loading } from "../../components/loading";

const HomePageLoadable = loadable(() => import("./HomePage"), {
  fallback: <Loading />,
});

export const HomePage = () => <HomePageLoadable />;
