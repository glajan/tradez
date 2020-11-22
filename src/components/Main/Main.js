import React from "react";
import { Switch, Route } from "react-router-dom";
import Charts from "../Charts/Charts";

const Main = (p) => {
  return (
    <div className="Main">
      <Switch>
        <Route path="/charts">
          <Charts hubConnection={p.hubConnection} />
        </Route>
        <Route path="/settings">
          <div>Settings</div>
        </Route>
        <Route path="/">
          <div>Landing page</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
