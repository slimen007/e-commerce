import React from "react";

export default function Login(props) {
  const { loginfn, password, email, setPassword, setEmail } = props;
  return (
    <div className="loginContainer">
      <h3>Login</h3>
      <label>Email :</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <label>Password :</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={loginfn}>Login</button>
    </div>
  );
}
