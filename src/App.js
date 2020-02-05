import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import "./App.css";

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
			</Switch>
		</div>
	);
};

export default App;
