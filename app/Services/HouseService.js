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
     bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c=> c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  deleteCar(id) {
    let temp = ProxyState.cars
    let carIndex = temp.findIndex(car =>  car.id == id)
    temp.splice(carIndex, 1)
    ProxyState.cars = temp
  }
}
export const houseService = new HouseService()