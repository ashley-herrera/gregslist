import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js";

function _draw(){
    let house = ProxyState.houses
    let template = ""
    house.forEach(house=> template += house.Template)
    // console.log(template)
    document.getElementById('houses').innerHTML = template
}

export default class HouseController{
    constructor(){
        _draw()
        ProxyState.on("houses", _draw)
    }

  createHouse(event){
    event.preventDefault();
    let form = event.target


    let rawHouse = {
      bedrooms: parseFloat(form.bedrooms.value),
      bathrooms: parseFloat(form.bathrooms.value),
      levels: parseFloat(form.levels.value),
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
    }
    houseService.createHouse(rawHouse)
  }

  bid(id){
    houseService.bid(id)
  }

  deleteHouse(id){
    houseService.deleteHouse(id)
  }

}