import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Basket from './components/Basket.js'
import Checkout from './components/Checkout.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/basket' component={Basket} />
      <Route path='/checkout' component={Checkout} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
