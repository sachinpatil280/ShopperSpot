import React, { useRef } from "react";
import PropTypes from "prop-types";
// import history from "../../history";

import "./Login.css";
import { useHistory } from "react-router-dom";

async function loginUser(credentials) {
	return fetch("http://localhost:3000/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

const Login = ({ setToken }) => {
	const history = useHistory();
	console.log(history);
	const nameInputRef = useRef();
	const pwdInputRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const username = nameInputRef.current.value;
		const password = pwdInputRef.current.value;

		if (username.trim().length === 0 || password.trim().length === 0) {
			return;
		}

		const token = await loginUser({
			username,
			password,
		});
		setToken(token);
	};

	return (
		<div className="login-wrapper">
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Username</p>
					<input type="text" id="username" ref={nameInputRef}></input>
				</label>
				<label>
					<p>Password</p>
					<input type="password" id="password" ref={pwdInputRef}></input>
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			<div>
				<button
					onClick={() => {
						history.push("/register");
					}}
				>
					Register
				</button>
			</div>
		</div>
	);
};

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};

export default Login;
