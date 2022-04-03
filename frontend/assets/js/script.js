import { request, template } from "./utils.js";


const listEquipes = document.querySelector(".list-equipes");
const btnNewTeam = document.querySelector("#new-team");

btnNewTeam.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

request("http://localhost:8080/equipes").then((result) => {
    template("div", listEquipes, result);
  }).catch((error) =>
  console.log(error.message)
);
