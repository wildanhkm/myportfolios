import React from "react";
import PriceInfo from "../pages/PriceInfo";
import BtcToRp from "../pages/BtcToRp";
import RpToBtc from "../pages/RpToBtc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PriceInfo />
        </Route>
        <Route exact path="/rptobtc">
          <BtcToRp />
        </Route>
        <Route exact path="/btctorp">
          <RpToBtc />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
