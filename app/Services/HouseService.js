import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HouseService{

 
    constructor(){
      this.getHouses()
    }
  
   async getHouses(){
   try{
     const res = await api.get('houses')
     console.log(res)
     ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
   } catch (error) {
     console.error(error)
   }
 }

async createHouse(rawHouse){
  try{
    const res = await api.post('houses', rawHouse)
    console.log(res)
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  } catch (error) {
    console.error(error)
  }
}

  async bid(id) {
    let house = ProxyState.houses.find(h => h.id === id)
    house.price += 100
    try{
      const res = await api.post('houses/' + id, house)
      console.log(res.data)
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try{
      const res = await api.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const houseService = new HouseService()