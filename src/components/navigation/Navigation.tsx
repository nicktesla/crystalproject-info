import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as PAGES from "../../pages";

/*
  Add new routes here!
*/

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PAGES.HomePage} />
      <Route path="*" component={PAGES.NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
