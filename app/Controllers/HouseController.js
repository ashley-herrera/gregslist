import { ProxyState } from "../AppState.js"



function _draw(){
    let house = ProxyState.houses
    let template = ""
    house.forEach(house=> template += house.Template)
}

export default class HouseController{
    constructor(){
        console.log("house controller working")
    }
}