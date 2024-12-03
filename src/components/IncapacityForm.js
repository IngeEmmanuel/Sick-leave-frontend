import React, { useState } from "react";
import axios from "axios";

const IncapacityForm = ({ onAddIncapacity }) => {
  const [newIncapacity, setNewIncapacity] = useState({
    startDate: "",
    epsOrArlId: "",
    registrarId: "",
    link: "",
    status: "No gestionada",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncapacity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/historias", newIncapacity);
      onAddIncapacity(response.data);
      alert("Incapacidad registrada con éxito.");
      setNewIncapacity({
        startDate: "",
        epsOrArlId: "",
        registrarId: "",
        link: "",
        status: "No gestionada",
      });
    } catch (error) {
      console.error("Error al registrar la incapacidad:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="incapacity-form">
      <h2>Registrar Incapacidad</h2>
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
