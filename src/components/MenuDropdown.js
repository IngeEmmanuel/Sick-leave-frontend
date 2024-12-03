import React, { useState } from "react";
import LoginForm from "./LoginForm";
import AdminPage from "../pages/AdminPage";

const MenuDropdown = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setSelectedRole(role);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <h1>Selecciona tu Rol</h1>
          <select
            onChange={(e) => setSelectedRole(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              -- Seleccionar --
            </option>
            <option value="Administrador">Administrador</option>
            <option value="Auxiliar">Auxiliar</option>
            <option value="Colaborador">Colaborador</option>
            <option value="Recepcion">Recepción</option>
          </select>

          {selectedRole && <LoginForm role={selectedRole} onLogin={handleLogin} />}
        </>
      ) : (
        selectedRole === "Administrador" && <AdminPage />
      )}
    </div>
  );
};

export default MenuDropdown;
