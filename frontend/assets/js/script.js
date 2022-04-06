import { request, template } from "./utils.js";

const listEquipes = document.querySelector(".list-equipes");
const btnNewTeam = document.querySelector("#new-team");

btnNewTeam.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", formData.name);
  formData.append("car", formData.car);
  formData.append("image", formData.image);

  fetch("http://localhost:8080/equipes/create", {
    method: "POST",
    body: formData,
  }).catch((error) => console.log(error.message));

  
});

request("http://localhost:8080/equipes")
  .then((result) => {
    template("div", listEquipes, result);
  })
  .catch((error) => console.log(error.message));
