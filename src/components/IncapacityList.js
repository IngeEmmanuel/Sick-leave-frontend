import React from "react";

const IncapacityList = ({ incapacities }) => {
  return (
    <div className="incapacity-list">
      <h2>Incapacidades Registradas</h2>
      {incapacities.length === 0 ? (
        <p>No hay incapacidades registradas.</p>
      ) : (
        <div className="cards-container">
          {incapacities.map((incapacity, index) => (
            <div key={index} className="card">
              <p><b>Fecha de Registro:</b> {incapacity.registerDate}</p>
              <p><b>Fecha de Inicio:</b> {incapacity.startDate}</p>
              <p><b>ID EPS/ARL:</b> {incapacity.epsOrArlId}</p>
              <p><b>Cédula Registrador:</b> {incapacity.registrarId}</p>
              <p><b>ID Incapacidad:</b> {incapacity.incapacityId}</p>
              <p><b>Estado:</b> {incapacity.status}</p>
              <p>
                <b>Documento:</b>{" "}
                <a href={incapacity.link} target="_blank" rel="noopener noreferrer">
                  Ver Documento
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncapacityList;
