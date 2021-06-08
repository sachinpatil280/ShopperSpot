import React from "react";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import HomePage from "../components/HomePage/HomePage";
import Register from "../components/Login/Register";
// import useToken from "./useToken";
// import history from "./history";

const AppRouter = (props) => {
	return (
		<Router>
			{/* <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	);
};

export default AppRouter;
