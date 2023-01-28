import config from "../conf/index.js";

async function init() {
  // console.log("From init()")
  // console.log(config.backendEndpoint`/cities`)
  //Fetches list of all cities along with their images and description
  
  let cities = await fetchCities();
  console.log(cities)
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  // const url = "http://3.109.29.235:8082/cities"
  // let cities = await fetch(url)
  // let CitiesData = await cities.json()
 
  // return CitiesData;

  try {
    const res = await fetch(`${config.backendEndpoint}/cities`);
    const data = await res.json();
    //  console.log(data);
    return data;
  } catch {
    return null;
  }

}
//console.log(fetchCities())
//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  //Working Model
  // let container = document.createElement("div")
  // container.className = "col-6"
  // let innerHTML = `<p>${city}</p> <p><img src="${image}" class="img-response"></P> `
  // container.innerHTML = innerHTML
  // document.getElementById("data").appendChild(container)
   //Working Model

  //  let firstDiv = document.createElement("div")
  //  firstDiv.className = "col-12 col-sm-6 col-lg-3 mb-4"
  //  let secondDiv = document.createElement("div")
  //  secondDiv.className = "tile"
  //  firstDiv.innerHTML = secondDiv
        //let pic = <img src="${image}" class="img-response"></img>
  //  let thirdDiv = document.createElement("div")
  //  thirdDiv.className = "tile-text text-center"
  //  secondDiv.innerHTML = thirdDiv
  //  let innerHTML = `<h5>${city}</h5><p>${description}</p> `
  // let innerHTML = `<div  class="tile"><img src="${image}" ><div className = "tile-text text-center" ><h5>${city}</h5><p>${description}</p></div></div>`
  //  document.getElementById("data").appendChild(firstDiv)

   let divElement = document.createElement("div");
  divElement.id= id;
  divElement.className="col-sm-6 col-lg-3 mb-4";
  divElement.innerHTML = `
      <a href="pages/adventures/?city=${id}">
        <div class="tile">
          <img src="${image}" />
          <div class="tile-text text-center">
            <h5>${city}</h5>
            <p>${description}</p>
          </div>
        </div></a
      >
    </div>`

        document.getElementById("data").append(divElement);
}

export { init, fetchCities, addCityToDOM };
