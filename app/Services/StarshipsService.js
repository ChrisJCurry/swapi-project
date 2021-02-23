import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Starship from "../Models/Starship.js";

class StarshipsService {
  
    constructor() {
        this.getStarships()
    }

    // api.get('people').then(function (res) {
        
    // })
    getStarships() {
        api.get('starships/').then(res => {
            console.log(res.data)

            if(res.data.results != null) {
                ProxyState.starships = res.data.results.map(rawStarshipData => new Starship(rawStarshipData))
                ProxyState.sNext = res.data.next
                ProxyState.sPrev = res.data.previous
            }
            
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.sNext).then(res => {

            if(res.data.results != null) {
                console.log("Res: ", res.data.results)
                
                ProxyState.starships = res.data.results.map(rawStarshipData => new Starship(rawStarshipData))
                ProxyState.sNext = res.data.next
                ProxyState.sPrev = res.data.previous
            } else {
                console.log("uh oh")
            }
            //console.log(res.data.next, res.data.prev)
            //console.log(ProxyState.next, ProxyState.prev)
        }).catch(err => console.error(err))
    }

    previous() {

        api.get(ProxyState.sPrev).then(res => {

            if(res.data.results != null) {
                ProxyState.starships = res.data.results.map(rawStarshipData => new Starship(rawStarshipData))
                ProxyState.sNext = res.data.next
                ProxyState.sPrev = res.data.previous
            }
            
        })
    }


}

export const starshipsService = new StarshipsService();