import { Typography } from "@material-ui/core";
import React from "react";
import WelcomeScreen from "./../components/Welcomescreen";
import { Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <WelcomeScreen>
        <Grid
          container
          direction="column"
          justify="center"
          className="full"
          spacing={1}
        >
          <div className="logo">
            <Typography variant="h3" color="initial">
              MAV
            </Typography>
          </div>
          <div className="highlight" color="inherit">
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid item>
                <Link
                  color="inherit"
                  aria-label="menu"
                  style={{ textDecoration: "none" }}
                  component={RouterLink}
                  to="/home"
                >
                  <Typography variant="h2" color="initial">
                    BIENVENID@
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </WelcomeScreen>
    </div>
  );
};

export default WelcomePage;
