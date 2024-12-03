import React, { useState } from "react";
import axios from "axios";

const TreasurerPage = () => {
  const [searchId, setSearchId] = useState("");
  const [history, setHistory] = useState(null);
  const [status, setStatus] = useState("");

  // Manejar la búsqueda de una historia por ID
  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/historias");
      const historias = response.data;

      const foundHistory = historias.find((h) => h.id.toString() === searchId);
      if (foundHistory) {
        setHistory(foundHistory);
        setStatus(foundHistory.status);
      } else {
        alert("No se encontró una historia con ese ID.");
      }
    } catch (error) {
      console.error("Error al buscar la historia:", error);
      alert("Hubo un error al buscar la historia.");
    }
  };

  // Manejar la modificación y guardado del estado
  const handleSave = async () => {
    if (!history) return;

    const updatedHistory = { ...history, status };
    try {
      const response = await axios.put(
        `http://localhost:5000/historias/${history.id}`,
        updatedHistory
      );
      if (response.status === 200) {
        alert("Estado actualizado exitosamente.");
        setHistory(updatedHistory); // Actualiza la historia en el estado local
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Hubo un error al guardar los cambios.");
    }
  };

  return (
    <div className="treasurer-page">
      <h1>Gestión de Incapacidades</h1>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Ingrese el ID de la historia"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {/* Detalles de la historia */}
      {history && (
        <div className="history-details">
          <h2>Detalles de la Historia</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha Inicio</th>
                <th>ID EPS/ARL</th>
                <th>Cédula Registrador</th>
                <th>Enlace</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{history.id}</td>
                <td>{history.startDate}</td>
                <td>{history.epsOrArlId}</td>
                <td>{history.registrarId}</td>
                <td>
                  <a href={history.link} target="_blank" rel="noopener noreferrer">
                    Ver Documento
                  </a>
                </td>
                <td>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Gestionada">Gestionada</option>
                    <option value="No gestionada">No gestionada</option>
                    <option value="Pendiente de cobro">Pendiente de cobro</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleSave}>Guardar Cambios</button>
        </div>
      )}
    </div>
  );
};

export default TreasurerPage;
