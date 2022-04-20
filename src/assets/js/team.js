import { request, detailsTemplate } from "./utils.js";

const target = document.querySelector(".team");
const id = localStorage.getItem("id");
const equipe = await request(
  `http://localhost:8080/${id}`
);

detailsTemplate("div", target, equipe);

const btnUpdate = document.querySelector(".btn-update");
const submitUpdate = document.querySelector("#update-team");

btnUpdate.addEventListener("click", e => {
  submitUpdate.classList.toggle("hidden");
});

submitUpdate.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  request(`http://localhost:8080/${id}`, {
    method: "PATCH",
    body: formData,
  });
  submitUpdate.classList.toggle("hidden");
  window.location.href = "http://localhost:5500/src/assets/pages/equipe.html";
});