import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{

 
    constructor(){
      console.log("houses service");
    }
  
    createHouse(rawHouse) {
        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp
    }


     bid(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=> h.id === id)
    house.price += 100
    ProxyState.houses = temp
  }

  deleteCar(id) {
    let temp = ProxyState.houses
    let houseIndex = temp.findIndex(house =>  house.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.houses = temp
  }
}
export const houseService = new HouseService()