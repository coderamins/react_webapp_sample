import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// import MuiThemeProvider and createMuiTheme to create custom theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

// create custom theme configuration
const theme = createMuiTheme({
  direction: 'rtl'
});

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}