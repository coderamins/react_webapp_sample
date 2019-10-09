import React from "react";
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

import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset,ThemeProvider } from "@material-ui/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        www.cafecode.ir
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createMuiTheme({
  direction: "rtl" // Both here and <body dir="rtl">
});

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" dir="rtl">
      <CssBaseline />
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <div className={classes.paper} dir="rtl">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ورود به صفحه کاربری
            </Typography>
            <form className={classes.form} noValidate>
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
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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
          <Box mt={8}>
            <Copyright />
          </Box>
        </ThemeProvider>
      </StylesProvider>
    </Container>
  );
}
