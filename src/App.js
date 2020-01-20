import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" />
			</Switch>
		</div>
	);
};

export default App;
