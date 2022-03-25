"use strict";

const express = require("express");
const server = express();
const morgan = require("morgan");

const globalRouter = require("./routers/globalRouter");

const port = 3000;

server.use(express.static("public"));
server.use(morgan("dev")); // Log serveur détaillés.

// Je délègue la gestion de ces routes démarrant par "/" à un global routeur afin de ne pas surcharger mon fichier server par la suite.
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

const distDir = "../src/";