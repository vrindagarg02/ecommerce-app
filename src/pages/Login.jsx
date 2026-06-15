import { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div id="login-page">
      <div className="login-card">
        <h1 className="brand">🛍 StyleCart</h1>
        <p className="tagline">Welcome to your fashion world</p>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button id="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;