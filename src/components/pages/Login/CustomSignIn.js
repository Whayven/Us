import React from 'react';
import { SignIn } from "aws-amplify-react";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const paper = {
  marginTop: '64px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const avatar = {
  margin: '8px',
  backgroundColor: 'red'
}

const form = {
  width: '100%',
  marginTop: '8px'
}

const submit = {
  margin: '24px 0 16px'
}


export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }


  showComponent() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.handleInputChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={submit}
              onClick={() => super.signIn()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style={{cursor: 'pointer'}} variant="body2" onClick={() => super.changeState("forgotPassword")}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{cursor: 'pointer'}} variant="body2" onClick={() => super.changeState("signUp")}>
                  {"Create Account"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }




}