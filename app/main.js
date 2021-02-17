import CarsController from "./Controllers/CarsController.js";
import ValuesController from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  houseController = new HouseController();
}

window["app"] = new App();
