const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const filePath = path.join(__dirname, "historias.txt");

// Crear archivo si no existe
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "", "utf8");
}

// Obtener todas las historias
app.get("/historias", (req, res) => {
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }
  
    const data = fs.readFileSync(filePath, "utf8");
    const historias = data
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
  
    res.json(historias);
  });
  

// Agregar una nueva historia
app.post("/historias", (req, res) => {
  const nuevaHistoria = req.body;

  // Leer las historias existentes para verificar IDs
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error al leer el archivo." });

    const historias = data
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => JSON.parse(line));

    const idsExistentes = historias.map((h) => h.id);
    let nuevoId = 1;

    // Buscar un ID único
    while (idsExistentes.includes(nuevoId)) {
      nuevoId++;
    }

    nuevaHistoria.id = nuevoId;
    nuevaHistoria.fechaRegistro = new Date().toLocaleDateString();

    // Guardar la nueva historia
    fs.appendFile(filePath, JSON.stringify(nuevaHistoria) + "\n", (err) => {
      if (err) return res.status(500).json({ message: "Error al escribir en el archivo." });
      res.status(201).json(nuevaHistoria);
    });
  });
});

app.put("/historias/:id", (req, res) => {
    const { id } = req.params;
    const updatedHistory = req.body;
  
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Archivo de historias no encontrado.");
    }
  
    const data = fs.readFileSync(filePath, "utf8");
    const historias = data
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
  
    const index = historias.findIndex((h) => h.id.toString() === id);
    if (index === -1) {
      return res.status(404).send("Historia no encontrada.");
    }
  
    historias[index] = updatedHistory;
  
    fs.writeFileSync(
      filePath,
      historias.map((h) => JSON.stringify(h)).join("\n"),
      "utf8"
    );
  
    res.status(200).send("Historia actualizada.");
  });
  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
