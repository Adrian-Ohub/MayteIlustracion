import React from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import HomePage from "./pages/Homepage";
import IlustracionPage from "./pages/Ilustracionpage";
import ContactoPage from "./pages/Contactopage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage></WelcomePage>
        </Route>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route path="/ilustracion">
          <IlustracionPage></IlustracionPage>
        </Route>
        <Route path="/contacto">
          <ContactoPage></ContactoPage>
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
};

export default App;
