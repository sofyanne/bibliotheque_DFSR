import { request } from "./utils.js";


const equipe = await request(
  `http://localhost:8080/equipes/623dc4b5c4ae8b325debf693`
);

console.log(equipe);