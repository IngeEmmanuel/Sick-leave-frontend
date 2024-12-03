import React, { useState } from "react";

const IncapacityForm = ({ onAddIncapacity }) => {
  const [newIncapacity, setNewIncapacity] = useState({
    registerDate: new Date().toLocaleDateString(),
    startDate: "",
    epsOrArlId: "",
    registrarId: "",
    incapacityId: "",
    status: "No gestionada",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncapacity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncapacity(newIncapacity);
    setNewIncapacity({
      registerDate: new Date().toLocaleDateString(),
      startDate: "",
      epsOrArlId: "",
      registrarId: "",
      incapacityId: "",
      status: "No gestionada",
      link: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="incapacity-form">
      <h2>Registrar Incapacidad</h2>
      <label>
        Fecha de Registro: <b>{newIncapacity.registerDate}</b>
      </label>
      <label>
        Fecha de Inicio:
        <input
          type="date"
          name="startDate"
          value={newIncapacity.startDate}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        ID EPS/ARL:
        <input
          type="text"
          name="epsOrArlId"
          value={newIncapacity.epsOrArlId}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Cédula de Quien Registra:
        <input
          type="text"
          name="registrarId"
          value={newIncapacity.registrarId}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        ID de Incapacidad:
        <input
          type="text"
          name="incapacityId"
          value={newIncapacity.incapacityId}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Link de la Incapacidad:
        <input
          type="url"
          name="link"
          value={newIncapacity.link}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default IncapacityForm;
