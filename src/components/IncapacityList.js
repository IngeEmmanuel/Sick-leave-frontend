import React, { useEffect, useState } from "react";
import axios from "axios";

const IncapacityList = () => {
  const [incapacities, setIncapacities] = useState([]);

  useEffect(() => {
    const fetchIncapacities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/historias");
        setIncapacities(response.data);
      } catch (error) {
        console.error("Error al cargar las incapacidades:", error);
      }
    };

    fetchIncapacities();
  }, []);

  return (
    <div className="incapacity-list">
      <h2>Incapacidades Registradas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha de Registro</th>
            <th>Fecha de Inicio</th>
            <th>ID EPS/ARL</th>
            <th>Cédula Registrador</th>
            <th>Estado</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          {incapacities.map((incapacity) => (
            <tr key={incapacity.id}>
              <td>{incapacity.id}</td>
              <td>{incapacity.fechaRegistro}</td>
              <td>{incapacity.startDate}</td>
              <td>{incapacity.epsOrArlId}</td>
              <td>{incapacity.registrarId}</td>
              <td>{incapacity.status}</td>
              <td>
                <a href={incapacity.link} target="_blank" rel="noopener noreferrer">
                  Ver Documento
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncapacityList;
