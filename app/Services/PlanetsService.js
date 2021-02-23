import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Planet from "../Models/Planet.js";

class PlanetsService {
  
    constructor() {
        this.getPlanets()
    }

    // api.get('people').then(function (res) {
        
    // })
    getPlanets() {
        api.get('planets').then(res => {
            console.log(res.data)

            if(res.data.results != null) {
                ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
                ProxyState.pNext = res.data.next
                ProxyState.pPrev = res.data.previous
            }
            
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.pNext).then(res => {

            if(res.data.results != null) {
                console.log("Res: ", res.data.results)
                debugger
                ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
                ProxyState.pNext = res.data.next
                ProxyState.pPrev = res.data.previous
            } else {
                console.log("uh oh")
            }
            //console.log(res.data.next, res.data.prev)
            //console.log(ProxyState.next, ProxyState.prev)
        }).catch(err => console.error(err))
    }

    previous() {

        api.get(ProxyState.pPrev).then(res => {

            if(res.data.results != null) {
                ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
                ProxyState.pNext = res.data.next
                ProxyState.pPrev = res.data.previous
            }
            
        })
    }


}

export const planetsService = new PlanetsService();