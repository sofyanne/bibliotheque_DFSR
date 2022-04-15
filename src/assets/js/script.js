import { request, template } from "./utils.js";

const listEquipes = document.querySelector(".list-equipes");
const addTeamForm = document.querySelector("#add-team-btn");
const btnNewTeam = document.querySelector("#new-team");


addTeamForm.addEventListener("click", e => {
  e.preventDefault();
  btnNewTeam.classList.toggle("hidden");
  addTeamForm.classList.toggle("hidden");
});

btnNewTeam.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  fetch("http://localhost:8080/equipes/create", {
    method: "POST",
    body: formData,
  })
    .then((result) =>{addTeamForm.classList.toggle("hidden"); window.location.href ="http://localhost:5500/src/assets/pages/equipes.html"})
    .catch((error) => console.log(error.message));

  
});

request("http://localhost:8080/equipes")
  .then((result) => {
    template("div", listEquipes, result);
  })
  .catch((error) => console.log(error.message));
