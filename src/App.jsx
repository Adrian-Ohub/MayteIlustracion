import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import Sectionpage from "./pages/Sectionpage";
import ContactoPage from "./pages/Contactopage";
import SubsectionPage from "./pages/Subsectionpage";

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
            <SubsectionPage
              category="ilustracion"
              proyect="cuento"
            ></SubsectionPage>
          </Route>

          <Route path="/ilustracion/lettering">
            <SubsectionPage
              category="ilustracion"
              proyect="lettering"
            ></SubsectionPage>
          </Route>

          <Route path="/ilustracion/guerreras">
            <SubsectionPage
              category="ilustracion"
              proyect="guerreras"
            ></SubsectionPage>
          </Route>

          <Route path="/ilustracion">
            <Sectionpage category="ilustracion"></Sectionpage>
          </Route>

          <Route path="/diseño/invitacion">
            <SubsectionPage
              category="diseño"
              proyect="invitacion"
            ></SubsectionPage>
          </Route>

          <Route path="/diseño">
            <Sectionpage category="diseño"></Sectionpage>
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
