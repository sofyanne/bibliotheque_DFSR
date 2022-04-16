const express = require("express");
const equipeController = require("../controllers/equipe");


const equipeRouter = express.Router();

equipeRouter.post("/create", equipeController.postTeam);
equipeRouter.delete("/:id", equipeController.deleteTeam);

equipeRouter.get("/:id", equipeController.getTeam);


equipeRouter.get("/", equipeController.getTeams);


module.exports = equipeRouter;
