import React from "react";

import { Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Login/Register";
import useToken from "./useToken";

import history from "./history";

function App({ set }) {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router history={history}>
        <Switch>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
