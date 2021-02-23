import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";


//Private
function _draw() {
  let planets = ProxyState.planets;
  let template = ''
  planets.forEach(v => template += v.Template)
  document.getElementById("inj-planets").innerHTML = /*html*/`
  <div className="card-columns planets">
      ${template}
  </div>
  <button class="btn btn-primary" onclick="app.planetsController.previous()">Previous</button>
  <button class="btn btn-primary" onclick="app.planetsController.next()">Next</button>
  `
}

//Public
export default class CharactersController {
  constructor() {
    ProxyState.on("planets", _draw);
    _draw()
  }

  next() {
    planetsService.next()
  }

  previous() {
    planetsService.previous()
  }

}