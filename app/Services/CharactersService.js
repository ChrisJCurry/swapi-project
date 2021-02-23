import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Character from "../Models/Character.js";

class CharactersService {
  
    constructor() {
       this.getCharacters()
    }

    // api.get('people').then(function (res) {
        
    // })
    getCharacters() {
        api.get('people').then(res => {

            if(res.data.results != null) {
                ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
                ProxyState.cNext = res.data.next
                ProxyState.cPrev = res.data.previous

            }
               
        }).catch(err => console.error(err))
    }

    next() {
        api.get(ProxyState.cNext).then(res => {
            if(res.data.results != null) {
                ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
                ProxyState.cNext = res.data.next
                ProxyState.cPrev = res.data.previous
            } 
        }).catch(err => console.error(err))
    }

    previous() {

        api.get(ProxyState.cPrev).then(res => {
            if(res.data.results != null) {
                ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
                ProxyState.cNext = res.data.next
                ProxyState.cPrev = res.data.previous
            }
            
        })
    }


}

export const charactersService = new CharactersService();