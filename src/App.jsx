import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import MovieForm from './components/movieForm'
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main role="main" className="container">
        <Switch>
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/movies/:id' exact component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
