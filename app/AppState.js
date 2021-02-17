import Car from "./Models/Car.js"
import Value from "./Models/Value.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'https://i.pinimg.com/originals/9a/99/57/9a9957249a8f1f12d8711e9403d87278.jpg', year: 2012, description: "Its very nice", miles: 5000})]

  /**@type {House[]} */
  houses = [new House({homeType:"Apartment", beds:"Beds " + 1, bathrooms:"Bathroom " + 1, sqft: 900, price: 1500, imgUrl:'http://cdn.home-designing.com/wp-content/uploads/2015/10/wood-paneling-apartment.jpg'}), new House({homeType:"Condo", beds:"Beds " + 3, bathrooms:"Bathroom " + 2, sqft: 1378, price: 250000, imgUrl:'https://photos.zillowstatic.com/fp/4410c13274f1ad6ebe51ee7950cbc3de-cc_ft_768.jpg'})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
