export async function request(ressource, options = {}) {
    const response = await fetch(ressource, options);

    if (!response.ok) {
      const message = `Une erreur est survenue : ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    return result;
}


export function template(elt, target, data) {
  for (const team of data) {
    const newElt = document.createElement(elt);
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
    target.append(newElt);
  }
}
