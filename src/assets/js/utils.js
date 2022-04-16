export async function request(ressource, options = {}) {
  const response = await fetch(ressource, options);

  if (!response.ok) {
    const message = `Une erreur est survenue : ${response.status}`;
    throw new Error(message);
  }

  const result = await response.json();
  return result;
}

export function cardTemplate(elt, target, data) {
  for (const team of data) {
    const newElt = document.createElement(elt);
    newElt.classList = "card flex-col justify-between bg-white shadow-xl w-60 h-80 px-5 mx-5 my-5";
    newElt.innerHTML = `
    
            <h5 class="text-center font-medium my-5">${team.name}</h5>
           
            <img class="mb-5 mx-auto h-32" src="http://127.0.0.1:8080/${team.image}" alt=${
      team.name
    }/> 
           <div class="flex justify-around items-center my-5">
            <button id=${
              team._id
            } class="bg-blue-400 hover:bg-blue-500 h-10 w-20">Details</button>
            
            <button id=${
              team._id
            } class="btn-delete bg-red-400 hover:bg-red-500 h-10 w-20">Delete</button>
          </div>          
                     `;
    target.append(newElt);
  }
}

export function detailsTemplate(elt, target, data) {
  const newElt = document.createElement(elt);
  newElt.classList =
    "card flex-col justify-between bg-white shadow-xl w-2/3 h-full px-5 mx-auto my-5";
  newElt.innerHTML = `
    
            <h5 class="text-center font-medium my-5">${data.name}</h5>
           
            <img class="mb-5 mx-auto h-32" src="http://127.0.0.1:8080/${
              data.image
            }" alt=${data.name}/>
            <div class="flex h-24 mx-auto justify-around items-center " >
              ${data.drivers.map((driver) => {
                return `<div class="flex-col">
                  <p>${driver.firstname}</p>
                  <p>${driver.lastname}</p>
                </div>`;
              }).join("<br/>")}
            </div>
           <div class="flex justify-around items-center my-5">
            
            <button id=${
              data._id
            } class="btn-update bg-yellow-400 hover:bg-yellow-500 h-10 w-20 mb-10">Update</button>
          </div>          
                     `;
  target.append(newElt);
}
