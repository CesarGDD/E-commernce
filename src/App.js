import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('');

function App() {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/orders'>
            <Header />
              <Orders />
            </Route>
            <Route path='/checkout' >
            <Header />
              <Checkout />
            </Route>
            <Route path='/payment' >
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
            </Route>
            <Route path='/'>
            <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

//pk_test_51HgqIpIal7iahGw39TtY9LYWSE51EgZvZWZLmeWat6NkeeZZ5ITIEUaWt3HbGF8YLncAzk67RqtJNKADyPO1J1tE00bWFYsNn6