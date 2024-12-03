import React, { useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setFormData({}); // Reinicia el formulario al cambiar el rol
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      role: selectedRole,
      createdAt: selectedRole !== "Abogados" && selectedRole !== "Recursos Humanos" ? new Date().toLocaleDateString() : undefined,
    };
    setUsers([...users, newUser]);
    setFormData({});
    setSelectedRole("");
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, userIndex) => userIndex !== index);
    setUsers(updatedUsers);
  };

  const renderFormFields = () => {
    switch (selectedRole) {
      case "Colaborador":
        return (
          <>
            <label>
              Cédula Colaborador:
              <input type="text" name="cedulaColaborador" value={formData.cedulaColaborador || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Cédula Administrador:
              <input type="text" name="cedulaAdministrador" value={formData.cedulaAdministrador || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Primer Nombre:
              <input type="text" name="primerNombre" value={formData.primerNombre || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Nombre:
              <input type="text" name="segundoNombre" value={formData.segundoNombre || ""} onChange={handleInputChange} />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" value={formData.primerApellido || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" value={formData.segundoApellido || ""} onChange={handleInputChange} />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Contraseña:
              <input type="password" name="contraseña" value={formData.contraseña || ""} onChange={handleInputChange} required />
            </label>
          </>
        );
      case "Tesorero":
        return (
          <>
            <label>
              Cédula Tesorero:
              <input type="text" name="cedulaTesorero" value={formData.cedulaTesorero || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Cédula Administrador:
              <input type="text" name="cedulaAdministrador" value={formData.cedulaAdministrador || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Primer Nombre:
              <input type="text" name="primerNombre" value={formData.primerNombre || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Nombre:
              <input type="text" name="segundoNombre" value={formData.segundoNombre || ""} onChange={handleInputChange} />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" value={formData.primerApellido || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" value={formData.segundoApellido || ""} onChange={handleInputChange} />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Contraseña:
              <input type="password" name="contraseña" value={formData.contraseña || ""} onChange={handleInputChange} required />
            </label>
          </>
        );
      case "Abogados":
        return (
          <>
            <label>
              Cédula:
              <input type="text" name="cedula" value={formData.cedula || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Primer Nombre:
              <input type="text" name="primerNombre" value={formData.primerNombre || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Nombre:
              <input type="text" name="segundoNombre" value={formData.segundoNombre || ""} onChange={handleInputChange} />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" value={formData.primerApellido || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" value={formData.segundoApellido || ""} onChange={handleInputChange} />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Contraseña:
              <input type="password" name="contraseña" value={formData.contraseña || ""} onChange={handleInputChange} required />
            </label>
          </>
        );
      case "Recursos Humanos":
        return (
          <>
            <label>
              Cédula:
              <input type="text" name="cedula" value={formData.cedula || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Primer Nombre:
              <input type="text" name="primerNombre" value={formData.primerNombre || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Nombre:
              <input type="text" name="segundoNombre" value={formData.segundoNombre || ""} onChange={handleInputChange} />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" value={formData.primerApellido || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" value={formData.segundoApellido || ""} onChange={handleInputChange} />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo || ""} onChange={handleInputChange} required />
            </label>
            <label>
              Contraseña:
              <input type="password" name="contraseña" value={formData.contraseña || ""} onChange={handleInputChange} required />
            </label>
          </>
        );
      default:
        return <p>Por favor, selecciona un rol para continuar.</p>;
    }
  };

  return (
    <div className="container">
      <h1>Panel de Administración</h1>
      <label>
        Selecciona un rol:
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="" disabled>-- Seleccionar --</option>
          <option value="Colaborador">Colaborador</option>
          <option value="Tesorero">Tesorero</option>
          <option value="Abogados">Abogados</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
        </select>
      </label>
      {selectedRole && (
        <form onSubmit={handleAddUser} className="login-container">
          {renderFormFields()}
          <button type="submit">Agregar Usuario</button>
        </form>
      )}
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <span>
              {user.primerNombre} {user.primerApellido} - {user.role}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDeleteUser(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
