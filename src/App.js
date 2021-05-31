import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import './App.css';
import Main from "./Main/Pages/Main";
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import Footer from "./shared/Components/Footer"
import Login from './Login/Pages/Login';
import Signup from './Login/Pages/Signup';
import Payment from './Payment/Pages/Payment';
import Contact from './Contact/Pages/Contact';
import Order from './Order/Pages/Order';
import Menu from "./Menu/Pages/Menu";
import Profile from "./Profile/Pages/Profile"
import Cart from "./Cart/Pages/Cart";
import About from "./About/about";
import OrderTrack from './Track/OrderTrack';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact component={Main} /> 
          <Route path='/login' component={Login} /> 
          <Route path='/signup' component={Signup} /> 
          <Route path='/order' component={Order} /> 
          <Route path='/cart' component={Cart} /> 
          <Route path='/menu' component={Menu} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About}/>
          <Route path='/payment' component={Payment} /> 
          <Route path='/contact' component={Contact} /> 
          <Route path='/orderTrack' component={OrderTrack}/>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
    </CartContextProvider>
  );
}

export default App;
