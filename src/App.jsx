import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import Sectionpage from "./pages/Sectionpage";
import IlustracionPage from "./pages/Ilustracionpage";
import DiseñoPage from "./pages/Diseñopage";
import ContactoPage from "./pages/Contactopage";
import IlustracionCuentoPage from "./pages/Ilustracionpages/IlustracionCuentopage";
import IlustracionLetteringPage from "./pages/Ilustracionpages/IlustracionLetteringpage";
import IlustracionGuerrerasPage from "./pages/Ilustracionpages/IlustracionGuerreraspage";
import DiseñoInvitacionPage from "./pages/Diseñopages/DiseñoInvitacionpage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <WelcomePage></WelcomePage>
          </Route>

          <Route path="/home">
            <Sectionpage category=""></Sectionpage>
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
            <Sectionpage category="Ilustracion"></Sectionpage>
          </Route>

          <Route path="/diseño/invitacion">
            <DiseñoInvitacionPage></DiseñoInvitacionPage>
          </Route>

          <Route path="/diseño">
            <Sectionpage category="Diseño"></Sectionpage>
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
