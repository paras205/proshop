import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginPage from "./screens/Login";
import RegisterPage from "./screens/Register";
import ProfilePage from "./screens/Profile";

import HomePage from "./screens/Home";
import ProductPage from "./screens/Product";
import CartPage from "./screens/Cart";
import CheckoutPage from "./screens/Checkout";
import PaymentPage from "./screens/Payment";
import PlaceOrderPage from "./screens/PlaceOrder";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/shipping" component={CheckoutPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
