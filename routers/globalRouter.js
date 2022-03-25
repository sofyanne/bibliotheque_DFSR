const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Ici c'est le global routeur </h1>");
});
module.exports = router;
