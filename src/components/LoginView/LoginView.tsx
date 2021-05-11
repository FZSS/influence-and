import React, { FunctionComponent } from 'react';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import 'components/LoginView/styles.css';
import { useDispatch } from 'react-redux';
import { updateLoginStatus } from '../../store/login/slice';

const LoginView: FunctionComponent = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(updateLoginStatus(true));
  };

  return (
    <Paper className="login-box">
      <div className="login-box-content">
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item>
            <Face />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Username"
              type="email"
              fullWidth
              autoFocus
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item>
            <Fingerprint />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Password"
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" justify="space-between">
          <Grid item>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              style={{ textTransform: 'none' }}
              variant="text"
              color="primary"
            >
              Forgot password ?
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button variant="outlined" color="primary" onClick={login}>
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

export default LoginView;
