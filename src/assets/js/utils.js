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
    newElt.classList = "flex-col justify-between bg-white shadow-xl w-60 h-96 px-5 mx-5 my-5";
    newElt.innerHTML = `
    
            <h5 class="text-center font-medium my-5">${team.name}</h5>
           
            <img class="mb-5" src="http://127.0.0.1:8080/${team.image}" alt=${
      team.name
    }>      
          <div class="flex-col justify-end items-center">
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
          </div>
           <div class="flex justify-around items-center my-5">
            <button class="bg-yellow-400 hover:bg-yellow-500 h-10 w-20">Update</button>
            <button class="bg-red-400 hover:bg-red-500 h-10 w-20">Delete</button>
          </div>
            
       
     `;
    target.append(newElt);
  }
}
