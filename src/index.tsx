import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateMarvel, Marvels, UpdateMarvel, Login } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/img/marvel-profile.jpg';
import './styles.css';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// Imports From React-Router-Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Marvel Members"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <Link to="/">Marvel Characters Members Area</Link>
        </Navbar.Brand>
      {/* Nav Items to the right */}
      <Nav className="move-nav" activeKey='/'>

        <Nav.Item>
          <Nav.Link>
            <Link to='/'> Home </Link>
          </Nav.Link>
        </Nav.Item>

        {/* Auth Check for Authed User */}
        <AuthCheck fallback={
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login Here</Link>
            </Nav.Link>
          </Nav.Item>
        }>

        <Nav.Item>
          <Nav.Link>
            <Link to='/marvels'> Display Your Characters </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/login">Logout</Link>
          </Nav.Link>
        </Nav.Item>

        </AuthCheck>
        {/*End of Auth Check */}

      </Nav>

      </Navbar>


      <Switch>
        <Route exact path="/">
          <Home title="Marvel Character"/>
        </Route>
        <Route path="/create">
          <CreateMarvel />
        </Route>
        <Route path="/marvels">
          <Marvels />
        </Route>
        <Route path = '/update'>
          <UpdateMarvels />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();