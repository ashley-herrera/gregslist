import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{

 
    constructor(){
      console.log("cars service");
    }
  
    createHouse(rawHouse) {
    //  let newCar = new Car(rawCar)
    //  console.log(newCar)
    //  ProxyState.cars = [...ProxyState.cars, newCar]
        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp
    }
}
export const houseService = new HouseService()