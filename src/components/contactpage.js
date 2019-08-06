import React, { Component } from "react";
import { Switch } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

import {
  Map,
  GoogleApiWrapper,
  GoogleMapReact,
  AnyReactComponent,
  Marker
} from "google-maps-react";
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

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    const useStyles = makeStyles(theme => ({
        container: {
          display: "flex",
          flexWrap: "wrap"
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1)
        },
        dense: {
          marginTop: theme.spacing(2)
        },
        menu: {
          width: 200
        }
      }));


    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: "Cat in the Hat",
      age: "",
      multiline: "Controlled",
      currency: "EUR"
    });

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  }

  render() {
    return (
      <div class="row">
        <Grid className="demo-grid-12">
          <Cell col={12}>
            <form  noValidate autoComplete="off">
              <TextField
                id="outlined-name"
                label="Name"
                margin="normal"
                variant="outlined"
              />
            </form>
          </Cell>
        </Grid>

        <Grid className="demo-grid-12">
          <Cell col={12} />
        </Grid>
      </div>
    );
  }
}

const mapStyles = {
  width: "100%",
  height: "100%"
};

//export default Contact;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAYRnJPpn-95QyfrVJNvaLVlXWkXtO62GI"
})(Contact);
