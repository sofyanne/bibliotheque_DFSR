// "use strict";

const express = require("express");
const server = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const globalRouter = require("./routers/globalRouter");
const equipeRouter = require("./routers/equipeRouter");

const port = 8080;

server.use(express.json());
server.use("/public", express.static("public"));
server.use(morgan("dev")); // Log serveur détaillés.

// Ici j'autorise d'autres domaines à requeter avec différentes méthodes, ainsi qu'à paramétrer les headers.  
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next(); // Je demande à express de passer au middleware suivant.
});

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

mongoose
  .connect(
    "mongodb+srv://test:T0KtOSSQz5NQiauU@cluster0.mypts.mongodb.net/nodejsf1project?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(port);
    console.log("Connexion à la bdd réussie");
  }) // Ici si la connection ne s'etablie pas je capture l'erreur avec catch puisque mongoose.connect est une promise.
  .catch((error) =>
    console.log("La connexion à la base de données à échoué" + error)
  );
