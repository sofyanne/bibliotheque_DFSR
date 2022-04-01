const listEquipes = document.querySelector(".list-equipes");

fetch("http://localhost:8080/equipes")
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("Erreur lors de la récupération des équipes");
    }
    return res.json();
  })
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });
