import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Page404 from "./pages/404";
//components
import Menu from "./containers/Menu";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
