import React, { useState } from "react";
import IncapacityForm from "../components/IncapacityForm";
import IncapacityList from "../components/IncapacityList";
import "./IncapacityPage.css";

const IncapacityPage = () => {
  const [view, setView] = useState("list"); // "list" o "form"
  const [incapacities, setIncapacities] = useState([]);

  const handleAddIncapacity = (newIncapacity) => {
    setIncapacities([...incapacities, newIncapacity]);
    setView("list");
  };

  return (
    <div className="container">
      <h1>Gestión de Incapacidades</h1>
      <div className="buttons-container">
        <button onClick={() => setView("form")}>Registrar Incapacidad</button>
        <button onClick={() => setView("list")}>Ver Incapacidades</button>
      </div>
      {view === "form" ? (
        <IncapacityForm onAddIncapacity={handleAddIncapacity} />
      ) : (
        <IncapacityList incapacities={incapacities} />
      )}
    </div>
  );
};

export default IncapacityPage;
