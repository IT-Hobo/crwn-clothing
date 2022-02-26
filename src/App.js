import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import ContactPage from './pages/contact/contactPage';
import './App.css';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
