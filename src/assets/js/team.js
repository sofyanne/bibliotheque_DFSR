import { request, detailsTemplate } from "./utils.js";

const target = document.querySelector(".team");
const id = localStorage.getItem("id")
const equipe = await request(
  `http://localhost:8080/equipes/${id}`
);

detailsTemplate("div", target, equipe);