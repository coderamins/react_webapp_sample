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
                  <h3>this is my panel 1 infooter</h3>
                </Cell>
                <Cell col={3} tablet={3}>
                  <h3>this is my panel 1 infooter</h3>
                </Cell>
                <Cell col={3} tablet={3}>
                  <h3>this is my panel 1 infooter</h3>
                </Cell>
                <Cell col={3} tablet={3}>
                  <h3>this is my panel 1 infooter</h3>
                </Cell>
              </Grid>
            </div>
          </div>
        </footer>
        <footer class="bottom-footer" >

        </footer>
      </div>
    );
  }
}

export default Footer;
