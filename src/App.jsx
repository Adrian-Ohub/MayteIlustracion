import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import HomePage from "./pages/Homepage";
import IlustracionPage from "./pages/Ilustracionpage";
import DiseñoPage from "./pages/Diseñopage";
import ContactoPage from "./pages/Contactopage";
import IlustracionCuentoPage from "./pages/Ilustracionpages/IlustracionCuentopage";
import IlustracionLetteringPage from "./pages/Ilustracionpages/IlustracionLetteringpage";
import IlustracionGuerrerasPage from "./pages/Ilustracionpages/IlustracionGuerreraspage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <WelcomePage></WelcomePage>
          </Route>

          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/ilustracion/cuento">
            <IlustracionCuentoPage></IlustracionCuentoPage>
          </Route>

          <Route path="/ilustracion/lettering">
            <IlustracionLetteringPage></IlustracionLetteringPage>
          </Route>

          <Route path="/ilustracion/guerreras">
            <IlustracionGuerrerasPage></IlustracionGuerrerasPage>
          </Route>

          <Route path="/ilustracion">
            <IlustracionPage></IlustracionPage>
          </Route>

          <Route path="/diseño">
            <DiseñoPage></DiseñoPage>
          </Route>

          <Route path="/contacto">
            <ContactoPage></ContactoPage>
          </Route>

          <Route>404</Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
