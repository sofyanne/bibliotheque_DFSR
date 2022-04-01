const listEquipes = document.querySelector(".list-equipes");
const btnNewTeam = document.querySelector("#new-team");

btnNewTeam.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
});

fetch("http://localhost:8080/equipes")
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("Erreur lors de la récupération des équipes");
    }
    return res.json();
  })
  .then((result) => {
    for (const team of result) {
      const newElt = document.createElement("div");
      newElt.innerHTML = `
        <div>
            <h5>${team.name}</h5>
            <p>Voiture : ${team.car}</p>
            <p>Manager : ${team.manager}</p>
            ${team.drivers
              .map((driver, idx) => {
                return (
                  "<p>Pilote " +
                  (idx + 1) +
                  " : " +
                  driver.firstname +
                  " " +
                  driver.lastname +
                  "</p>"
                );
              })
              .join("")}
        </div>`;
      listEquipes.append(newElt);
    }
  })
  .catch((error) => {
    console.log(error);
  });
