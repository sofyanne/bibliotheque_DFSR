const express = require("express");
const twig = require("twig");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("accueil.html.twig");
});
module.exports = router;
