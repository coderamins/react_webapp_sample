import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Tab from 'material-ui/Tabs/Tab';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Home, Book, AccountBox, DomainDisabled } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import Contactus from "./Contactus";

function NavBar(props) {
    
  return (
      <List component="nav" style={{ marginRight: 100 }}>
        <ListItem component="div">
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              <Link to="/"> صفحه نخست</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              <Link to="/about"> درباره ما</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
               <Link to="/contact">ارتباط با ما</Link>
              <Tab label='Most popular ideas' Link to='/contact' component={Contactus} />
            </TypoGraphy>
          </ListItemText>
        </ListItem>

      </List>
  );
}

export default NavBar;
