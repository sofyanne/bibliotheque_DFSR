"use strict";

const express = require("express");
const server = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nodejsf1:eDTQxFMxu7kOnWak@cluster0.mypts.mongodb.net/nodejsf1project?retryWrites=true&w=majority"
  ) // Ici si la connection ne s'etablie pas je capture l'erreur avec catch puisque mongoose.connect est une promise.
  .catch((error) => console.log("La connexion à la base de données à échoué"));

const globalRouter = require("./routers/globalRouter");
const equipeRouter = require("./routers/equipeRouter");

const port = 3000;

server.use(express.static("public"));
server.use(morgan("dev")); // Log serveur détaillés.

// Je délègue la gestion des routes à différents routeurs afin de ne pas surcharger mon fichier server par la suite.
server.use("/equipes", equipeRouter);

server.use("/", globalRouter);

// Les routes inconnues finiront ici, je créer une erreur et je la passe à mon prochain middleware avec next();
server.use((req, res, next) => {
  const error = new Error("<h1>La page n'existe pas</h1>");
  error.status = 404;
  next(error);
});

// Configuration du code erreur et transmission de la réponse.
server.use((error, req, res) => {
  res.status(error.status || 500);
  res.end(error.message);
});

server.listen(port, (req, res) => {
  console.log("Serveur bibliothèque lancé");
  console.log(req);
});
