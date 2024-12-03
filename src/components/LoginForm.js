import React, { useState } from "react";

const LoginForm = ({ role, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular validación de credenciales
    if (role === "Administrador" && username === "admin@admin.com" && password === "1234") {
      onLogin(role);
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión como {role}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
