import React from "react";

import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
	withRouter,
} from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Login/Register";
import useToken from "./useToken";

import AppRouter from "./Pages/Router";

function App({ set }) {
	// const { token, setToken } = useToken();
	// const history = useHistory();

	// if (!token) {
	// 	history.push("/login");
	// 	console.log("token not available");
	// 	return <Login setToken={setToken} />;
	// }

	return (
		<div className="wrapper">
			<h1>Application</h1>
			<AppRouter></AppRouter>
		</div>
	);
}

export default App;
