import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { HOST_URL } from '../constants';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const { username, password } = this.state;

    // Validate the input values
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Send a request to the server to authenticate the user
    fetch(HOST_URL + '/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        if (response.ok) {
          console.log('User is logged in');
          // Redirect the user to the dashboard page
          this.props.onLogin();
        } else {
          // Display an error message
          alert('Invalid username or password');
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while logging in');
      });
  }

  render() {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={this.handleSubmit}> {/* Wrap the content in a form element and add onSubmit event */}
            <TextField
              label='Username'
              placeholder='Enter username'
              variant="outlined"
              fullWidth
              required
              name="username"
              value={this.state.username} // Pass the state value to the input field
              onChange={this.handleInputChange} // Handle input change
            />
            <TextField
              label='Password'
              placeholder='Enter password'
              type='password'
              variant="outlined"
              fullWidth
              required
              name="password"
              value={this.state.password} // Pass the state value to the input field
              onChange={this.handleInputChange} // Handle input change
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          </form>
          <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography > Do you have an account ?
            <Link href="#" >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default LoginPage;