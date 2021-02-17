import {generateId} from "../Utils/GenerateId.js"

export default class House{
    constructor({homeType, beds, bathrooms, sqft, price, imgUrl}){
      this.homeType = homeType
      this.beds = beds
      this.bathrooms = bathrooms
      this.sqft = sqft
      this.price = price
      this.imgUrl = imgUrl
      this.id = generateId()
    }

    get Template(){
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.homeType} ${this.beds} - ${this.bathrooms}</h4>
            <p>Sq.Ft : ${this.sqft}</p>
            <p>Price: ${this.price}</p>
            <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
        </div>
      </div>`
    }
}