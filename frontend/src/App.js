
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmptyAdmin from './components/empty_admin';
import EmptyTeacher from './components/empty_teacher';
import EmptyStudent from './components/empty_student';
import LoginPage from './components/login_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      role: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password) {
    // TODO: validate username and password
    // For now, just set loggedIn to true if username is not empty
    if (username !== '') {
      this.setState({
        loggedIn: true,
        role: 'admin' // TODO: determine role based on username and password
      });
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return <LoginPage onLogin={this.handleLogin} />;
    }

    if (this.state.role === 'admin') {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://github.com/caseyr003/flask-react-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github
            </a>
            <EmptyAdmin />
          </header>
        </div>
      );
    } else if (this.state.role === 'student') {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://github.com/caseyr003/flask-react-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github
            </a>
            <EmptyStudent />
          </header>
        </div>
      );
    } else {
      // TODO: handle other roles
      return null;
    }
  }
}

export default App;

