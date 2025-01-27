/*
  The app component of the app, wraps everything in router
  Provide layout
*/

// react
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import { CssBaseline } from "@material-ui/core";
import useStyles from "./Style";
import Header from "./Header";
// import './App.css'
//Routes
import * as Routes from "../Routes/Routes";

const App = (props) => {
  // used to determine what to display in app bar
  const { isAuthenticated, signOut, userDetails } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* get global css settings (enhancement) */}
      <CssBaseline />
      <Header
        userDetails={userDetails}
        signOut={signOut}
        classes={classes}
        isAuthenticated={isAuthenticated}
      />

      {/* provide layout for the main contents */}
      <div className={classes.layout}>
        {/* offset the height of app bar */}
        <div className={classes.offset} />
        <div className={classes.contentRoot}>
          <Switch>
            <Route exact path="/" component={Routes.Home} />
            <Route path="/search" component={Routes.Results} />

            <Route path="/map" component={Routes.Map} />

            <Route path="/category" component={Routes.Category} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default App;
