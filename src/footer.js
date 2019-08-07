import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardTitle
} from "react-mdl";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="top-footer font-small teal pt-4">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <Grid className="demo-grid-3">
                <Cell col={3} tablet={3}>
                  <ul class="footer-menu">
                      <li><a href="/">آخرین دوره ها</a></li>
                      <li><a href="/">مدرسین کافه کد</a></li>
                      <li><a href="/">تماس با ما</a></li>
                      <li><a href="/">درباره ما</a></li>
                  </ul>
                </Cell>
                <Cell col={3} tablet={3}>
                  <a href="/" >همکاری با کافه کد</a>
                </Cell>
                <Cell col={3} tablet={3}>
                </Cell>
                <Cell col={3} tablet={3}>
                </Cell>
              </Grid>
            </div>
          </div>
        </footer>
        <footer class="bottom-footer" >
                تمامی حقوق ان سایت محفوظ و مربوط به لرن لند می باشد و هرگونه کپی برداری و انتشار غیر مجاز پیگرد قانونی دارد .
        </footer>
      </div>
    );
  }
}

export default Footer;
