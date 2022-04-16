import { request, template } from "./utils.js";

const listEquipes = document.querySelector(".list-equipes");
const addTeamForm = document.querySelector("#add-team-btn");
const btnNewTeam = document.querySelector("#new-team");

addTeamForm.addEventListener("click", (e) => {
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
    .then((result) => {
      addTeamForm.classList.toggle("hidden");
      window.location.href = "http://localhost:5500/src/index.html";
    })
    .catch((error) => console.log(error.message));
});

const equipes = await request("http://localhost:8080/equipes");
template("div", listEquipes, equipes);



listEquipes.addEventListener("click", (e) => {
  if (e.target.innerText === "Delete") {
    request(`http://localhost:8080/equipes/${e.target.id}`, {
      method: "DELETE",
    });
     window.location.href = "http://localhost:5500/src/index.html";
  }

  if (e.target.innerText === "Details") {
    console.dir(e.target.innerText);
  }
});
