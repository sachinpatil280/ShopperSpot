import React from "react";


const Register = () => {
  return (
    <form>
      <div>
        <label>
          <p>Your Name</p>
          <input type="text" id="name"></input>
        </label>
        <label>
          <p>Mobile Number</p>
          <input type="number" id="mob_number"></input>
        </label>
        <label>
          <p>Email ID</p>
          <input type="email" id="email"></input>
        </label>
        <label>
          <p>Password</p>
          <input type="password" id="password"></input>
        </label>
      </div>
      <div>
        <button type="submit" id="register_btn">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
