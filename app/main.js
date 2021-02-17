import ValuesController from "./Controllers/ValuesController.js";
import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";

class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  houseController = new HouseController();
}

window["app"] = new App();
