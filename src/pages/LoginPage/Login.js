import React, { useState, Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserAction } from "../actions/authenticationActions";
import { setCookie } from "../utils/cookies";
import { loginUser } from "../../store/actions/auth";

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/styles";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidMount() {
    document.title = "React Login";
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty("response")) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        setCookie("token", this.props.response.login.response.token, 1);
      }
    }

    return (
      <Container component="main" maxWidth="xs" dir="rtl">
        <CssBaseline />
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <div dir="rtl">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ورود به صفحه کاربری
              </Typography>
              <form noValidate onSubmit={LoginPage.onHandleLogin}>
                {!isSuccess ? (
                  <div>{message}</div>
                ) : (
                  <Redirect to="dashboard" />
                )}
                <TextField
                  dir="rtl"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="کلمه عبور"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="منو بخاطر بسپار"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  ورود
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      کلمه عبور را فراموش کردید؟
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"حساب کاربری ندارید ؟ عضو شوید"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(LoginPage);
