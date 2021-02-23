import ValuesController from "./Controllers/ValuesController.js";
import CharactersController from "./Controllers/CharactersController.js"
import StarshipController from "./Controllers/StarshipsController.js"
import PlanetsController from "./Controllers/PlanetsController.js"

class App {
  //valuesController = new ValuesController();
  charactersController = new CharactersController();
  starshipsController = new StarshipController();

  planetsController = new PlanetsController();

}

window["app"] = new App();
