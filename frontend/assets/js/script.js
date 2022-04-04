import { request, template } from "./utils.js";


const listEquipes = document.querySelector(".list-equipes");
const btnNewTeam = document.querySelector("#new-team");

 btnNewTeam.addEventListener("submit", (e) => {
   e.preventDefault();
    const name = document.querySelector("#name").value;
    const car = document.querySelector("#car").value;
    const manager = document.querySelector("#manager").value;

    request("http://localhost:8080/equipes/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name : name,
            car: car,
            manager : manager
        })
    }).catch((error) =>
        console.log(error.message)
    );

 });

request("http://localhost:8080/equipes").then((result) => {
    template("div", listEquipes, result);
  }).catch((error) =>
  console.log(error.message)
);
