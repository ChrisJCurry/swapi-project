import { ProxyState } from "../AppState.js";
import { starshipsService } from "../Services/StarshipsService.js";


//Private
function _draw() {
  let starships = ProxyState.starships;
  let template = ''
  starships.forEach(v => template += v.Template)
  document.getElementById("inj-starships").innerHTML = /*html*/`
  <div className="card-columns starships">
      ${template}
  </div>
  <button class="btn btn-primary" onclick="app.starshipsController.previous()">Previous</button>
  <button class="btn btn-primary" onclick="app.starshipsController.next()">Next</button>
  `
}

//Public
export default class StarshipsController {
  constructor() {
    ProxyState.on("starships", _draw);
    _draw()
  }

  next() {
    starshipsService.next()
  }

  previous() {
      starshipsService.previous()
  }

}