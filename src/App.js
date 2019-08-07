import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Posts from "./posts";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Layout, Header, Navigation,  Drawer, Content} from 'react-mdl';
import { ThemeProvider } from '@material-ui/styles';

import About from "./About";
import Contactus from "./Contactus";
import Main from './components/main';
import logo from './';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content" dir="rtl">
        <Layout >
          <Header title={<span><span style={{ color: '#ddd' }}><img src="https://st2.depositphotos.com/8301258/11872/v/950/depositphotos_118727328-stock-illustration-coffee-logo-icon-vector.jpg" style={{width:40}} /> </span><strong>کافه کد</strong></span>} scroll img="">            
            <Navigation dir="rtl">
              <a href="/about">درباره ما</a>
              <a href="/contact">ارتباط با ما</a>
              <a href="/tutorials">دوره ها</a>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />

            <Footer />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
