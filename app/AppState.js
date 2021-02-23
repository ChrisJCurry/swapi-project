import Value from "./Models/Value.js"
import Character from "./Models/Character.js"
import Starship from "./Models/Starship.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  characters = []
  cNext = ''
  cPrev = ''
  starships = []
  sNext = ''
  sPrev = ''
  planets = []
  pNext = ''
  pPrev = ''

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
